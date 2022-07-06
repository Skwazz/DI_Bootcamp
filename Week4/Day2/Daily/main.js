
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