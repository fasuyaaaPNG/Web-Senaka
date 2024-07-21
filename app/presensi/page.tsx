"use client";

import "./style.css";
import { useEffect, useState } from "react";
import SignaturePad from "signature_pad";
import supabase from '../lib/supabase';

export default function Presensi() {
    const [namaLengkap, setNamaLengkap] = useState('');
    const [kelas, setKelas] = useState('');
    const [tanggal, setTanggal] = useState('');
    const [foto, setFoto] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        // Ambil data dari canvas signature
        const canvas = document.getElementById("signature-pad") as HTMLCanvasElement;
        const dataURL = canvas.toDataURL('image/png');
    
        // Dekode data URL menjadi blob
        const blob = await fetch(dataURL).then((res) => res.blob());
    
        // Simpan foto ke Supabase storage
        const { data, error } = await supabase.storage.from('ttd').upload(`ttd_${namaLengkap}_${tanggal}.png`, blob);
    
        if (error) {
            console.error('Error uploading image:', error.message);
            alert("kamu sudah presensi hari ini!")
            window.location.reload();
            return;
        }
    
        // Dapatkan URL publik dari gambar yang diunggah
        // const imageUrl = data?.id ? `${supabase.storage.from('ttd').getPublicUrl(data.id)}` : ' https://kssbbbeqxandmsqahpsq.supabase.co/storage/v1/object/public/ttd/ttd_{namaLengkap}_{tanggal}.png';
        const imageUrl = `https://kssbbbeqxandmsqahpsq.supabase.co/storage/v1/object/public/ttd/ttd_${namaLengkap}_${tanggal}.png`;

        // Simpan data ke tabel Supabase
        const { data: insertedData, error: insertError } = await supabase
            .from('presensi_senaka')
            .insert([
                { nama_lengkap: namaLengkap, kelas: kelas, tanggal: tanggal, foto: imageUrl }
            ]);
    
        if (insertError) {
            console.error('Error inserting data:', insertError.message);
            return;
        }
    
        console.log('Data inserted successfully:', insertedData);
        alert("presensi berhasil!")
        window.location.reload();
    };
    

    useEffect(() => {
        const canvas = document.getElementById("signature-pad") as HTMLCanvasElement;

        const resizeCanvas = (): void => {
            const ratio = Math.max(window.devicePixelRatio || 1, 1);
            canvas.width = canvas.offsetWidth * ratio;
            canvas.height = canvas.offsetHeight * ratio;
            const ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.scale(ratio, ratio);
            }
        };

        window.onresize = resizeCanvas;
        resizeCanvas();

        const signaturePad = new SignaturePad(canvas, { backgroundColor: 'transparent' });
        signaturePad.toDataURL();

        document.getElementById("clear")?.addEventListener('click', () => {
            signaturePad.clear();
        });

        // Clean up function
        return () => {
            window.onresize = null; // Unregister the resize handler
        };
    }, []);

    return (
        <div className="background">
            <div className="hiasanBackground"></div>
            <img src="./assets/presensi/gerbang.svg" alt="" className="gerbang" />
            <div className="content">
                <p className="judul">
                    <span className="judulUtama">PRESENSI SENAKA</span><br /> <span className="judulKanji">セナカ の めんぜん</span>
                </p>
            </div>
            <img src="./assets/presensi/sampah.png" id="clear" alt="" className="iconHapus"/>
            <form onSubmit={handleSubmit} name="signature" method="POST">
                <div className="inputNamaKelasTanggalCam">
                    <fieldset className="Nama">
                        <legend>
                            Nama Lengkap
                        </legend>
                        <input type="text" required name="nama_lengkap" value={namaLengkap} onChange={(e) => setNamaLengkap(e.target.value)}/>
                    </fieldset>
                    <fieldset className="Kelas">
                        <legend>
                            Kelas
                        </legend>
                        <input type="text" required name="kelas" maxLength={15} value={kelas} onChange={(e) => setKelas(e.target.value)}/>
                    </fieldset>
                    <fieldset className="Tanggal">
                        <legend>
                            Tanggal
                        </legend>
                        <input type="date" required name="tanggal" value={tanggal} onChange={(e) => setTanggal(e.target.value)}/>
                    </fieldset>
                    <label className="labelTD" htmlFor="">Tanda tangan: </label>
                    <canvas id="signature-pad"></canvas>
                    <input type="hidden" name="foto" id="foto" value={foto} onChange={(e) => setFoto(e.target.value)}/>
                </div>
                <button type="submit" className="kirim">
                    Kirim
                </button>
            </form>
            <img src="assets/presensi/gambarBelakang.svg" alt="" className="gambarKanan"/>
            <img src="assets/presensi/gambarBelakang.svg" alt="" className="gambarKiri"/>
        </div>       
    )
}