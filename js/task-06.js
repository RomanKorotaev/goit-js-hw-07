/*
Задание 6
Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
*/


// Decision // Решение

const inputRef = document.querySelector('#validation-input');
console.log('inputRef= ', inputRef)

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur() {
    console.log('Событие потери фокуса на inputRef')
    console.log(inputRef.textContent.length)
    let tmpString = inputRef.textContent
    console.log('tmpString =', tmpString )
    /*if (inputRef.textContent.length === 6) { console.log('true') } else {console.log('false') }
*/
}