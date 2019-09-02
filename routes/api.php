<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Social Login
Route::prefix('auth')->group(function () {
  Route::get('login/{provider}', 'LoginController@redirect');
  Route::get('callback/{provider}', 'LoginController@callback');
  Route::post('login', 'LoginController@login');
  Route::get('refresh', 'LoginController@refresh');
  Route::group(['middleware' => 'auth:api'], function () {
    Route::get('user', 'LoginController@user');
    Route::post('logout', 'LoginController@logout');
  });
});

Route::group(['middleware' => 'auth:api'], function () {
  // Users Search
  Route::post('users/search', 'UserController@search');

  // Current User
  Route::post('users/me/set-theme', 'UserController@setTheme');

  // Projects
  Route::get('projects', 'ProjectController@index');
  Route::post('projects', 'ProjectController@store');
  Route::get('projects/{project}', 'ProjectController@show');
  Route::post('projects/{project}/set-style', 'ProjectController@setStyle');
  Route::delete('projects/{project}', 'ProjectController@destroy');

  // Citation
  Route::post(
    'projects/{project}/citations/retrieve',
    'CitationController@retrieve'
  );
  Route::post('projects/{project}/citations', 'CitationController@store');
  Route::get(
    'projects/{project}/citations/{citation}',
    'CitationController@show'
  );
  Route::put(
    'projects/{project}/citations/{citation}',
    'CitationController@update'
  );
  Route::delete(
    'projects/{project}/citations/{citation}',
    'CitationController@destroy'
  );

  // Collaborators
  Route::get(
    'projects/{project}/collaborators',
    'CollaboratorController@index'
  );
  Route::post(
    'projects/{project}/collaborators',
    'CollaboratorController@store'
  );
  Route::delete(
    'projects/{project}/collaborators/{collaborator}',
    'CollaboratorController@destroy'
  );

  // Recommendations
  Route::get(
    'projects/{project}/recommendations',
    'RecommendationController@index'
  );

  // Admin
  Route::group(['middleware' => 'admin'], function () {
    Route::get('admin/analytics', 'AdminController@analytics');
    Route::post('admin/login', 'AdminController@login');
  });
});

// Analytics
Route::get('analytics/cron', 'AnalyticController@cron');
