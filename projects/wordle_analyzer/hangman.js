let dictionary;
let dictionaryParsed;

function loadDict() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "slovarUTF8.txt", false);
  xhr.onload = function () {
    dictionary = this.responseText;
  };
  xhr.send();
}

loadDict();

// console.log(dictionary);
// словарь безумно насыщен мусором, и первоочередная задача - убрать из него все, кроме существительных из пяти букв

const reParserLine = /<empty-line\/>/gi;
dictionaryParsed = dictionary.replaceAll(
  reParserLine,
  `
`
); // добавляем переносы для удобства просмотра консоли и для корректного удаления множественных
const reParserLink = /<a href.*?>/gi;
dictionaryParsed = dictionaryParsed.replaceAll(reParserLink, ""); // убираем гиперссылки
const reParserSmotri = /<emphasis>смотри<.*?\/strong>/gi;
dictionaryParsed = dictionaryParsed.replaceAll(reParserSmotri, ""); // смотри:
const reParserToZhe = /<emphasis>то же, что<.*?\/strong>/gi;
dictionaryParsed = dictionaryParsed.replaceAll(reParserToZhe, ""); // то же, что и:
const reParserMultiple =
  /<p><strong>.*?<emphasis>множественное число<.*?<\/p>/gi;
dictionaryParsed = dictionaryParsed.replaceAll(reParserMultiple, ""); // удаляем множественные числа
const reParserLineDelete = /\n/gi;
dictionaryParsed = dictionaryParsed.replaceAll(reParserLineDelete, " "); // удаляем переносы,чтобы потом вычистить треш
const reParserTrash = /<\/strong>.*?<strong>/gi;
dictionaryParsed = dictionaryParsed.replaceAll(reParserTrash, " "); // удаляем описания и теги
const reParserCommas = /\,/gi;
dictionaryParsed = dictionaryParsed.replaceAll(reParserCommas, ""); // убираем запятые (хз как они сохранились)
const reParserSpaces = /\s+/gi;
dictionaryParsed = dictionaryParsed.replaceAll(reParserSpaces, ""); // убираем пробелы

dictionaryParsed = dictionaryParsed.split("");

let rating = {};

dictionaryParsed.forEach((el) => {
  if (rating[el] == null) {
    rating[el] = 0;
  }
  rating[el]++;
});

let ratingArr = [];
for (const [key, value] of Object.entries(rating)) {
  ratingArr[value] = key;
}

console.log(ratingArr);
