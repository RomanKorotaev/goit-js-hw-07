/*
Задание 7
Напиши скрипт, который реагирует на изменение значения input#font-size-control
 (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>
*/


const inputRangeRef = document.querySelector('#font-size-control');
console.log('inputRangeRef = ', inputRangeRef);
//console.log('inputRangeRef.value = ', inputRangeRef.value)

const spanTextRef = document.querySelector('#text');
console.log('spanTextRef = ', spanTextRef)

inputRangeRef.addEventListener('change', onInputRange);

function onInputRange() {
    console.log('Change of inputRangeRef')
    console.log('inputRangeRef.value = ', inputRangeRef.value)
    spanTextRef.style.fontSize = `${inputRangeRef.value}px`;
 };

 