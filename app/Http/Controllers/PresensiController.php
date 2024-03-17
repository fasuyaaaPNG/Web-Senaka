<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Presensi;
use Illuminate\Support\Facades\App;

class PresensiController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'nama_lengkap' => 'required|string',
            'kelas' => 'required|string|max:15',
            'tanggal' => 'required|date',
            // 'foto' => 'required|string' 
        ]);

        $response = App::make('App\Http\Controllers\SignaturePadController')->upload($request);
        $url = $response->original;
        
        Presensi::create([
            'nama_lengkap' => $request->nama_lengkap,
            'kelas' => $request->kelas,
            'tanggal' => $request->tanggal,
            'foto' => $url 
        ]);

        return redirect()->back()->with('success', 'Presensi berhasil disimpan. URL Foto: ' . $url);
    }
}
