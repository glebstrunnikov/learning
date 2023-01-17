const numberOutput = document.querySelector('#phoneText')

document.querySelector('#myForm').addEventListener('submit', check)
document.querySelector('#phoneText').addEventListener('focus', setNumFocusOnEnd)
document.querySelector('#phoneText').addEventListener('input', setNumFocusOnEnd)
document.querySelector('#phoneText').addEventListener('click', setNumFocusOnEnd)
document.querySelector('#phoneText').addEventListener('keyup', setNumFocusOnEnd)
document.querySelector('#phoneText').addEventListener('keyup', checkIfNum)

function setNumFocusOnEnd (e) {
    numberOutput.focus();
    numberOutput.setSelectionRange(numberOutput.value.length, numberOutput.value.length)
}

let reName;
reName = /^([a-zа-я]{1,}\s?){1,}$/i;
let rePhone;
rePhone = /^\(?\d{1,3}\)?\d{0,7}$/
let rePhoneCheat;
rePhoneCheat = /[^\(\)\d].*[^\(\)\d]/
let rePhoneBracketsCheat = /[\(\)].*[\(\)].*[\(\)]./

function checkIfNum (e) {
    const number = e.target.value;
    if (number.length === 1) {numberOutput.value = `(${number}`}
    if (number.length === 4) {numberOutput.value = `${number})`}

    console.log(rePhoneCheat.test(number))

    if (rePhoneCheat.test(number) || rePhoneBracketsCheat.test(number) || number.length > 12) {
        numberOutput.value = '';
        drawErr(`Hey cheater you can't do that!`)
        console.log(number)
    } else {
            if (!rePhone.test(number)) {
                numberOutput.value = number.substring(0, number.length-1)
                drawErr('Only digits allowed, 10 max')
            }
        }
}

function check (e) {
    e.preventDefault()

    const nickname = document.querySelector("#nameText").value;
    const phone = document.querySelector("#phoneText").value;
    const email = document.querySelector("#emailText").value;
    const city = document.querySelector("#cityText").value;

    if (!reName.test(nickname)) {drawErr('Wrong Name')}
    if (!rePhone.test(phone)) {drawErr('Wrong phone number')}

    const newEmailRequest = new Request(email);
    newEmailRequest.requestEmail();
    checkSetCoords(city);

}

function drawErr(msg) {
    // if (document.querySelector('#main-container').firstElementChild.id === 'myForm') {
        const drawLine = document.createElement('div')

        drawLine.innerHTML = `
            <div id="errMsg" class="p-3 text-center" style="background-color:red">
                <h6 style="color: white">${msg}</h3>
        `
        document.getElementById('main-container').insertBefore(drawLine, document.querySelector('#myForm'))

        setTimeout(() => {
            document.querySelector('#errMsg').parentElement.remove()
        }, 1500);
    // }
}

// Name should be alphabetical
// Phone should be numeric, start with +7/7/8/nothing, followed by 10 digits with possible () around the first 3
// email should be alphanumeric and send request to the domain to see if it exists
// city should check the geo api if such city exists (grab from weather api code) 