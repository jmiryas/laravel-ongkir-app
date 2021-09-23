<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class HomeController extends Controller
{
    public function index() {
        $client = new Client();

        $url = "https://api.rajaongkir.com/starter/province";

        $headers = [
            'key' => '3d1df54e61885b04a6baec75fa1c15de'
        ];

        $response = $client->request('GET', $url, [
            'headers' => $headers,
        ]);

        $responseBody = json_decode($response->getBody(), true);

        $provinces = $responseBody["rajaongkir"]["results"];

        return view("home.index", ["provinces" => $provinces]);
    }
}
