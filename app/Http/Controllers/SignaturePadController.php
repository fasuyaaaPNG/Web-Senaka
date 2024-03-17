<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;

use Illuminate\Http\Request;

class SignaturePadController extends Controller
{
    public function index() {
        return view('signaturePad');
    }

    public function upload(Request $request) {
        $image_parts = explode(";base64,", $request->signed);
        $image_type_aux = explode('image/', $image_parts[0]);
        $image_type = $image_type_aux[1];
        $image_base64 = base64_decode($image_parts[1]);

        $filename = uniqid() . '.' . $image_type;

        $path = Storage::put('public/' . $filename, $image_base64);

        $url = Storage::url($path);

        return back()->with('success', 'File uploaded successfully. URL: ' . $url);

    }
}
