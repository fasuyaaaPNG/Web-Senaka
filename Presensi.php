<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Presensi extends Model
{
    protected $table = 'presensi_senaka';
    protected $fillable = ['nama_lengkap', 'kelas', 'tanggal', 'foto'];
}
