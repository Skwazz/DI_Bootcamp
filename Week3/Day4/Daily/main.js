let sentence = `The movie is not that bad, I like it`;

let wordNot = sentence.indexOf('not')
let wordBad = sentence.indexOf('bad')

let newSentace = sentence
console.log(wordNot);
console.log(wordBad);

if (wordNot < wordBad && wordNot !== -1) {
   newSentace = `${sentence.substring(0,wordNot)} good ${sentence.substring(wordBad + 3)}`
}
console.log(newSentace);
