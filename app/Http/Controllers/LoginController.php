<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\User;
use Socialite;

class LoginController extends Controller
{
  public function redirect($provider)
  {
    return Socialite::driver($provider)
      ->stateless()
      ->redirect();
  }

  public function callback($provider)
  {
    $getInfo = Socialite::driver($provider)
      ->stateless()
      ->user();
    $user = User::firstOrCreate(
      ['email' => $getInfo->email],
      ['name' => $getInfo->name]
    );
    if ($token = Auth::login($user)) {
      return response(
        "<script>window.opener.postMessage(JSON.stringify({token:'$token'}), '" .
        getenv('APP_URL') .
        "');window.close()</script>",
        200
      )->header('Content-Type', 'text/html');
    }
  }

  public function login(Request $request)
  {
    return response()
      ->json(['status' => 'success'], 200)
      ->header('Authorization', $request->token);
  }

  public function logout()
  {
    Auth::logout();
    return response()->json(
      [
        'status' => 'success',
        'msg' => 'Logged out Successfully.'
      ],
      200
    );
  }

  public function user(Request $request)
  {
    $user = User::find(Auth::user()->id);
    return response()->json([
      'status' => 'success',
      'data' => $user
    ]);
  }

  public function refresh()
  {
    try {
      $token = Auth::refresh();
      return response()
        ->json(['status' => 'successs'], 200)
        ->header('Authorization', $token);
    } catch (\PHPOpenSourceSaver\JWTAuth\Exceptions\TokenExpiredException $e) {
    }
    return response()->json(['error' => 'refresh_token_error'], 401);
  }
}