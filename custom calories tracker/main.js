let archive = JSON.parse(localStorage.getItem('archive'))
if (archive === null) {archive = []}
let productLib = JSON.parse(localStorage.getItem('products'))
if (productLib === null) {productLib = []}
let belly = JSON.parse(localStorage.getItem('belly'))
if (belly === null) {belly = []}
let totalKcal = 0
let history = JSON.parse(localStorage.getItem('history'))
if (history === null) {history = []}

class PageState {
    constructor(f) {
        this.f = f
    }
    run() {
        this.f()
    }
}
const homeState = new PageState(() => {
    document.querySelector('#UIArchive').innerHTML = ''
    document.querySelector('#main-container').style = "display: block"
})

const archiveState = new PageState(() => {
    document.getElementById('main-container').style = "display: none"
    loadArchive()
})

homeState.run()

const UIName = document.getElementById('UIName');
const UIQuant = document.getElementById('UIQuant');
const UIKcal = document.getElementById('UIKcal');
const UIScale = document.getElementById('UIScale');
const UIYummy = document.getElementById('UIYummy');

const UIProductName = document.getElementById('UIProductName');
const UIProductScale1 = document.getElementById('UIProductScale1');
const UIProductScale2 = document.getElementById('UIProductScale2');
const UIProductKcal = document.getElementById('UIProductKcal');
const UIDeleteBtn = document.getElementById('UIDeleteBtn');
const UICloseBtn = document.getElementById('UICloseBtn');
const UISaveProductBtn = document.getElementById('UISaveProductBtn');
const UIModalMsg = document.getElementById('UIModalMsg')

const UIList = document.getElementById('UIList');
const UITotalKcal = document.getElementById('UITotalKcal')
const UILibrary = document.getElementById('UILibrary')
const UIClear = document.getElementById('UIClear')
const UISaveToArchive = document.getElementById('UISaveToArchive')
const UIMsg = document.getElementById('UIMsg')



class Product{
    constructor(name, scale, kcal) {
        this.name = name;
        this.scale = scale;
        this.kcal = kcal
    }

    addToLib () {
        productLib.push({foodName: this.name, foodScale: this.scale, foodKcal: this.kcal})
        localStorage.setItem('products', JSON.stringify(productLib))
    }

    loadFromUI () {
        this.name = UIProductName.value
        this.scale = (UIProductScale1.checked === true ? 1 : 2)
        this.kcal = UIProductKcal.value
    }

    draw () {
        const newBadge = document.createElement('button');
        newBadge.type = 'button';
        newBadge.classList = "btn btn-success mb-1"
        newBadge.id = `badge${this.name}`
        newBadge.textContent = `${this.name}`;

        UILibrary.appendChild(newBadge);
        document.querySelector(`#badge${this.name}`).addEventListener('click', writeToUI)
        const self = this
        function writeToUI () {
            UIName.value = self.name
            UIScale.value = self.scale
        }
    }
}

class Meal extends Product {
    constructor (name, scale, kcal, amount) {
    super(name, scale, kcal);
    this.amount = amount
    }

    eatSave() {
        belly.push({foodName: this.name, foodScale: this.scale, foodKcal: this.kcal, foodAmount: this.amount})
        localStorage.setItem('belly', JSON.stringify(belly))
    }

    countTotalKcal () {
        totalKcal = 0
        belly.forEach(element => {
            if (element.foodScale === 2) {
            totalKcal += parseInt(element.foodAmount)*parseInt(element.foodKcal)
            } else totalKcal += (parseInt(element.foodAmount)*parseInt(element.foodKcal))/100
        })
        UITotalKcal.textContent = totalKcal
    }
}

// const foodExample = new Product('Apple', 2, 50)
// const foodExample2 = new Product('Rice', 1, 130)
// const foodExample3 = new Product('Apricote', 2, 60)
// const foodExample4 = new Product('Bread', 1, 100)
// const foodExample5 = new Product('Beer', 2, 225)

// const mealExample = new Meal(foodExample.name, foodExample.scale, foodExample.kcal, 1)

// if (productLib.length <5) {
//     foodExample.addToLib()
//     foodExample2.addToLib()
//     foodExample3.addToLib()
//     foodExample4.addToLib()
//     foodExample5.addToLib()
// }

// To do:
// + 0. Rewrite adding lines to table to make it a single function
// + 1. Delete from list buttons
// + 2. Duplicate in lib preventor
// + 3. Save day to archive
// + 4. Archive page ! a bit vsraty approach to history storing due to date conversion when saving to LS
// + 5. Delete from archive
// + 6. Add msgs
// Msg cases:
// - + product already in lib
// - + nothing to save
// - + product saved!
// - + product rewritten!
// - + product deleted!
// - + day saved!
// - + no such product to delete
// + 7. Make case insensitive
// + 7.1 forbid creating new products with the same names but different letter cases
// + 7.2 make the dropdown recognize and put to input the product names typed in even if they're with different letter cases
// 8. Reorder to classes and docs
// + 9. Restrict quantities lower than 0
// + 10. Allow modifying kcal for products
// 11. Reverse the archive order


