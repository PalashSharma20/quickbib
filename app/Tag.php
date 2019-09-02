<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
  // No need for default timestamps

  public $timestamps = false;

  // This attribute can be filled

  protected $fillable = ['tag'];

  // A tag belongs to a citation source

  public function citationSource()
  {
    return $this->belongsTo(CitationSource::class, 'citation_source_id');
  }
}
