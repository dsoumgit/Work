
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
    // toggle class
    document.body.classList.toggle('menu-open');
});

document.body.addEventListener('click', (evt) => {
    console.log(evt);
});