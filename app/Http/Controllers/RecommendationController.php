<?php

namespace App\Http\Controllers;

use App\User;
use App\Project;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class RecommendationController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(Project $project, Request $request)
  {
    $data = DB::table('project_recommendations')
      ->select('data')
      ->where("project_id", $project->id)
      ->whereRaw("created_at = date(NOW())")
      ->first();

    if (!$data) {
      $tags = DB::table('tags')
        ->join(
          'citation_sources',
          'citation_sources.id',
          '=',
          'tags.citation_source_id'
        )
        ->join(
          'citations',
          'citation_sources.id',
          '=',
          'citations.citation_source_id'
        )
        ->join('projects', 'citations.project_id', '=', 'projects.id')
        ->where('projects.id', $project->id)
        ->groupBy('tag')
        ->orderByRaw('count(*) DESC')
        ->pluck('tag')
        ->toArray();

      if (count($tags) > 0) {
        $tag_query = $tags[0];
        foreach (array_slice($tags, 1) as $tag) {
          $tag_query .= " OR " . $tag;
        }
        $tag_query = rawurlencode($tag_query);
        $url =
          "https://newsapi.org/v2/everything?q=" .
          $tag_query .
          "&sortBy=relevancy&apiKey=fee7e7403582411490030bd43383a1c0&pageSize=100";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt(
          $ch,
          CURLOPT_USERAGENT,
          "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13"
        );
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $result = curl_exec($ch);
        curl_close($ch);

        $data = json_decode($result, true)['articles'] ?? [];

        DB::table('project_recommendations')->updateOrInsert(
          ["project_id" => $project->id],
          ['data' => json_encode($data), 'created_at' => 'NOW()']
        );
      } else {
        $data = [];
      }
    } else {
      $data = json_decode($data->data, true);
    }
    $page = $request->query()['page'] ?? 1;
    return collect($data)->forPage($page, 10);
  }
}
