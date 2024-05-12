const loginForm = document.querySelector('.login-form');

// Додати обробник події submit до форми
loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // Перешкоджаємо перезавантаженню сторінки за замовчуванням
  event.preventDefault();

  // Отримати значення полів інпутів
  const emailValue = loginForm.elements.email.value.trim();
  const passwordValue = loginForm.elements.password.value.trim();

  // Перевірити, чи всі поля заповнені
  if (emailValue === '' || passwordValue === '') {
    // Якщо є незаповнені поля, вивести повідомлення та припинити подальше виконання
    alert('All form fields must be filled in');
    return;
  }

  // Створити об'єкт з даними форми
  const formData = {
    email: emailValue,
    password: passwordValue
  };

  // Вивести об'єкт з даними у консоль
  console.log(formData);

  // Очистити поля форми
  loginForm.reset();
}

