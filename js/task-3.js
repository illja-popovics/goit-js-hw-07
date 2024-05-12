// Отримати посилання на елементи input та span
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Додати обробник події input для поля вводу
nameInput.addEventListener('input', () => {
  // Отримати поточне значення з поля вводу та очистити його від пробілів
  const inputText = nameInput.value.trim();
  
  // Перевірити, чи поле вводу не порожнє після очищення від пробілів
  if (inputText === "") {
    // Якщо поле вводу порожнє або містить лише пробіли, встановити "Anonymous"
    nameOutput.textContent = "Anonymous";
  } else {
    // Інакше встановити поточне значення поля вводу
    nameOutput.textContent = inputText;
  }
});
