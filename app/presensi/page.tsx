import "./style.css"

export default function Presensi() {
    return (
        <div className="background">
            <div className="hiasanBackground"></div>
            <img draggable={false} src="./assets/presensi/gerbang.svg" alt="" className="gerbang" />
            <div className="content">
                <p className="judul">
                    <span className="judulUtama">PRESENSI SENAKA</span><br /> <span className="judulKanji">セナカ の めんぜん</span>
                </p>
            </div>
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
                    <img draggable={false} src="./assets/presensi/sampah.png" id="clear" alt="" className="iconHapus"/>
                    <canvas id="signature-pad"></canvas>
                    <input type="hidden" name="foto" id="foto"/>
                </div>
                <button type="submit" className="kirim">
                    Kirim
                </button>
            </form>
            <img draggable={false} src="assets/presensi/gambarBelakang.svg" alt="" className="gambarKanan"/>
            <img draggable={false} src="assets/presensi/gambarBelakang.svg" alt="" className="gambarKiri"/>
        </div>       
    )
}