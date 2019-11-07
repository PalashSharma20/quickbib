<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return [
      "mine" => Auth::user()
        ->projects()
        ->where("projects.user_id", Auth::user()->id)
        ->orderBy("created_at", "ASC")
        ->get(),
      "shared" => Auth::user()
        ->projects()
        ->with("user")
        ->where("projects.user_id", "!=", Auth::user()->id)
        ->orderBy("created_at", "ASC")
        ->get()
    ];
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $project = new Project();

    $user = Auth::user();

    $project->name = $request->name;
    $project->user_id = $user->id;
    $project->style_id = $request->style_id;
    $user->projects()->save($project);

    return $project;
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Project  $project
   * @return \Illuminate\Http\Response
   */
  public function show(Project $project)
  {
    $project = Project::with([
      "citations" => function ($query) {
        $query->orderBy("id");
      },
      "user",
      "collaborators",
    ])->findOrFail($project->id);
    $project['style'] = $project->getStyle();
    return $project;
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \App\Project  $project
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function update(Project $project, Request $request)
  {
    $project->style_id = $request->style_id;
    $project->save();
    return $project;
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Project  $project
   * @return \Illuminate\Http\Response
   */
  public function destroy(Project $project)
  {
    $project->citations()->delete();
    $project->collaborators()->detach();
    $project->delete();
    return ["status" => true];
  }
}
