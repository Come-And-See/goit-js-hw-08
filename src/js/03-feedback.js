// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми.
//  Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  submit: document.querySelector('button'),
};

const formData = {};

refs.form.addEventListener('input', throttle(onFormLocalStorage, 500));
refs.submit.addEventListener('click', onClearForm);

const formDataNew = JSON.parse(
  localStorage.getItem('feedback-form-state') || '{}'
);

if (Object.keys(formDataNew).length !== 0) {
  refs.form.elements.email.value = formDataNew.email || '';
  refs.form.elements.message.value = formDataNew.message || '';
}

function onClearForm(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  refs.form.elements.email.value = '';
  refs.form.elements.message.value = '';
  localStorage.removeItem('feedback-form-state');
}

function onFormLocalStorage(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

