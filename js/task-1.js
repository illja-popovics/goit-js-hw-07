// Знайти елемент ul#categories
const categoriesList = document.querySelector('#categories');

// Отримати всі елементи li.item
const categories = categoriesList.querySelectorAll('li.item');

// Порахувати кількість категорій
const categoryCount = categories.length;
console.log('Number of categories:', categoryCount);

// Для кожної категорії вивести назву та кількість елементів
categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItems}`);
});
