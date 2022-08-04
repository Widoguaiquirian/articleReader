'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const sound = document.querySelector('.sound-1');
const btnPlay = document.querySelector('.btnPlay');
const btnStop = document.querySelector('.btnStop');

btnPlay.addEventListener('click', function () {
  sound.play();
});

btnStop.addEventListener('click', function () {
  sound.pause();
  sound.currentTime = 0;
});
