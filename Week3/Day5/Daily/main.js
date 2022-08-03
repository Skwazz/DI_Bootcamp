let toPrint = ''

for (let index = 1; index < 6; index++) {
    toPrint += "*".repeat(index)
    toPrint += "\n"
    
}
console.log(toPrint);

// Best I could do^

for (let index = 1; index <= 6; index++) {
    let toPrint2 = ''
    for (let index2 = 1; index2 <= index; index2++) {
        toPrint2+= '*'
        
    }
    toPrint2+= '\n'
    console.log(toPrint2);
}

