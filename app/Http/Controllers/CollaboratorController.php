<?php

namespace App\Http\Controllers;

use App\User;
use App\Project;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class CollaboratorController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(Project $project, Request $request)
  {
    $collaborators = $project
      ->collaborators()
      ->where('user_projects.user_id', '!=', $project->user_id)
      ->get();
    return $collaborators;
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Project $project, Request $request)
  {
    $collaborator = User::find($request->collaboratorId);
    $project->collaborators()->attach($collaborator);
    return $collaborator;
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy(Project $project, User $collaborator)
  {
    if ($collaborator->id != $project->user_id) {
      $project->collaborators()->detach($collaborator);
      return ["sameId" => $collaborator->id == Auth::user()->id];
    }
    abort(400);
  }
}
