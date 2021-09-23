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

Route::get("/kota-asal/{id}", "ApiController@getCities");
Route::get("/kota-tujuan/{id}", "ApiController@getCities");

Route::post("/get-ongkir/{origin}/{destination}/{weight}/{courier}", "ApiController@getOngkir");

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
