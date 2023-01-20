class Alphabet {
  constructor() {
    [
      "А",
      "Б",
      "В",
      "Г",
      "Д",
      "Е",
      "Ё",
      "Ж",
      "З",
      "И",
      "Й",
      "К",
      "Л",
      "М",
      "Н",
      "О",
      "П",
      "Р",
      "С",
      "Т",
      "У",
      "Ф",
      "Х",
      "Ц",
      "Ч",
      "Ш",
      "Щ",
      "Ъ",
      "Ы",
      "Ь",
      "Э",
      "Ю",
      "Я",
    ].forEach((letter) => (this[letter] = 0));
  }
}

// Для каждой буквы вычисляем ее "цену" - т.е. в каком количестве слов она встречается хотя бы один раз
const lettersValue = new Alphabet();
dictionaryFive.forEach((el) => {
  let word = Array.from(el);
  for (const letter in lettersValue) {
    if (word.indexOf(letter.toLowerCase()) != -1) {
      lettersValue[letter]++;
    }
  }
});
console.log(lettersValue);

// Делаем отдельный словарь, в котором номера слов соответствуют основному, но буквы в каждом слове встречаются не более одного раза. При этом порядок букв нас не интересует
let dictionaryFiveNoDuplicateLetters = dictionaryFive.map((el) => {
  let word = Array.from(el);
  word = new Set(word);
  word = Array.from(word);
  return word.join("");
});
console.log(dictionaryFiveNoDuplicateLetters);

// для каждого слова из словаря без повторов вычисляем суммарную цену букв, составляющих его, и делаем массив этих значений
const wordValuesAnon = [];
dictionaryFiveNoDuplicateLetters.forEach((word) => {
  let currentWordValue = 0;
  const alphabet = Object.keys(lettersValue);

  alphabet.forEach((letter) => {
    if (word.indexOf(letter.toLowerCase()) != -1) {
      currentWordValue = currentWordValue + lettersValue[letter];
    }
  });
  wordValuesAnon.push(currentWordValue);
});
console.log(wordValuesAnon);

// В итоговом словаре каждому значению из массива суммарных цен букв присваивается слово из пяти букв, которое ему соответствует. В результате получается массив строк вида "цена: "слово"", выстроенный по возрастанию. Соответственно, в последней строке массива и находится самое выгодное слово!
let wordValues = [];
wordValuesAnon.forEach((word, i) => {
  wordValues[word] = dictionaryFive[i];
});
console.log(wordValues);
