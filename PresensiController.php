<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Presensi;

class PresensiController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'nama_lengkap' => 'required|string',
            'kelas' => 'required|string|max:15',
            'tanggal' => 'required|date',
            'foto' => 'required|string' 
        ]);

        $base64Data = substr($request->foto, strpos($request->foto, ',') + 1);

        $fotoBinary = base64_decode($base64Data);

        Presensi::create([
            'nama_lengkap' => $request->nama_lengkap,
            'kelas' => $request->kelas,
            'tanggal' => $request->tanggal,
            'foto' => $fotoBinary
        ]);

        return redirect()->back()->with('success', 'Presensi berhasil disimpan.');
    }
}