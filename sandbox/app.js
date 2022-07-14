function numberIterator (nums) {
    let nextIndex = 0 // Why doesn't it make it 0 each time i call the iterator?

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
console.log(numbers.nex())
console.log(numbers.nex())
console.log(numbers.nex())


function* createIds() {
    let index = 1
    while(true) {
        yield index++
    }
}

const generator = createIds()

console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)


// don't really understand how is it better than code below

let indexID = 0
function idCreator () {
    indexID++
    return indexID
}

console.log(idCreator())
console.log(idCreator())
console.log(idCreator())