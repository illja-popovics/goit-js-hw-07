// Функція для генерації випадкового кольору в форматі HEX
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Отримати посилання на елементи кнопки та span для кольору
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

// Додати обробник події кліку до кнопки
changeColorButton.addEventListener('click', () => {
  // Згенерувати випадковий колір
  const randomColor = getRandomHexColor();

  // Змінити колір фону body
  document.body.style.backgroundColor = randomColor;

  // Встановити колір тексту для span.color
  colorSpan.textContent = randomColor;
});
