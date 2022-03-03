// Day 1
// let songs = ["Somewhere Only We Know", "Viva La Vida"];
// let images = ["https://en.wikipedia.org/wiki/Somewhere_Only_We_Know#/media/File:Keane-SOWK.jpg", "https://en.wikipedia.org/wiki/Viva_la_Vida#/media/File:Coldplay_-_Viva_la_Vida.jpg"];
// let artists = ["Keane", "Coldplay"];
// let lengths = [237, 244];
// let links = ["https://www.youtube.com/watch?v=Oextk-If8HQ", "https://www.youtube.com/watch?v=dvgZkm1xWPE"];


// Day 4
let song0 = {
  title: "Somewhere Only We Know",
  image: "https://en.wikipedia.org/wiki/Somewhere_Only_We_Know#/media/File:Keane-SOWK.jpg",
  artist: "Keane",
  length: 237,
  link: "https://www.youtube.com/watch?v=Oextk-If8HQ"
}

let song1 = {
  title: "Viva La Vida",
  image: "https://en.wikipedia.org/wiki/Viva_la_Vida#/media/File:Coldplay_-_Viva_la_Vida.jpg",
  artist: "Coldplay",
  length: 244,
  link: "https://www.youtube.com/watch?v=dvgZkm1xWPE"
}

let playlist = [song0, song1];

function addSongInfo() {
  // Day 3
  let title = $(".title").val();
  let image = $(".image").val();
  let artist = $(".artist").val();
  let length = $(".length").val();
  let link = $(".link").val();
  
  let newSong = {
    title: title,
    image: image,
    artist: artist,
    length: length,
    link: link
  };
  
  playlist.push(newSong);
}

function displaySongInfo() {
  // Day 2
//   songs.forEach(function(song) {
//     $('.songs').append(song);
//   });
//   artists.forEach(function(artist) {
//     $('.artists').append(artist);
//   });
  
//   images.forEach(function(image) {
//     $('.images').append(image);
//   });
  
//   links.forEach(function(link) {
//     $('.links').append(link);
//   });
  
//   lengths.forEach(function(length) {
//     $('.lengths').append(length);
//   });
  
  playlist.forEach(function(obj) {
    $(".songs").append(`<p>${obj.title}</p>`);
    $(".artists").append(`<p>${obj.artist}</p>`);
    $('.images').append(obj.image);
    $('.links').append(obj.link);
    $('.lengths').append(obj.length);
  });
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
