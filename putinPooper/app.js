let gameOver;
const PORT = 3000;

class Putin {
  generatePoo(pooType) {
    // 1 - diarrhea, 2 - solid, 3 - mixed, 4-8 - no poop
    const newPoo = new Poo(pooType);
    if (newPoo.type === 1) {
      newPoo.msg = "Putin pooped with diarrhea...";
    }
    if (newPoo.type === 2) {
      newPoo.msg = "Putin pooped with solid poop...";
    }
    if (newPoo.type === 3) {
      newPoo.msg = "Putin pooped with mixed poop...";
    }
    if (newPoo.type === 0 || (newPoo.type >= 4 && newPoo.type <= 8)) {
      newPoo.type = 0;
      newPoo.msg = "Putin can't poop today, oh gosh...";
    }
    putin.drawPoo(newPoo.msg);
    putin.poops.push(newPoo.type);
  }

  putToSuitcase(pooType) {
    fetch(`http://localhost:${PORT}/poop`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ pooType: pooType }),
    });
    console.log(JSON.stringify(pooType));
  }

  drawPoo(msg) {
    const newLine = document.createElement("tr");
    newLine.innerHTML = `
        <td>${msg}</td>
        `;
    document.querySelector("#pooList").appendChild(newLine);
  }

  updateSuitcase(poops) {
    this.poops = poops;
    document.querySelector("#pooList").innerHTML = "";
    poops.forEach((el) => this.generatePoo(el));
    Putin.noPooCheck();
  }

  static clearSuitcase() {
    this.poops = [];
    document.querySelector("#pooList").innerHTML = "";
    fetch(`http://localhost:${PORT}/reset`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: null,
    });
  }

  static noPooCheck() {
    const last3Poops = putin.poops.slice(-3);
    if (
      last3Poops.at(-1) === 0 &&
      last3Poops.at(-2) === 0 &&
      last3Poops.at(-3) === 0
    ) {
      const finalLine = document.createElement("tr");
      finalLine.innerHTML = `
            <td>Putin exploded! The end.</td>
            `;
      document.querySelector("#pooList").appendChild(finalLine);
      gameOver = true;
    }
  }

  static checkPooHistory() {
    fetch(`http://localhost:${PORT}/poops`)
      .then((res) => res.json())
      .then((res) => {
        res.forEach((el) => {
          putin.poops.push(el.pooType);
          console.log(putin.poops);
        });
        putin.updateSuitcase(putin.poops);
      });
  }
}

const putin = new Putin(); // приятно писать эту фамилию с маленькой буквы не из бессильной злобы, а со смыслом)
putin.poops = [];
Putin.checkPooHistory();

document.querySelector("#pooBtn").addEventListener("click", poo);
document
  .querySelector("#resetBtn")
  .addEventListener("click", Putin.clearSuitcase);

function poo(e) {
  e.preventDefault();
  if (gameOver != true) {
    const pooType = Math.floor(Math.random() * 8 + 1);
    putin.generatePoo(pooType);
    putin.putToSuitcase(pooType);
    Putin.noPooCheck();
  }
}

class Poo {
  constructor(type) {
    this.type = type;
  }
}

console.log(Putin.prototype);

// 1) Добавить в класс путин метод SAVE и соответственно кнопку во фронтенде, которая все результаты poop'а будет сохранять в файл в любом формате, я предлагаю 1 строчка - одна запись, внутри любые делиметеры (можно запятую, можно вертикальную палочку) по очереди поля

// 2) Добавить метод LOAD и кнопку во фронте LOAD, которая будет подъедать этот файл и сразу выводить

// Вместо них можешь просто сделать textarea нужного размера и в нее выводить данные, которые вручную можно скопировать в отдельный файл
// И точно так же в эту textarea можно сделать PASTE и загрузить их в приложение
// 2 кнопки рядом textarea
// А весь этот import/export блок можешь показывать по нажатию кнопки Data operations
// Нажимаем один раз - появляется текстовое поле с кнопками, еще раз - убирается

// static async savePoo() {
//     const response = await fetch('suitcase.txt', {
//         method: 'PUT',
//         headers: {'Content-type': 'application/json'},
//         body: '7,2,7,3,7,7,7'
//     })
//     const responseText = response.text();
//     responseText
//     .then(data => console.log(data + 'saved'))
// }

// static async loadPoo() {
//     putin.poops = [];
//     document.querySelector('#pooList').innerHTML= ""
//     await fetch('suitcase.txt')
//     .then(res => res.text())
//     .then(data => {
//         const pooArray = data.split(',')
//         pooArray.forEach(el => {putin.generatePoo(parseInt(el))
//         Putin.noPooCheck()})
//     })

// }
