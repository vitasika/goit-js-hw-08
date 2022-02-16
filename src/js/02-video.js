// Импортирует плеер в этот фаил js
import Player from '@vimeo/player';
// Импортирует в проект бибилотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.
import throttle from 'lodash.throttle';


// Найти строку в html по тегу iframe
const iframeEl = document.querySelector('iframe');
// console.log(iframeEl);
// Создаем новый элемент player, библиотеки Player
const player = new Player(iframeEl);
// console.log(player);
player.on('timeupdate', function(player) {
        console.log('played the video!');
    });

    


//player.on('timeupdate', throttle(playerOn, 1000));




/*timeupdate
Triggered as the currentTime of the video updates. It generally fires every 250ms, 
but it may vary depending on the browser.
{
    duration: 61.857
    percent: 0.049
    seconds: 3.034
}
*/

// const onPlay = function(data) {
//     // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);


player.setCurrentTime(30.456).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

/* 
 С чего начать
1) установи все библиотеки (по ТЗ) - npm  --- ГОТОВО
2) импорт всех библиотек в файл.js --- ГОТОВО
3) квериселекторы (кот нужно) 
4) эдвентлистнеры (кот нужно) 
5) колбеки из ивентлистнеров - они и есть решение задачи,
    для них ты весь код и придумываешь(смотри в ТЗ, что должно происходить при таком - то событии)! 
    
    
ЗАДАНИЯ ПО ТЗ

Задание 2 - видео плеер
В HTML есть <iframe> с видео для Vimeo плеера. Напиши скрипт который будет сохранять текущее время воспроизведения видео в локальное хранилище и, при перезагрузке страницы, продолжать воспроизводить видео с этого времени.

<iframe
    id="vimeo-player"
    src="https://player.vimeo.com/video/236203659"
    width="640"
    height="360"
    frameborder="0"
    allowfullscreen
    allow="autoplay; encrypted-media"
></iframe>
Выполняй это задание в файлах 02-video.html и 02-video.js. Разбей его на несколько подзадач:

1. Ознакомься с документацией библиотеки Vimeo плеера.

2. Добавь библиотеку как зависимость проекта через npm.

3. Инициализируй плеер в файле скрипта как это описано в секции pre-existing player, 
но учти что у тебя плеер добавлен как npm пакет, а не через CDN.

4. Разбери документацию метода on() и начни отслеживать 
событие timeupdate - обновление времени воспроизведения.

5. Сохраняй время воспроизведения в локальное хранилище. 
    Пусть ключом для хранилища будет строка "videoplayer-current-time".

6. При перезагрузке страницы воспользуйся методом setCurrentTime() 
для того чтобы возобновить воспроизведение с сохраненной позиции.

7. Добавь в проект бибилотеку lodash.throttle и сделай так, 
чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.
    
    

Объекты хранилища localStorage и sessionStorage предоставляют одинаковые методы 
и свойства:
setItem(key, value) – сохранить пару ключ/значение.
getItem(key) – получить данные по ключу key.

если необходимо сохранить в эти хранилища массивы и объекты, то перед тем, 
как это сделать их нужно их сначала преобразовать в строки, например, 
используя метод JSON.stringify() 
(для обратного преобразования использовать JSON.parse()).
    */