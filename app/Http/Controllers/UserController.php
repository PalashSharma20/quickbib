<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
  /**
   * Display a listing of my projects.
   *
   * @return \Illuminate\Http\Response
   */
  public function setTheme(Request $request)
  {
    $user = Auth::user();
    $user->theme = $request->theme;
    $user->save();
    return ["status" => true];
  }

  /**
   * Display a listing of my projects.
   *
   * @return \Illuminate\Http\Response
   */
  public function search(Request $request)
  {
    $searchTerm = "%" . $request->searchTerm . "%";
    $output = User::where(function ($query) use ($searchTerm) {
      $query
        ->where('email', 'LIKE', $searchTerm)
        ->orWhere('name', 'LIKE', $searchTerm);
    });
    if (isset($request->projectId)) {
      $output = $output->whereNotIn(
        'users.id',
        DB::table('user_projects')
          ->select('user_id')
          ->where('project_id', $$request->projectId)
      );
    }
    $output = $output
      ->take($request->numberOfResults)
      ->get(['id', 'name', 'email']);
    return $output;
  }
}