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
dictionaryParsed = dictionaryParsed.replaceAll(reParserSpaces, " "); // убираем двойные пробелы
const reParserMore = / [а-яё\-]{6,}/gi;
dictionaryParsed = dictionaryParsed.replaceAll(reParserMore, ""); // убираем слова длинне 5 букв. Вот со словами короче 5 уже так просто не выйдет, потому что \b не работает с кириллицей, а окружать регэксп пробелами - приведет к пропуску слов, когда несколько слов короче 5 букв идет подряд

const dictionaryOneToFive = dictionaryParsed.split(" ");
let dictionaryFive = dictionaryOneToFive.filter((el) => el.length >= 5);
const reParserCapitals = /^[А-ЯЁ]/;
dictionaryFive = dictionaryFive.filter(
  (el) => reParserCapitals.test(el) === false
);
dictionaryFive = new Set(dictionaryFive);
dictionaryFive = Array.from(dictionaryFive);
console.log(dictionaryFive);

// готово!
