<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('register', 'App\Http\Controllers\JWTAuthController@register');
    Route::post('login', 'App\Http\Controllers\JWTAuthController@login');
    Route::post('logout', 'App\Http\Controllers\JWTAuthController@logout');
    Route::post('refresh', 'App\Http\Controllers\JWTAuthController@refresh');
    Route::get('profile', 'App\Http\Controllers\JWTAuthController@profile');

});