/*
Задание 5
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна
 отображаться строка 'незнакомец'.

<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>
*/



// Decision // Решение

const nameInputRef = document.querySelector('#name-input');
console.log(nameInputRef)
const nameOutputRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input', (event) => {
    if (event.currentTarget.value !== '') {
        nameOutputRef.textContent = event.currentTarget.value;
        console.log(`Привет, ${event.currentTarget.value}`)
    } else {  nameOutputRef.textContent = ' незнакомец'}
});