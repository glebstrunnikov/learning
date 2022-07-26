// if ({a: 1} === {a: 1}) {console.log(true)} else {console.log(false)}

// let test
// test = 1
// // test = !test
// console.log(!test)

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    // Product.call(this, name, price);
    this.name = name;
    this.price = price;
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5));
  // expected output: "cheese"
  

function* createNumbers () {
    let nextIndex = 0
    yield nextIndex;
    nextIndex++;
    yield nextIndex*2;
    nextIndex++;
    yield nextIndex*2;
    nextIndex++;
}

const generator = createNumbers()
console.log(generator)
console.log(createNumbers().next().value)
console.log(createNumbers().next().value)
console.log(createNumbers().next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)

// function* createIds() {
//     let index = 1
//     while(true) {
//         yield index++
//     }
// }

// const generator = createIds()

// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)

let a, b, c

// [a, b, c] = [10, "2", "hello"]

a = 10
b = "2"
c = "hello"

console.log(a)
console.log(b)
console.log(c)