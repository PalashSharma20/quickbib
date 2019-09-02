<?php

namespace App\Http\Controllers;

use App\Project;
use App\Citation;
use App\CitationSource;
use App\Tag;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Embed\Embed;

class CitationController extends Controller
{
  public function retrieve(Request $request, Project $project)
  {
    $project['style'] = $project->getStyle();
    $data = Citation::retrieve($request->type, $request->source, $project);
    return $data;
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \App\Project  $project
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Project $project, Request $request)
  {
    $citationSource = CitationSource::firstOrCreate([
      'type' => $request->type,
      'source' => strtok($request->source, "?")
    ]);
    $citation = new Citation();
    $citation->user_id = Auth::user()->id;
    $citation->first_name = $request->first_name;
    $citation->last_name = $request->last_name;
    $citation->article_title = $request->article_title;
    $citation->web_title = $request->web_title;
    if (isset($request->date) && $request->date != "") {
      $citation->date = date('Y-m-d', strtotime($request->date));
    }
    $project->citations()->save($citation);
    $citationSource->citations()->save($citation);
    if ($request->type == "URL") {
      $info = Embed::create($request->source);
      $tags = $this->addTag($info->tags);
      $citationSource->tags()->saveMany($tags);
    }
    return $citation;
  }

  private function addTag($array)
  {
    return array_map(function ($string) {
      return Tag::firstOrNew(["tag" => $string]);
    }, (array) $array);
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Project  $project
   * @param  \App\Citation  $citation
   * @return \Illuminate\Http\Response
   */
  public function show(Project $project, Citation $citation)
  {
    $project['style'] = $project->getStyle();
    $citation['project'] = $project;
    return $citation;
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \App\Project  $project
   * @param  \App\Citation  $citation
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function update(Project $project, Citation $citation, Request $request)
  {
    $citation->first_name = $request->first_name;
    $citation->last_name = $request->last_name;
    $citation->article_title = $request->article_title;
    $citation->web_title = $request->web_title;
    if (isset($request->date) && $request->date != "") {
      $citation->date = date('Y-m-d', strtotime($request->date));
    }
    $citation->save();
    return $citation;
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Project  $project
   * @param  \App\Citation  $citation
   * @return \Illuminate\Http\Response
   */
  public function destroy(Project $project, Citation $citation)
  {
    $citation->delete();
    return ["status" => true];
  }
}
