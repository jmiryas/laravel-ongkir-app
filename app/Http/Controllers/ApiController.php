<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class ApiController extends Controller
{
    public function getCities($province_id) {
        $client = new Client();

        $url = "https://api.rajaongkir.com/starter/city?province=" . $province_id;

        $headers = [
            'key' => '3d1df54e61885b04a6baec75fa1c15de'
        ];

        $response = $client->request('GET', $url, [
            'headers' => $headers,
        ]);

        $responseBody = json_decode($response->getBody(), true);

        $cities = $responseBody["rajaongkir"]["results"];

        return response()->json($cities, 200);
    }

    public function getOngkir($origin, $destination, $weight, $courier) {
        $client = new Client();

        $url = "https://api.rajaongkir.com/starter/cost";

        $headers = [
            'key' => '3d1df54e61885b04a6baec75fa1c15de'
        ];

        $response = $client->request('POST', $url, [
            'headers' => $headers,
            'form_params' => [
                'origin' => $origin,
                'destination' => $destination,
                'weight' => $weight,
                "courier" => $courier
            ]
        ]);

        $responseBody = json_decode($response->getBody(), true);

        $costs = $responseBody["rajaongkir"]["results"];

        return response()->json($costs, 200);
    }
}
