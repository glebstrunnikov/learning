class Alphabet {
    constructor(А,Б,В,Г,Д,Е,Ё,Ж,З,И,Й,К,Л,М,Н,О,П,Р,С,Т,У,Ф,Х,Ц,Ч,Ш,Щ,Ъ,Ы,Ь,Э,Ю,Я) {
        this.А = 0
        this.Б = 0
        this.В = 0
        this.Г = 0
        this.Д = 0
        this.Е = 0
        this.Ё = 0
        this.Ж = 0
        this.З = 0
        this.И = 0
        this.Й = 0
        this.К = 0
        this.Л = 0
        this.М = 0
        this.Н = 0
        this.О = 0
        this.П = 0
        this.Р = 0
        this.С = 0
        this.Т = 0
        this.У = 0
        this.Ф = 0
        this.Х = 0
        this.Ц = 0
        this.Ч = 0
        this.Ш = 0
        this.Щ = 0
        this.Ъ = 0
        this.Ы = 0
        this.Ь = 0
        this.Э = 0
        this.Ю = 0
        this.Я = 0
    }
}

const lettersValue = new Alphabet()

console.log(dictionaryFive)
dictionaryFive.forEach(el => {
    let word = Array.from(el)
    if (word.indexOf('а') != -1) {lettersValue.А++}
    if (word.indexOf('б') != -1) {lettersValue.Б++}
    if (word.indexOf('в') != -1) {lettersValue.В++}
    if (word.indexOf('г') != -1) {lettersValue.Г++}
    if (word.indexOf('д') != -1) {lettersValue.Д++}
    if (word.indexOf('е') != -1) {lettersValue.Е++}
    if (word.indexOf('ё') != -1) {lettersValue.Ё++}
    if (word.indexOf('ж') != -1) {lettersValue.Ж++}
    if (word.indexOf('з') != -1) {lettersValue.З++}
    if (word.indexOf('и') != -1) {lettersValue.И++}
    if (word.indexOf('й') != -1) {lettersValue.Й++}
    if (word.indexOf('к') != -1) {lettersValue.К++}
    if (word.indexOf('л') != -1) {lettersValue.Л++}
    if (word.indexOf('м') != -1) {lettersValue.М++}
    if (word.indexOf('н') != -1) {lettersValue.Н++}
    if (word.indexOf('о') != -1) {lettersValue.О++}
    if (word.indexOf('п') != -1) {lettersValue.П++}
    if (word.indexOf('р') != -1) {lettersValue.Р++}
    if (word.indexOf('с') != -1) {lettersValue.С++}
    if (word.indexOf('т') != -1) {lettersValue.Т++}
    if (word.indexOf('у') != -1) {lettersValue.У++}
    if (word.indexOf('ф') != -1) {lettersValue.Ф++}
    if (word.indexOf('х') != -1) {lettersValue.Х++}
    if (word.indexOf('ц') != -1) {lettersValue.Ц++}
    if (word.indexOf('ч') != -1) {lettersValue.Ч++}
    if (word.indexOf('ш') != -1) {lettersValue.Ш++}
    if (word.indexOf('щ') != -1) {lettersValue.Щ++}
    if (word.indexOf('ъ') != -1) {lettersValue.Ъ++}
    if (word.indexOf('ы') != -1) {lettersValue.Ы++}
    if (word.indexOf('ь') != -1) {lettersValue.Ь++}
    if (word.indexOf('э') != -1) {lettersValue.Э++}
    if (word.indexOf('ю') != -1) {lettersValue.Ю++}
    if (word.indexOf('я') != -1) {lettersValue.Я++}
});
console.log(lettersValue)

let dictionaryFiveNoDuplicateLetters = dictionaryFive.map(el => {
        let word = Array.from(el);
        word = new Set(word);
        word = Array.from(word);
        return word.join('')
    }
)
console.log(dictionaryFiveNoDuplicateLetters)

let wordValuesAnon = [];

