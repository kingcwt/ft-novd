
var videos = document.getElementsByTagName('video');
var video = videos[0];

video.onended=function(){
    $(".playPause").removeClass('fa-play fa-pause')
        .addClass('fa-undo');
};
$(".playPause").on('click',function () {
    if (video.paused) {
        play();
    } else {
        pause();
    }
});

function play() {
    video.play();
    $(".playPause").removeClass('fa-play fa-undo')
        .addClass('fa-pause');
}

function pause() {
    video.pause();
    $(".playPause").removeClass('fa-pause fa-undo')
        .addClass('fa-play');
}
