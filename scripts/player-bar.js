{
    $('button#play-pause').on('click', function () {
      player.playPause();
      $(this).attr('playState', player.playState);
    });
    $('button#next').on('click', function () {
      if (player.playState !== 'playing') { return; }
      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      const nextSongIndex = currentSongIndex + 1;
      if (nextSongIndex >= album.songs.length) { return; }
      const nextSong = album.songs[nextSongIndex];
      player.playPause(nextSong);
    });
    $('button#previous').on('click', function () {
      if (player.playState !== 'playing') { return; }
      const prevSongIndex = currentSongIndex - 1;
      if (prevSongIdex <= album.songs.length) { return; }
    });
    $('time-control input').on('input', function (event) {

    });

    setInterval ( () => {
      if (player.playState !== 'playing') { return; }
      const currentTime = player.getTime();
      const duration = player.getDuration();
      const percent = (currentTime / duration) * 100;
      $('#time-control input').val(percent);
    }, 1000);


}
