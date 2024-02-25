var video = document.querySelector("#video-webcam");

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

if (navigator.getUserMedia) {
    navigator.getUserMedia({ video: true }, handleVideo, videoError);
}

function handleVideo(stream) {
    video.srcObject = stream;
}

function videoError(e) {

    alert("Izinkan menggunakan webcam untuk presensi!");
}

function takeSnapshot() {

    var img = document.createElement('img');
    var context;

    var width = 500;
    var height = 500;

    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, width, height);

    img.src = canvas.toDataURL('image/png');

    document.getElementById('foto').value = canvas.toDataURL('image/png');

    img.remove();
}
