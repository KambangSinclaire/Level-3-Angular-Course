import { Library } from "./library";

// To instantiate a class(create an object of that class), we
// use the new keyword
const gameChanger = new Library();
gameChanger.author = 'SAA LEVEL-3';
gameChanger.coauthors = ['Mr Kambang', 'Mme Yomba'];
gameChanger.description = 'The best GC in Typescript/Angular';

const urlParser = new Library();
urlParser.author = 'Some body';
urlParser.coauthors = ["New some people", "SAA Students"];
urlParser.description = "The best URL Transformer";

console.log(urlParser.getAuthor()); // output?
urlParser.setCoauthors('Randy Authur');
console.log(urlParser.getCoAuthors()); // output?

