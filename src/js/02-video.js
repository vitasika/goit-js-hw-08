// Импортирует плеер в этот фаил js
import Player from '@vimeo/player';


// Найти строку в html по тегу iframe
const iframeEl = document.querySelector('iframe');
console.log(iframeEl);
console.dir(iframeEl);

// const player = new Player(iframeEl);



// const player = new Player(iframeEl, {
//     id: vimeo-player,
//     width: 640
// });
// console.log(player);
// player.on('play', function() {
//     console.log('played the video!');
// });