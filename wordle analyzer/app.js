let dictionary
let dictionaryParsed

function loadDict () {
    xhr = new XMLHttpRequest;
    xhr.open ('GET', 'sample.txt', false)
    xhr.onload = function () {
        dictionary = this.responseText
    }
    xhr.send()
}

loadDict ()


console.log(dictionary)

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

reParserView = /<empty-line\/>/gi
dictionaryParsed = dictionary.replaceAll(reParserView, `
`)


// dictionaryParsed = reverseString(dictionary)
// // reParserMultiple = /<strong>.*?<\/strong>.*?множественное/gi // нет, оно удаляет слишком много, надо сначала реверснуть
// reParserMultiple = /еонневтсежонм.*?>gnorts\/<.*?>gnorts</gi //
// dictionaryParsed = dictionaryParsed.replaceAll(reParserMultiple, ``);
// dictionaryParsed = reverseString(dictionaryParsed)

reParserTrash = /<\/strong>.*?<strong>/gi // перед этим надо убрать множественные числа
reParserCommas = /\,/gi
reParserLess = / [а-я]{1,4} /gi
reParserMore = / [а-я]{6,}/gi
reParserSpaces = /  /gi


// dictionaryParsed = dictionaryParsed.replaceAll(reParserTrash, ` `);
// dictionaryParsed = dictionaryParsed.replaceAll(reParserCommas, ' ');
// dictionaryParsed = dictionaryParsed.replaceAll(reParserLess, ' ');
// dictionaryParsed = dictionaryParsed.replaceAll(reParserMore, '');
// dictionaryParsed = dictionaryParsed.replaceAll(reParserSpaces, ' ');

console.log(dictionary)
console.log(dictionaryParsed)






