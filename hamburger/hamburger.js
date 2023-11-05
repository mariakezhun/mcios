const button = document.querySelector('.burger');
const sideMenu = document.querySelector('.header__square-pic');
const burgerTypeWhite = document.querySelector('.burger_type_white')
const burgerTypeBlue = document.querySelector('.burger_type_blue')
console.log(button);

button.addEventListener('click', () => {
  sideMenu.classList.toggle('menu__active');
  burgerTypeWhite.classList.toggle('burger_type_none');
  burgerTypeBlue.classList.toggle('burger_type_block');
  // button.classList.toggle('burger_type_blue')
  // button.classList.toggle('burger_type_white')
});
