// у меня такой осторожный вопрос. Я сейчас слушаю лекцию про итераторы и генераторы. И что касается первых, то меня не покидает ощущение какой-то вымученности что ли. Ну то есть на мой дилетантский взгляд нет никакой нужды вытягивать объект через функцию внутри объекта внутри другой функции, когда можно просто объявить отдельную переменную index и ее же скормить функции в качестве аргумента?

// Вот пример итератора, который приводит Брэд на лекции


function numberIterator (nums) {
    let nextIndex = 0 // кстати, я не очень понимаю, почему на этом моменте переменной не присваивается значение 0 каждый раз при вызове функции

    return {
        nex: function() {
            if (nextIndex < nums.length) {return {value: nums[nextIndex++], done: false}}
            else {return {done: true}}
        }
        // next: function() {
        //     return nextIndex < nums.length ?
        //     {value: nums[nextIndex++], done: false} :
        //     {done: true}
        // }
    }
}

const numsArr = [1,2,3,5,6]
const numbers = numberIterator(numsArr)
console.log(numbers.nex().value)
console.log(numbers.nex())
console.log(numbers.nex())


let customIndex = 0
function customNumberIterator (i) {
    if (i < numsArr.length) {customIndex++
        return {value: numsArr[i++], done: false}}
    else {return {done: true}}
}

console.log(customNumberIterator(customIndex).value)
console.log(customNumberIterator(customIndex))
console.log(customNumberIterator(customIndex))



function* createIds() {
    let index = 1
    while(true) {
        yield index++
    }
}

const generator = createIds()

// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)


// don't really understand how is it better than code below

let indexID = 0
function idCreator () {
    indexID++
    return indexID
}

// console.log(idCreator())
// console.log(idCreator())
// console.log(idCreator())