const sym1 = Symbol('sym')
const sym2 = Symbol('sym2')

// console.log(sym1)

const myObj = {1: 'asd'}

// myObj.sym1 = sym1 // выдает ошибку!
myObj[sym2] = sym2

// console.log(myObj)
// console.log(myObj.sym1)
// console.log(myObj.sym2)
// console.log(myObj[sym2])

for (let i in myObj) {
    console.log(`${i} is ${myObj[i]}`)
}

const numberSet = {n1: 'one', n2: 'two', n3: 'three'}

console.log(numberSet)

const {n1, n2} = numberSet

console.log(n1)

const map1 = new Map()
const key1 = {f: 10}
const key2 = 'key2'

map1.set(key1, 'string')
map1.set(key2, [1,2,3,4])

console.log(map1)
console.log(map1.get(key1))


set1 = new Set([1, "string"])

for (let item of set1) {console.log(item)}

function test() {
let test = 0
}
test()
test()