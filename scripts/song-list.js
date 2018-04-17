//$( document ).ready( function(){
  album.songs.forEach( (song, index) => {
//    song.element.on('')
    song.element = $(`
      <tr>
        <td>
          <button>
            <span class="song-number">${index + 1}</span>
            <span class="ion-play"></span>
            <span class="ion-pause"></span>
          </button>
        </td>
        <td>${song.title}</td>
        <td>${player.prettyTime(song.duration)}</td>
      </tr>
    `);

    song.element.click( event => {
        player.playPause(song);
        $('button#play-pause').attr('playState', player.playState);
        $('#time-control .total-time').text( player.prettyTime(song.duration) );
    });

    $( '#song-list' ).append(song.element);
  });
//});
