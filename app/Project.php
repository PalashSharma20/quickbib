<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Http\Traits\Hashidable;

class Project extends Model
{
  // This is a trait that can hash the id of the model

  use Hashidable;

  protected $fillable = ['name', 'user_id', 'style_id'];

  // These are attributed that I want hidden from the JSON

  protected $hidden = ['id', 'style_id', 'pivot'];

  // This is an appended attribute to hash the id

  protected $appends = ['routeKey'];

  // The value returned by this function is assigned to the 'routeKey' attribute

  public function getRouteKeyAttribute()
  {
    return $this->getRouteKey();
  }

  // A project belongs to one admin user

  public function user()
  {
    return $this->belongsTo(User::class, 'user_id');
  }

  // However, many user can a project as a collaborator

  public function collaborators()
  {
    return $this->belongsToMany(User::class, 'user_projects');
  }

  // Projects have many citations

  public function citations()
  {
    return $this->hasMany(Citation::class);
  }

  // The style is fetched from a service called Algolia as their were over 9000 styles
  // It is only fethced on demand.

  public function getStyle()
  {
    $client = \Algolia\AlgoliaSearch\SearchClient::create(
      env('ALGOLIA_APPLICATION_ID'),
      env('ALGOLIA_ADMIN_API_KEY')
    );
    $index = $client->initIndex('styles');
    return $index->getObject($this->style_id);
  }
}