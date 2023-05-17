<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
  // These are attributes that can be filled

  protected $fillable = ['name', 'user_id', 'style_id'];

  // These are attributed that I want hidden from the JSON

  protected $hidden = ['id', 'style_id', 'pivot'];

  // This is an appended attribute to hash the id

  protected $appends = ['routeKey'];

  // The value returned by this function is assigned to the 'routeKey' attribute

  public function getRouteKeyAttribute()
  {
    return $this->id;
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
      '8B734O9DDG',
      'a7b55640f6f9572d1beb158d01d7f581'
    );
    $index = $client->initIndex('styles');
    return $index->getObject($this->style_id);
  }
}