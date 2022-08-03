'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const sounds = ['sound-1', 'sound-2', 'sound-3', 'sound-4', 'sound-5', 'sound-6'];

sounds.forEach(function (sound) {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = sound;
  btn.addEventListener('click', function () {
    stopSound();
    document.getElementById(sound).play();
  });

  document.querySelector('.sounds').appendChild(btn);
});

const stopSound = function () {
  sounds.forEach(function (sound) {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
};