dictionaryFiveNoDuplicateLetters.forEach(word => {
        let currentWordValue = 0;
        if (word.indexOf('а') != -1) {currentWordValue = currentWordValue + lettersValue.А}
        if (word.indexOf('б') != -1) {currentWordValue = currentWordValue + lettersValue.Б}
        if (word.indexOf('в') != -1) {currentWordValue = currentWordValue + lettersValue.В}
        if (word.indexOf('г') != -1) {currentWordValue = currentWordValue + lettersValue.Г}
        if (word.indexOf('д') != -1) {currentWordValue = currentWordValue + lettersValue.Д}
        if (word.indexOf('е') != -1) {currentWordValue = currentWordValue + lettersValue.Е}
        if (word.indexOf('ё') != -1) {currentWordValue = currentWordValue + lettersValue.Ё}
        if (word.indexOf('ж') != -1) {currentWordValue = currentWordValue + lettersValue.Ж}
        if (word.indexOf('з') != -1) {currentWordValue = currentWordValue + lettersValue.З}
        if (word.indexOf('и') != -1) {currentWordValue = currentWordValue + lettersValue.И}
        if (word.indexOf('й') != -1) {currentWordValue = currentWordValue + lettersValue.Й}
        if (word.indexOf('к') != -1) {currentWordValue = currentWordValue + lettersValue.К}
        if (word.indexOf('л') != -1) {currentWordValue = currentWordValue + lettersValue.Л}
        if (word.indexOf('м') != -1) {currentWordValue = currentWordValue + lettersValue.М}
        if (word.indexOf('н') != -1) {currentWordValue = currentWordValue + lettersValue.Н}
        if (word.indexOf('о') != -1) {currentWordValue = currentWordValue + lettersValue.О}
        if (word.indexOf('п') != -1) {currentWordValue = currentWordValue + lettersValue.П}
        if (word.indexOf('р') != -1) {currentWordValue = currentWordValue + lettersValue.Р}
        if (word.indexOf('с') != -1) {currentWordValue = currentWordValue + lettersValue.С}
        if (word.indexOf('т') != -1) {currentWordValue = currentWordValue + lettersValue.Т}
        if (word.indexOf('у') != -1) {currentWordValue = currentWordValue + lettersValue.У}
        if (word.indexOf('ф') != -1) {currentWordValue = currentWordValue + lettersValue.Ф}
        if (word.indexOf('х') != -1) {currentWordValue = currentWordValue + lettersValue.Х}
        if (word.indexOf('ц') != -1) {currentWordValue = currentWordValue + lettersValue.Ц}
        if (word.indexOf('ч') != -1) {currentWordValue = currentWordValue + lettersValue.Ч}
        if (word.indexOf('ш') != -1) {currentWordValue = currentWordValue + lettersValue.Ш}
        if (word.indexOf('щ') != -1) {currentWordValue = currentWordValue + lettersValue.Щ}
        if (word.indexOf('ъ') != -1) {currentWordValue = currentWordValue + lettersValue.Ъ}
        if (word.indexOf('ы') != -1) {currentWordValue = currentWordValue + lettersValue.Ы}
        if (word.indexOf('ь') != -1) {currentWordValue = currentWordValue + lettersValue.Ь}
        if (word.indexOf('э') != -1) {currentWordValue = currentWordValue + lettersValue.Э}
        if (word.indexOf('ю') != -1) {currentWordValue = currentWordValue + lettersValue.Ю}
        if (word.indexOf('я') != -1) {currentWordValue = currentWordValue + lettersValue.Я}
        wordValuesAnon.push(currentWordValue)
    }
)

console.log(wordValuesAnon)

let wordValues = []
wordValuesAnon.forEach((word, i) => {
        wordValues[word] = dictionaryFive[i]
    }
)
console.log(wordValues)


// let wordValues = []
// dictionaryFive.forEach((word, i) => {
//         wordValues[word] = wordValuesAnon[i]
//     }
// )
// console.log(wordValues)



// )
// dictionaryFiveNoDuplicateLetters.forEach(el => {
//     let word = Array.from(el);
//     word = new Set(word);
//     word = Array.from(word);
//     el = word.join('')
//     console.log(el)
// })

// console.log(dictionaryFiveNoDuplicateLetters)