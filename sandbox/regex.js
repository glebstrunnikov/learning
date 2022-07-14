try {
throw new SyntaxError('errorrrr')
} catch(err) {
    console.log(err.message)
}     

// exec, test / match, search, replace (all these only work 1 time)

let regEx1 = /fuck/i;
regEx1 = /fuck/

const text1 = 'Fuck oh fuck'

console.log(regEx1.source)
console.log(regEx1.exec(text1));
console.log(regEx1.test(text1));
console.log(text1.match(regEx1));
console.log(text1.search(regEx1));
console.log(text1.replace(regEx1, 'hell'))

let regEx2 = /^[BD]ob/i
regEx2 = /[^BD]ob/
regEx2 = /bo{0,}b/
regEx2 = /b(o{1,3})?b/
regEx2 = /B/gi
let text2 = 'Dob give me bb'
console.log(regEx2.exec(text2));
console.log(text2.replace(regEx2, 'T'));

// let regEx3 = new RegExp(regEx2);

// console.log(regEx2)
// console.log(regEx3)


