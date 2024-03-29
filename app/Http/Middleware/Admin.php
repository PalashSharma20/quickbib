<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class Admin
{
  /**
   * Handle an incoming request.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \Closure  $next
   * @return mixed
   */
  public function handle($request, Closure $next)
  {
    if (Auth::user()->level == 10) {
      return $next($request);
    } else {
      return response()->json(['error' => 'Unauthorized'], 403);
    }
  }
}
