let gameOver;
let suitcaseOpen = false
const suitcase = document.querySelector('#suitcase-field')

class Putin {
    generatePoo(pooType) {
        // 1 - diarrhea, 2 - solid, 3 - mixed, 4-8 - no poop
        const newPoo = new Poo(pooType);
        if (newPoo.type === 1) {newPoo.msg = 'Putin pooped with diarrhea...'};
        if (newPoo.type === 2) {newPoo.msg = 'Putin pooped with solid poop...'};
        if (newPoo.type === 3) {newPoo.msg = 'Putin pooped with mixed poop...'};
        if (newPoo.type === 0 || newPoo.type >=4 && newPoo.type <= 8) {
            newPoo.type = 0;
            newPoo.msg = "Putin can't poop today, oh gosh..."
        };
        putin.drawPoo(newPoo.msg)
        putin.poops.push(newPoo.type);

    };

    drawPoo (msg) {
        const newLine = document.createElement('tr');
        newLine.innerHTML = `
        <td>${msg}</td>
        `
        document.querySelector('#pooList').appendChild(newLine);
    }

    static noPooCheck() {
        const last3Poops = putin.poops.slice(-3);
        if (last3Poops.at(-1) === 0 && last3Poops.at(-2) === 0 && last3Poops.at(-3) === 0) {
            const finalLine = document.createElement('tr');
            finalLine.innerHTML = `
            <td>Putin exploded! The end.</td>
            `
            document.querySelector('#pooList').appendChild(finalLine);
            gameOver = true
        }
    };

    savePoo (data) {
        const pooHistory = data.join()
        document.querySelector('#pooHistory').textContent = pooHistory
        console.log(data)
    }

    loadPoo (data) {
        const pooHistory = data.split(',');
        putin.poops = [];
        document.querySelector('#pooList').innerHTML= "";
        console.log(pooHistory)
        pooHistory.forEach(el => {
            putin.generatePoo(parseInt(el))
            Putin.noPooCheck()});
    }

};

const putin = new Putin; // приятно писать эту фамилию с маленькой буквы не из бессильной злобы, а со смыслом)
putin.poops = []

document.querySelector('#pooBtn').addEventListener('click', poo);
document.querySelector('#suitcaseBtn').addEventListener('click', toggleSuitcase)
document.querySelector('#saveBtn').addEventListener('click', save)
document.querySelector('#loadBtn').addEventListener('click', load)

function load () {
    const pooToLoad = document.querySelector('#pooHistory').value
    putin.loadPoo(pooToLoad)
}

function save () {
    putin.savePoo(putin.poops)
}

// document.querySelector('#loadBtn').addEventListener('click', Putin.loadPoo)

function toggleSuitcase (e) {
    e.preventDefault();
    if (suitcaseOpen === false) {
        suitcase.style = "display: block"
        suitcaseOpen = true}
    else if (suitcaseOpen === true) {
        suitcase.style = "display: none"
        suitcaseOpen = false}
}

function poo(e) {
    e.preventDefault();
    if (gameOver != true) {
        putin.generatePoo(Math.floor(Math.random()*8+1));
        Putin.noPooCheck();
        }
};

class Poo {
    constructor(type) {
        this.type = type
    }
}

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
