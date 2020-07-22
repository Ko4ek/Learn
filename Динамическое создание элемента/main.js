function createEl () {

  let foo = document.createElement('div');                                        // Создает элемент, но пока не помещает его на страницу
  let container = document.querySelector('.container');                           // Получает существующий элемент с классом .container
  let inputField = document.querySelector('.text');                               // Получает существующий элемент с классом .text
  foo.classList.add('el');                                                        // Добавляет к элементу класс .el
  foo.style.transform = `translate(${genRand(0,500)}px, ${genRand(0,500)}px)`;    // Задает случайное положение через transform: translate(x,y)
  foo.innerText = inputField.value;                                               // Берет значение из поля ввода .text и записывает его в .el
  container.appendChild(foo);                                                     // Помещает элемент .el внутрь элемента .container на странице


}

function genRand (min, max) {

  return Math.round(Math.random() * (max-min) + min);

}