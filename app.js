let gameOver;

class Putin {
    constructor() {
    };
    static poops = [];

    static generatePoo() {
        const newPoo = new Poo();
        const newLine = document.createElement('tr');
        newLine.innerHTML = `
        <td>${newPoo.msg}</td>
        `
        document.querySelector('#pooList').appendChild(newLine);
        this.poops.push(newPoo.type);
    };

    static noPooCheck() {
        const last3Poops = this.poops.slice(-3);
        if (last3Poops.at(-1) === 0 && last3Poops.at(-2) === 0 && last3Poops.at(-3) === 0) {
            const finalLine = document.createElement('tr');
            finalLine.innerHTML = `
            <td>Putin exploded! The end.</td>
            `
            document.querySelector('#pooList').appendChild(finalLine);
            gameOver = true
        }
    };
};

document.querySelector('#pooBtn').addEventListener('click', poo);

function poo(e) {
    e.preventDefault();
    if (gameOver != true) {
        Putin.generatePoo();
        Putin.noPooCheck();
        }
};

class Poo {
    constructor() {
        this.type = Math.floor(Math.random()*8+1);
        // 1 - diarrhea, 2 - solid, 3 - mixed, 4-8 - no poop
        if (this.type === 1) {this.msg = 'Putin pooped with diarrhea...'};
        if (this.type === 2) {this.msg = 'Putin pooped with solid poop...'};
        if (this.type === 3) {this.msg = 'Putin pooped with mixed poop...'};
        if (this.type >=4 && this.type <= 8) {
            this.type = 0;
            this.msg = "Putin can't poop today, oh gosh..."
        };
    }
}