'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const sounds = ['pepe', 'america', 'corito', 'demencia', 'sopa', 'vistima', 'wladi'];

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
