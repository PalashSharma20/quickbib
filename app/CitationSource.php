<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CitationSource extends Model
{
  // No need for default timestamps

  public $timestamps = false;

  // These attributes can be filled

  protected $fillable = ['source', 'type'];

  // A citation source has many citations

  public function citations()
  {
    return $this->hasMany(Citation::class);
  }

  // A citation source has many tags

  public function tags()
  {
    return $this->hasMany(Tag::class);
  }
}
