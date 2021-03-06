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

const formData = {}; //читает одно поле

//Находим элементы form, input, textarea, button в html разметке
const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

//Слушатели событий
refs.form.addEventListener('submit', onFormSubmit); // слушатель на ОТПРАВИТЬ
//formEl.addEventListener('submit', onFormSubmit); // слушатель на форму
//inputEl.addEventListener('submit', onInputChange); // слушатель на email
refs.form.addEventListener('input', throttle(onTextareaChange, 500)); // функция throttle вызывает слушатель на textarea (messege) с задержкой вызова функции чтения на 500мс
//button.addEventListener('submit', onButtonSubmit); // слушатель на button кнопку

//Форма прослушивания input
// refs.form.addEventListener('input', event => {
//     //console.log(event.target); //показывает значения поля в html
//     //console.log(event.target.name); //показавает по имени в строке html в input name="email"
//     //console.log(event.target.value);//показавает значание введенное в html в textarea name="message"
//     formData[event.target.name] = event.target.value; //приравнивает к [ключу] = значение
//     console.log(formData);
//     //localStorage.setItem(JSON.stringify(STORAGE_KEY,formData))
// });

populateTextarea(); // вызывается функция

// Функция уберает перезагрузку страницы и очищает форму и localStorage после отправки
function onFormSubmit(event) {
    event.preventDefault(); // функция которая убирает перезагрузку страницы
    //console.log('Отправляем форму');
    formData[event.target.name] = event.target.value;
    console.log(formData); 
    // event.currentTarget.reset(); // Функция которая очищает поле message после отправки в localStorage сообщения
    handleClearText();
    //localStorage.removeItem(STORAGE_KEY); 
}

// Функция очистки localStorage после отправки сообщения
function handleClearText() {
    refs.form.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
}

// Функция добавления текста в форму и его сохранения в памяти localStorage
function onTextareaChange(event) {
    formData [event.target.name] = event.target.value; //функция которая получает введенный текст в поле textarea 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); // функция которая добавляет введенный message в localStorage по ключу STORAGE_KEY

    // const message = event.target.value; 
    console.log(formData);    
    // localStorage.setItem(STORAGE_KEY, message) 
    //btnDisable();
    
};


function populateTextarea() {
    let savedMessage = localStorage.getItem(STORAGE_KEY)
    if (savedMessage) {
        savedMessage = JSON.parse(savedMessage);
        console.log(savedMessage);
        Object.entries(savedMessage).forEach(([key, value]) => {
            formData[key] = value;
            refs.form.elements[key].value = value;
        });
        
    }
}

/*
// console.log(refs);
// console.log(localStorage);
// console.log(refs.form);
// console.log(refs.input);
// console.log(refs.textarea);
// console.log(refs.button);
*/



/*
Вариант 2
{
//Ключ локального хранилища
const STORAGE_KEY = 'feedback-form-state';

//
const formData = {}; //читает одно поле
//const formState = { email: '', message: '' }; //читает поле email и message

//Находим элементы form, input, textarea, button в html разметке
const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
    //button: document.querySelector('button'),
};

//Слушатели событий
refs.form.addEventListener('submit', onFormSubmit); // слушатель на ОТПРАВИТЬ
//formEl.addEventListener('submit', onFormSubmit); // слушатель на форму
refs.input.addEventListener('submit', throttle(onInputChange, 500)); // слушатель на email
refs.textarea.addEventListener('input', throttle(onTextareaChange, 500)); // функция throttle вызывает слушатель на textarea (messege) с задержкой вызова функции чтения на 500мс
//button.addEventListener('submit', onButtonSubmit); // слушатель на button кнопку

//Форма прослушивания input
refs.form.addEventListener('input', event => {
    //console.log(event.target); //показывает значения поля в html
    //console.log(event.target.name); //показавает по имени в строке html в input name="email"
    //console.log(event.target.value);//показавает значание введенное в html в textarea name="message"
    formData[event.target.name] = event.target.value; //приравнивает к [ключу] = значение
    formData[event.target.email] = event.target.value; //приравнивает к [ключу] = значение
    console.log(formData);
    //localStorage.setItem(JSON.stringify(STORAGE_KEY,formData))
});

populateTextarea(); // вызывается функция

// Функция уберает перезагрузку страницы и очищает форму и localStorage после отправки
function onFormSubmit(event) {
    event.preventDefault(); // функция которая убирает перезагрузку страницы
    console.log('Отправляем форму');    
    event.currentTarget.reset(); // Функция которая очищает поле message после отправки в localStorage сообщения 
    localStorage.removeItem(STORAGE_KEY); // Функция очистки localStorage после отправки сообщения
};

// Функция уберает перезагрузку страницы и очищает форму и localStorage после отправки
function onInputChange(event) {
    event.preventDefault(); // функция которая убирает перезагрузку страницы
    console.log('Отправляем форму');    
    event.currentTarget.reset(); // Функция которая очищает поле message после отправки в localStorage сообщения 
    localStorage.removeItem(STORAGE_KEY); // Функция очистки localStorage после отправки сообщения
};

// Функция добавления текста в форму и его сохранения в памяти localStorage
function onTextareaChange(event) {
    const message = event.target.value; //функция которая получает введенный текст в поле textarea 
    console.log(message);
    
    const input = event.currentTarget.value; //функция которая получает введенный текст в поле textarea 
        console.log(input);
    
    localStorage.setItem(STORAGE_KEY, message) // функция которая добавляет введенный message в localStorage по ключу STORAGE_KEY
    localStorage.setItem(STORAGE_KEY, input) // функция которая добавляет введенный message в localStorage по ключу STORAGE_KEY
    //btnDisable();
    
};


function populateTextarea() {
    let savedMessage = localStorage.getItem(STORAGE_KEY)
    if (savedMessage) {
        console.log(savedMessage);
        Object.entries(savedMessage).forEach(([key, value]) => {
        formData[key] = value;
            refs.form.elements[key].value = value;
            refs.input.elements[key].value = value;
            
        }); 
        //refs.textarea.value = savedMessage;        
    };
};

}

*/