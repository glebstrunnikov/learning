let today = []

const UIArchive = document.getElementById('UIArchive')

function saveDay() {
    const mealsToday = UIList.children.length;

    let theMeal = UIList.firstElementChild;
    saveMeal(theMeal)

    for (let i = 1; i < mealsToday; i++) {
        theMeal = theMeal.nextElementSibling;
        saveMeal(theMeal)
    }

    function saveMeal(meal) {
        const theName = meal.firstElementChild.textContent;
        const theScale = meal.firstElementChild.nextElementSibling.nextElementSibling.textContent === 'g' ? 1 : 2;
        const theAmount = meal.firstElementChild.nextElementSibling.textContent;
        const theKcal = theScale === 1 ? meal.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.textContent/theAmount*100 : meal.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
        const theMealObj = new Meal(theName, theScale, theKcal, theAmount)
        today.push(theMealObj)
    }

    today.push(new Date)
    history.push(today)
    today = []
    localStorage.setItem('history', JSON.stringify(history))
}

function loadArchive () {
    if (UIArchive.innerHTML === '') {UIArchive.innerHTML = `
    <div class="container mt-3">
        <div class="row">
            <div class="col-1"></div>
            <div id="archiveContainer" class="col-8">

            </div>
        </div>
    </div>
    `}
    history.forEach(el => {
        archiveDrawDay(el)
    })
}

function archiveDrawDay(day) {
    const archiveDay = document.createElement('div')
    const timestamp = new Date(day[day.length-1]).getTime()
    archiveDay.innerHTML = `
    <h6 id="archiveHead${timestamp}">Date: <span id="archiveDate${timestamp}"></span>. Total kcal: <span id="archiveKcal${timestamp}"></span>. <a id="archiveExpand${timestamp}" href="#">Expand...</a> <button id="archiveDel${timestamp}" type="button" class="btn-close ps-5" aria-label="Close"></button></h6> 

    <table id="archiveTable${timestamp}" class="table">
        <thead>
            <th scope = col>What</th>
            <th scope = col>How many</th>
            <th scope = col>g/pc.</th>
            <th scope = col>kcal</th>
        </thead>
        <tbody id="archiveList${timestamp}">
        </tbody>
    </table>
    `
    document.querySelector('#archiveContainer').appendChild(archiveDay)

    document.querySelector(`#archiveDel${timestamp}`).addEventListener('click', archiveDeleteDay)
    function archiveDeleteDay(e) {
        e.preventDefault()
        e.target.parentElement.parentElement.remove()
        history.forEach(el => {
            if (new Date(el[el.length-1]).getTime() === timestamp) {
                history.splice(history.indexOf(el), 1)
                localStorage.setItem('history', JSON.stringify(history))
            }

        })

    }

    document.querySelector(`#archiveTable${timestamp}`).style = "display: none"
    document.querySelector(`#archiveExpand${timestamp}`).addEventListener('click', () => {
        if (document.querySelector(`#archiveExpand${timestamp}`).textContent === 'Expand...') {
        document.querySelector(`#archiveTable${timestamp}`).style = "display: block"
        document.querySelector(`#archiveExpand${timestamp}`).textContent = 'Collapse'
        } else if (document.querySelector(`#archiveExpand${timestamp}`).textContent === 'Collapse') {
            document.querySelector(`#archiveTable${timestamp}`).style = "display: none"
            document.querySelector(`#archiveExpand${timestamp}`).textContent = 'Expand...'
        }        
    })

    document.getElementById(`archiveDate${timestamp}`).textContent = `
    ${new Date(day[day.length-1]).getDate()}.${new Date(day[day.length-1]).getMonth()}.${new Date(day[day.length-1]).getFullYear()}`

    let dayKcal = 0
    day.forEach(el => {
        if (typeof el != 'string' && el.constructor != Date) {
            const archiveLine = document.createElement('tr')
            archiveLine.innerHTML = `
            <th scope="row">${el.name}</th>
            <td>${el.amount}</td>
            <td>${el.scale === 1 ? 'g' : 'pc.'}</td>
            <td>${el.scale === 2 ? el.amount*el.kcal : el.amount*el.kcal/100
            }</td>
            `
            document.getElementById(`archiveList${timestamp}`).appendChild(archiveLine)
            dayKcal += el.scale === 2 ? el.amount*el.kcal : el.amount*el.kcal/100
        }
    })
    document.getElementById(`archiveKcal${timestamp}`).textContent = dayKcal

}



  

