<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        SENAKA
    </title>
    <link rel="stylesheet" href="styles/presensi.css">
</head>
<body>
    <img src="assets/presensi/backBlue.svg" class="blue" alt="">
    <img src="assets/presensi/gerbang.svg" class="gerbang" alt="">
    <div class="background">
        <div class="content">
            <div class="judulJepang">
                <div class="judul">
                    PRESENSI SENAKA
                </div>
                <div class="jepang">
                    セナカ の めんぜん
                </div>
            </div>
            <form action="" method="post">
                <div class="inputNamaKelasTanggalCam">
                    <fieldset class="Nama">
                        <legend>
                            Nama Lengkap
                        </legend>
                        <input type="text">
                    </fieldset>
                    <fieldset class="Kelas">
                        <legend>
                            Kelas
                        </legend>
                        <input type="text" maxlength="15">
                    </fieldset>
                    <fieldset class="Tanggal">
                        <legend>
                            Tanggal
                        </legend>
                        <input type="date">
                    </fieldset>
                    <div class="video">
                        <video autoplay="true" id="video-webcam">
                            <object type="text/plain">
                                Browsermu tidak mendukung bro, upgrade donk!
                            </object>
                        </video>
                    </div>
                </div>
                <button type="submit" class="kirim" onclick="takeSnapshot()">
                    Kirim
                </button>
            </form>
        </div>
    </div>
    <img src="assets/presensi/gambarBelakang.svg" alt="" class="gambarKanan">
    <img src="assets/presensi/gambarBelakang.svg" alt="" class="gambarKiri">
    <script src="js/cam.js"></script> 
</body>
</html>
