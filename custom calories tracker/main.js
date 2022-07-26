let productLib = JSON.parse(localStorage.getItem('products'))
if (productLib === null) {productLib = []}

const UIProductName = document.getElementById('UIProductName');
const UIProductScale1 = document.getElementById('UIProductScale1');
const UIProductScale2 = document.getElementById('UIProductScale2');
const UIProductKcal = document.getElementById('UIProductKcal');
const UIDeleteBtn = document.getElementById('UIDeleteBtn');
const UICloseBtn = document.getElementById('UICloseBtn');
const UISaveProductBtn = document.getElementById('UISaveProductBtn');


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

}

const foodExample = new Product('Apple', 2, 50)
const foodExample2 = new Product('Rice', 1, 130)
console.log(foodExample)
// foodExample.addToLib()
// foodExample2.addToLib()
console.log(productLib)



class Modal{ 
    save(name, scale, kcal) {
        this.name = UIProductName.value
        this.scale = (UIProductScale1.checked === true ? 1 : 2)
        this.kcal = UIProductKcal.value
        const newProduct = new Product(this.name, this.scale, this.kcal)
        newProduct.addToLib()
    }
}
const modal = new Modal
console.log(modal)

UISaveProductBtn.addEventListener('click', saveProductToLib)

function saveProductToLib(e) {
    e.preventDefault();
    modal.save()
}

document.querySelector('#editorBtn').add...