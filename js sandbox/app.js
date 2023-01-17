// Смотрите, я не очень понимаю, почему так происходит. Хотя ситуация вроде элементарная. Есть массив объектов tasks со свойствами id, text и другими:

let tasks = [
  {
    id: 1,
    text: "walk the dog",
    day: "tuesday",
    reminder: true,
  },
  {
    id: 2,
    text: "buy milk",
    day: "wednesday",
    reminder: false,
  },
];

// Я хочу отфильтровать их через array.filter так, чтобы в массиве остались все объекты, кроме того, id которого мы указываем. Логичнее всего, казалось бы, сделать это так:

function delTask(id) {
  tasks = tasks.filter((task) => {
    task.id !== id;
  });
}

// // Проверяем:
// delTask(1);
// console.log(tasks);

// Внезапно console.log выдает пустой массив. Если же сделать все это в, как мне кажется, эквивалетной формулировке с декларацией фильтр-функции не через arrow, то все работает как надо:

function delTask(id) {
  function tasksFilter(task) {
    if (task.id !== id) {
      return task.id;
    }
  }
  tasks = tasks.filter(tasksFilter);
}

console.log(tasks);
delTask(1);
console.log(tasks);

// В консоль выдается массив из одного элемента - объекта с id=2

// Собственно, вопрос: почему так происходит? Наверное, тут какая-то простая причина, но я правда долго сидел и думал, и не смог понять, где ошибся.
