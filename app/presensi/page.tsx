"use client";

import { useEffect } from "react";
import "./style.css"
import SignaturePad from "signature_pad";

export default function Presensi() {

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

        const signaturePad = new SignaturePad(canvas, { backgroundColor: 'rgb(250,250,250)' });

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
            <form action="{{ route('presensi.store') }}" name="signature" method="POST">
                <div className="inputNamaKelasTanggalCam">
                    <fieldset className="Nama">
                        <legend>
                            Nama Lengkap
                        </legend>
                        <input type="text" required name="nama_lengkap"/>
                    </fieldset>
                    <fieldset className="Kelas">
                        <legend>
                            Kelas
                        </legend>
                        <input type="text" required name="kelas" maxLength={15}/>
                    </fieldset>
                    <fieldset className="Tanggal">
                        <legend>
                            Tanggal
                        </legend>
                        <input type="date" required name="tanggal"/>
                    </fieldset>
                    <label className="labelTD" htmlFor="">Tanda tangan: </label>
                    <canvas id="signature-pad"></canvas>
                    <input type="hidden" name="foto" id="foto"/>
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