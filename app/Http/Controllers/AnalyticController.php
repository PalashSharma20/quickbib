<?php

namespace App\Http\Controllers;

use App\User;
use App\Project;
use App\Citation;
use Illuminate\Support\Facades\DB;

class AnalyticController extends Controller
{
  public function cron()
  {
    $data = [
      "users" => User::count(),
      "citations" => Citation::count(),
      "projects" => Project::count(),
      "collaborativeProjects" => Project::has('collaborators', '>', '1')
        ->with('collaborators')
        ->count()
    ];
    if (
      DB::table("analytics")
        ->where(DB::raw('DATE("lastUpdated")'), DB::raw('DATE(NOW())'))
        ->count() < 1
    ) {
      DB::table("analytics")->insert($data);
    } else {
      DB::table("analytics")
        ->where(DB::raw('DATE("lastUpdated")'), DB::raw('DATE(NOW())'))
        ->update($data);
    }
    return $data;
  }
}
