// Найти строку в html по тегу iframe
import Player from '@vimeo/player';


// Найти строку в html по тегу iframe
const iframeEl = document.querySelector('iframe');
//console.log(iframeEl);

const player = new Player(iframeEl);

console.log(player);

// const player = new Player('handstick', {
//     id: 19231868,
//     width: 640
// });

// player.on('play', function() {
//     console.log('played the video!');
// });