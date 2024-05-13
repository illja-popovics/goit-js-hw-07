// task-6.js

// Selecting elements
const controls = document.querySelector('#controls');
const boxesContainer = document.querySelector('#boxes');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const input = controls.querySelector('input');

// Function to create random hex color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Function to create boxes
function createBoxes(amount) {
  destroyBoxes(); // Clear existing boxes
  
  // Create a document fragment
  const fragment = document.createDocumentFragment();
  
  // Append boxes to the fragment
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }
  
  // Append the fragment to the boxesContainer
  boxesContainer.appendChild(fragment);
}

// Function to destroy boxes
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

// Event listener for create button
createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

// Event listener for destroy button
destroyButton.addEventListener('click', destroyBoxes);
