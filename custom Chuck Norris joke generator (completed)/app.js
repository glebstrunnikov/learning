const inputField = document.querySelector('#jokesNo');
inputField.value = 1;

document.querySelector('#jokesNo').addEventListener('input', jokesLimiter);

function jokesLimiter(e) {
    inputField.value <1 ? inputField.value = 1 : null;
    inputField.value >10 ? inputField.value = 10 : null;
};

document.getElementById('button').addEventListener('click', loadData);

class Joke {
    constructor (jokeText) {
        this.text = jokeText;
    }

    printJoke(text) {
        const newLi = document.createElement('li');
        newLi.innerHTML = `${this.text}`;
        document.querySelector('#output').appendChild(newLi);
    }
};

function loadData(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${inputField.value}`, true);

    xhr.onload = function() {
        if(this.status === 200) {
            const xhrContent = JSON.parse(this.responseText).value;
            xhrContent.forEach(element => {
                const newJoke = new Joke(element.joke)
                newJoke.printJoke()
            });
        }
    }

    xhr.send();

}