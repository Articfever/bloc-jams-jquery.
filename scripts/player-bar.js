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
      player.skipTo(event.target.value);
    });

    setInterval ( () => {
      if (player.playState !== 'playing') { return; }
      const currentTime = player.getTime();
      const duration = player.getDuration();
      const percent = (currentTime / duration) * 100;
      $('#time-control .current-time').text( currentTime );
      $('#time-control input').val(percent);
    }, 1000);

    if (currentlyPlayingSongNumber !== songNumber) {
        setSong(songNumber);
        currentSoundFile.play();
        updateSeekBarWhileSongPlays();\

    var $volumeFill = $('.volume .fill');
            var $volumeThumb = $('.volume .thumb');
            $volumeFill.width(currentVolume + '%');
            $volumeThumb.css({left: currentVolume + '%'});
        } else if (currentlyPlayingSongNumber === songNumber) {
            if (currentSoundFile.isPaused()) {
                $(this).html(pauseButtonTemplate);
                $('.main-controls .play-pause').html(playerBarPauseButton);
                currentSoundFile.play();
                updateSeekBarWhileSongPlays();
            } else {
                $(this).html(playButtonTemplate);
                $('.main-controls .play-pause').html(playerBarPlayButton);
                currentSoundFile.pause();

    var updateSeekBarWhileSongPlays = function() {
        if (currentSoundFile) {
          currentSoundFile.bind('timeupdate', function(event) {
          var seekBarFillRatio = this.getTime() / this.getDuration();
          var $seekBar = $('.seek-control .seek-bar');
          updateSeekPercentage($seekBar, seekBarFillRatio);
          setCurrentTimeInPlayerBar(this.getTime());


}
