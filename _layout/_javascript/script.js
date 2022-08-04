'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const sound = document.querySelector('.sound-1');
const btnPlay = document.querySelector('.btnPlay');
const btnStop = document.querySelector('.btnStop');
let count = 0;

btnPlay.addEventListener('click', function () {
  if (count === 0) {
    btnPlay.innerHTML = `<i class="fa fa-pause"></i> Detener lectura`;
    count = 1;
    sound.play();
  } else {
    count = 0;
    sound.pause();
    btnPlay.innerHTML = `<i class="fas fa-play"> </i> Escuchar artículo`;
  }
});

btnStop.addEventListener('click', function () {
  sound.pause();
  sound.currentTime = 0;
  btnPlay.innerHTML = `<i class="fas fa-play"> </i> Escuchar artículo`;
});
