<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
  use Notifiable;

  protected $fillable = ['name', 'email'];

  protected $appends = ['plan', 'project_usage', 'citation_usage'];

  protected $hidden = ['pivot'];

  public static function boot()
  {
    parent::boot();
    static::creating(function ($model) {
      $model->level = self::assignLevel($model->email);
    });
  }

  public function projects()
  {
    return $this->belongsToMany(Project::class, 'user_projects');
  }

  public function citations()
  {
    return $this->hasMany(Citation::class);
  }

  public function getJWTIdentifier()
  {
    return $this->getKey();
  }

  public function getJWTCustomClaims()
  {
    return [];
  }

  public function getPlanAttribute()
  {
    switch ($this->level) {
      case 1:
        return "Free";
      case 2:
        return "Student";
      case 3:
        return "Premium";
      default:
        return "Unlimited";
    }
  }

  public function getProjectUsageAttribute()
  {
    $n = $this->projects()
      ->where("projects.user_id", $this->id)
      ->count();
    if ($this->level < 4) {
      switch ($this->level) {
        case 2:
          $num = 4;
          break;
        case 3:
          $num = 5;
          break;
        default:
          $num = 3;
          break;
      }
      $status = $num > $n;
    } else {
      $status = true;
    }
    return [
      "n" => $n,
      "status" => $status
    ];
  }

  public function getCitationUsageAttribute()
  {
    $n = $this->citations()->count();
    if ($this->level < 4) {
      switch ($this->level) {
        case 3:
          $num = 200;
          break;
        case 2:
          $num = 150;
          break;
        default:
          $num = 100;
          break;
      }
      $status = $num > $n;
    } else {
      $status = true;
    }
    return [
      "n" => $n,
      "status" => $status
    ];
  }

  private static function validateEmail($email, $domains)
  {
    foreach ($domains as $domain) {
      $pos = strpos($email, $domain, strlen($email) - strlen($domain));
      if ($pos === false) {
        continue;
      }
      if (
        $pos == 0 ||
        $email[(int) $pos - 1] == "@" ||
        $email[(int) $pos - 1] == "."
      ) {
        return true;
      }
    }
    return false;
  }

  private static function assignLevel($email)
  {
    $list = [
      "4" => ["palashsharma.com", "palash.fyi"],
      "3" => ["palash.gq"],
      "2" => ["gapps.uwcsea.edu.sg", "uwcsea.edu.sg"]
    ];
    foreach ($list as $level => $emailList) {
      if (self::validateEmail($email, $emailList)) {
        return $level;
      }
    }
    return 1;
  }
}