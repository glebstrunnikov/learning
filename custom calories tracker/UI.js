document.querySelector('#homeBtn').addEventListener('click', () => homeState.f())
document.querySelector('#archiveBtn').addEventListener('click', () => archiveState.f())

productLib.forEach(element => {
    const productFromLib = new Product(element.foodName, element.foodScale, element.foodKcal)
    productFromLib.draw()
}
)

UISaveProductBtn.addEventListener('click', saveProductToLib)
function saveProductToLib(e) {
    e.preventDefault();
    const newProduct = new Product
    newProduct.loadFromUI()

    let duplicateCounter = 0
    productLib.forEach(el => {
        if (el.foodName != newProduct.name) {
            duplicateCounter++
            if (duplicateCounter === productLib.length) {
                newProduct.addToLib()
                newProduct.draw()
                UIName.value = newProduct.name;
            }
        }
    })
    duplicateCounter = 0
}

UIDeleteBtn.addEventListener('click', deleteProduct)
function deleteProduct () {
    productLib.forEach(element => {
        if (element.foodName.indexOf(UIProductName.value) != -1) {
            console.log(productLib.indexOf(element))
            productLib.splice(productLib.indexOf(element), 1)
        }
    }
    )
    UILibrary.innerHTML = '';
    productLib.forEach(element => {
        const productFromLib = new Product(element.foodName, element.foodScale, element.foodKcal)
        productFromLib.draw()
    }
    )
    localStorage.setItem('products', JSON.stringify(productLib))

}

document.querySelector('#editorBtn').addEventListener('click', toModal)
function toModal () {
    UIProductName.value = UIName.value
    productLib.forEach(element => {
        if (element.foodName.indexOf(UIProductName.value) != -1) {
            UIProductKcal.value = element.foodKcal
        }
    })
}

UIName.addEventListener('input', dropdownUpdate)
function dropdownUpdate() {
    document.querySelector('#UIDropdownItems').innerHTML = ''
    productLib.forEach(element => {
        if (element.foodName.indexOf(UIName.value) != -1) {
            const next1to5Li = document.createElement('li')
            next1to5Li.innerHTML = `<a id="list${element.foodName}" class="dropdown-item" href="#">${element.foodName}</a>`
            document.querySelector('#UIDropdownItems').appendChild(next1to5Li)
            document.querySelector(`#list${element.foodName}`).addEventListener('click', toInput)
            document.querySelector(`#list${element.foodName}`).addEventListener('click', checkIfCanEat)
            function toInput () {
                UIName.value = element.foodName
                document.querySelector('#UIDropdownItems').innerHTML = ''
            }
        }
    });
}

document.addEventListener('keyup', checkIfCanEat)
document.addEventListener('click', checkIfCanEat)
function checkIfCanEat () {
    UIYummy.disabled = true;
    UIKcal.placeholder = ''
    productLib.forEach(element => {
        if (UIName.value === element.foodName) {
            UIYummy.disabled = false
            UIKcal.placeholder = `${element.foodScale === 2 ? element.foodKcal*UIQuant.value : element.foodKcal*UIQuant.value/100} kcal`
            element.foodScale === 1 ? UIScale.textContent = 'g' : UIScale.textContent = 'pc.'
        }
    })
    if (UIQuant.value === '' || UIQuant.value === null || UIQuant.value === 0) {
        UIYummy.disabled = true;
        UIKcal.placeholder = ''
    }
}

UIYummy.addEventListener('click', eat)
function eat() {
    let currentScale;
    let currentKcal;
    productLib.forEach(element => {
        if (UIName.value === element.foodName) {
            currentScale = element.foodScale;
            currentKcal = element.foodKcal

        }
    })
    const newMeal = new Meal(UIName.value, currentScale, currentKcal, UIQuant.value);
    newMeal.eatSave();
    newMeal.countTotalKcal();
    drawTable(newMeal);
}

function drawTable (meal) {
    const newMealLine = document.createElement('tr');
    newMealLine.innerHTML = `
    <th scope="row">${meal.name}</th>
    <td>${meal.amount}</td>
    <td>${meal.scale === 1 ? 'g' : 'pc.'}</td>
    <td>${meal.scale === 2 ? meal.amount*meal.kcal : meal.amount*meal.kcal/100
    }</td>
    <td><button id="del_${meal.name}_${meal.amount}" type="button" class="btn-close" aria-label="Close"></button></td>
    `
    UIList.appendChild(newMealLine)
    document.getElementById(`del_${meal.name}_${meal.amount}`).addEventListener('click', deleteLine)
    function deleteLine(e) {
        e.preventDefault;
        e.target.parentElement.parentElement.remove()
        belly.forEach(element => {
            if (element.foodName === meal.name && element.foodAmount === meal.amount) {
                belly.splice(belly.indexOf(element), 1)
            }
        })
        localStorage.setItem('belly', JSON.stringify(belly))
        meal.countTotalKcal()
    }
}

belly.forEach(element => {
    const mealToDraw = new Meal(element.foodName, element.foodScale, element.foodKcal, element.foodAmount)
    mealToDraw.countTotalKcal();
    drawTable(mealToDraw)

})

UIClear.addEventListener('click', clearAll)
function clearAll() {
    if (UIClear.textContent === 'Clear All') {UIClear.firstElementChild.textContent = "Yes I'm sure"}
    else if (UIClear.firstElementChild.textContent === "Yes I'm sure") {
    belly = [];
    localStorage.setItem('belly', JSON.stringify(belly));
    productLib = [];
    localStorage.setItem('products', JSON.stringify(productLib));
    UIList.innerHTML = '';
    UILibrary.innerHTML = '';
    totalKcal = 0;
    UITotalKcal.textContent = 0
    UIClear.firstElementChild.textContent = 'Clear All'
    }
}

UISaveToArchive.addEventListener('click', () => {saveDay()})