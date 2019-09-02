<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Embed\Embed;
use App\Http\Traits\Hashidable;

class Citation extends Model
{
  // This is a trait that can hash the id of the model

  use Hashidable;

  // These are attributes that can be filled

  protected $fillable = [
    'user_id',
    'first_name',
    'last_name',
    'article_title',
    'web_title',
    'date'
  ];

  // These are attributed that I want hidden from the model output

  protected $hidden = ['id'];

  // This is an appended attribute to hash the id

  protected $appends = ['routeKey', 'source', 'type'];

  // This is to format the date attribute

  protected $casts = [
    'date' => 'date:c'
  ];

  // The value returned by this function is assigned to the 'routeKey' attribute

  public function getRouteKeyAttribute()
  {
    return $this->getRouteKey();
  }

  public function getSourceAttribute()
  {
    return $this->citationSource->source;
  }
  public function getTypeAttribute()
  {
    return $this->citationSource->type;
  }

  // A citation belong to one user

  public function user()
  {
    return $this->belongsTo(User::class, 'user_id');
  }

  // A citation belong to one project

  public function project()
  {
    return $this->belongsTo(Project::class, 'project_id');
  }

  // A citation belong to one citation_source

  public function citationSource()
  {
    return $this->belongsTo(CitationSource::class, 'citation_source_id');
  }

  /**
   * Retrieve information from website or book
   *
   * @param string $type Type of citation
   * @param string $url URL or ISBN
   *
   * @return array
   */
  public static function retrieve($type, $source, $project)
  {
    switch ($type) {
      case "URL":
        $source = urldecode($source);
        $info = Embed::create($source);
        $authorName = $info->authorName ?? "";
        $title = $info->title ?? "";
        $providerName = $info->providerName ?? "";
        $publishedTime = $info->publishedTime ?? "";
        break;
      case "isbn":
        $info = json_decode(
          file_get_contents(
            "https://www.googleapis.com/books/v1/volumes?q=isbn:" .
              $source .
              "&country=SG"
          ),
          true
        );
        $authorName = $info["items"][0]["volumeInfo"]["authors"][0] ?? "";
        $title = $info["items"][0]["volumeInfo"]["title"] ?? "";
        $providerName = $info["items"][0]["volumeInfo"]["publisher"] ?? "";
        $publishedTime = $info["items"][0]["volumeInfo"]["publishedDate"] ?? "";
        break;
    }
    return self::processInfo(
      $authorName,
      $title,
      $providerName,
      $publishedTime,
      $source,
      $type,
      $project
    );
  }

  /**
   * Process the retrived information
   *
   * @param
   *
   * @return array
   */
  private static function processInfo(
    $name,
    $article_title,
    $web_title,
    $date,
    $source,
    $type,
    $project
  ) {
    $name = ucwords(mb_strtolower($name));
    $name = preg_replace("/[.,]/", "", $name);
    $name = str_replace("By ", "", $name);
    $name = explode("And", $name);
    $name = end($name);
    $name = explode(" ", $name);
    $last_name = rtrim(array_pop($name));
    $first_name = rtrim(implode(" ", $name));
    $date = date('Y-m-d', strtotime($date));
    $date = date('c', strtotime($date));
    if ($date == "1970-01-01T00:00:00+00:00") {
      $date = "";
    }
    return [
      "first_name" => $first_name,
      "last_name" => $last_name,
      "article_title" => $article_title,
      "web_title" => $web_title,
      "date" => $date,
      "source" => $source,
      "type" => $type,
      "project" => $project
    ];
  }
}
