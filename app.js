let buttonUp = document.querySelector('.buttonUp');
let buttonDown = document.querySelector('.buttonDown');
let tableTop = document.querySelector('.tableTop');
let tableBottom = document.querySelector('.tableBottom');

buttonDown.addEventListener('click', () => {
    tableTop.style.paddingTop = '75px';
    tableTop.style.transition = '1.1s ease-in-out';

});
buttonUp.addEventListener('click', () => {
    tableTop.style.paddingTop = '';
    tableTop.style.transition = '1.1s ease-in-out';
});