/*
Задание:
Выполняй это задание в файлах 03-feedback.html и 03-feedback.js. Разбей его на несколько подзадач:

1. Отслеживай на форме событие (input), и каждый раз записывай в локальное хранилище объект с 
полями (email) и (message), в которых сохраняй текущие значения полей формы. Пусть ключом для 
хранилища будет строка "feedback-form-state".
2. При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, 
заполняй ими поля формы. В противном случае поля должны быть пустыми.
3. При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями (email), 
(message) и текущими их значениями в консоль.
4. Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого 
добавь в проект и используй библиотеку lodash.throttle.
*/

/* Импортирует в проект бибилотеку lodash.throttle и сделай так, чтобы время 
воспроизведения обновлялось в хранилище не чаще чем раз в секунду.*/

// Подключение Lodash.trottle
import throttle from 'lodash.throttle';

//Находим элементы form, input, textarea, button в html разметке

const formEl = document.querySelector('feedback-form');

const refs = {
    // form: document.querySelector('feedback-form'),
    input: document.querySelector('feedback-form input'),
    textarea: document.querySelector('feedback-form textarea'),
    button: document.querySelector('button'),
};

//Ключ локального хранилища
const STORAGE_KEY = 'feedback-form-state';

//Слушатели событий
formEl.addEventListener('submit', onFormSubmit);
//refs.form.addEventListener('submit', onFormSubmit); // слушатель на форму
// refs.input.addEventListener('submit', onInputSubmit); // слушатель на email
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500)); // слушатель на textarea на messege
// refs.button.addEventListener('submit', onButtonSubmit); // слушатель на button кнопку



function onFormSubmit(event) {
    const value = event.currentTarget.value;

    console.log(value);
}

// console.log(refs);
// console.log(localStorage);
