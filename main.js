
let button = document.querySelector('.button');

button.addEventListener('mouseenter', () => {
    button.style.animationName = 'anim';
    button.style.animationDuration = '1s';
    button.style.width = '16rem';
});
button.addEventListener('mouseout', () => {
    button.style.animationName = 'backAnim';
    button.style.animationDuration = '1s';
    button.style.width = '12rem';
});