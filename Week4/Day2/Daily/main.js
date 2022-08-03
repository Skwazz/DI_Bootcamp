
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.

let createFrame = () => {
    let inputWords = prompt(`Give me number of words, seperated by comas.`)
    let usersInputToArr = inputWords.split(`,`);
        let biggestWord = usersInputToArr[0]
        usersInputToArr.forEach((element)=>{
            if(biggestWord.length < element.length){
                biggestWord = element
            }
        })
    let biggestWordLength = biggestWord.length
    
    let firstAndLastRow = () => {
        return `*`.repeat(biggestWordLength + 4)
    }
    
    let otherRows = (string) => `* ${string}${` `.repeat(biggestWordLength-(string.length))} *\n`
    let toReturn = `${firstAndLastRow()}\n`
    usersInputToArr.forEach(element => {
       toReturn+=otherRows(element)
    });
    toReturn += firstAndLastRow()
    console.log(toReturn);
    return toReturn;
}

createFrame();