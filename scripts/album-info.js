{
$('#album-title').text(album.title);
$('img#album-cover-art').attr('src', album.albumArtURL);
$('album-artist').text(album.artist);
$('album-release-info').text(album.year + ' ' + album.label);
$('album-songs').text(album.songs);
$('album-info').text(album.info);
$('album-details').text(album.details);
}
