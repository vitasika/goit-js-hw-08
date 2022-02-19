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



//Ключ локального хранилища
const STORAGE_KEY = 'feedback-form-state';

//Находим элементы form, input, textarea, button в html разметке
// const formEl = document.querySelector('feedback-form');
// const inputEl = document.querySelector('feedback-form input');
// const textareaEl = document.querySelector('feedback-form textarea');
// const buttonEl = document.querySelector('button');
const refs = {
    form: document.querySelector('.feedback-form'),
    //input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
    //button: document.querySelector('button'),
};

//Слушатели событий
refs.form.addEventListener('submit', onFormSubmit); // слушатель на ОТПРАВИТЬ
//formEl.addEventListener('submit', onFormSubmit); // слушатель на форму
//inputEl.addEventListener('submit', onInputChange); // слушатель на email
refs.textarea.addEventListener('input', throttle(onTextareaChange, 500)); // функция throttle вызывает слушатель на textarea (messege) с задержкой вызова функции чтения на 500мс
//button.addEventListener('submit', onButtonSubmit); // слушатель на button кнопку

populateTextarea(); // вызывается функция


function onFormSubmit(event) {
    event.preventDefault();

    console.log('Отправляем форму');    
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    
}

function onTextareaChange(event) {
    const message = event.target.value;
        console.log(message);
    
    localStorage.setItem(STORAGE_KEY, message)

    
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY)
    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
        
    }


    
}


// console.log(refs);
// console.log(localStorage);
// console.log(refs.form);
// console.log(refs.input);
// console.log(refs.textarea);
// console.log(refs.button);