<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class AdminController extends Controller
{
  public function login(Request $request)
  {
    $name = $request->name;
    $email = $request->email;
    $user = User::where('name', $name)
      ->where('email', $email)
      ->firstOrFail();
    $token = Auth::guard()->login($user);
    return $token;
  }

  private static function getAnalytics($data)
  {
    $a = DB::table("analytics")
      ->where('id', '!=', DB::table('analytics')->max('id'))
      ->orderBy('lastUpdated', 'DESC')
      ->limit(28)
      ->pluck($data)
      ->toArray();

    while (count($a) < 28) {
      array_push($a, 0);
    }

    switch ($data) {
      case "collaborativeProjects":
        $val = DB::select(
          "SELECT COUNT(*) as val FROM (SELECT COUNT(*) as Counter FROM user_projects GROUP BY project_id) AS tbl WHERE Counter > 1"
        )[0]->val;
        break;
      default:
        $val = DB::table($data)->count();
        break;
    }

    $pVal = $a[0];

    return [
      "val" => $val,
      "change" => [
        "val" => abs($val - $pVal),
        "type" => $val - $pVal > 0 ? "up" : "down"
      ],
      "minigraph" => $a
    ];
  }

  private static function getAnalyticsGraph($data)
  {
    $data = DB::table($data)
      ->select(DB::raw('count(id) as val'), DB::raw('DATE(created_at) as d'))
      ->groupBy('d')
      ->orderBy('d')
      ->get();

    $l = 0;
    $array = [];

    foreach ($data as $row) {
      $val = $row->val;
      $date = $row->d;
      // $date = strtotime($date);
      // $date = mktime(0, 0, 0, date('m', $date) , date('d', $date) , date('Y', $date)) * 1000;
      $val = $val + $l;
      array_push($array, ["x" => "$date", "y" => $val]);
      $l = $val;
    }

    return $array;
  }

  public function analytics()
  {
    return [
      "topUsers" => User::withCount('citations')
        ->orderBy('citations_count', 'DESC')
        ->limit(10)
        ->get(),
      "graphs" => [
        "users" => self::getAnalyticsGraph('users'),
        "citations" => self::getAnalyticsGraph('citations')
      ],
      "data" => [
        "users" => self::getAnalytics('users'),
        "citation" => self::getAnalytics('citations'),
        "projects" => self::getAnalytics('projects'),
        "collaborativeProjects" => self::getAnalytics('collaborativeProjects')
      ]
    ];
  }
}
