let firstUrl = new URL(`https://images-na.ssl-images-amazon.com/images/I/41t9lnhXuFL._SX330_BO1,204,203,200_.jpg`)

let secondUrl = new URL(`https://www.readgeek.com//images/cover/.tmb/thumb_0439554934-L_300_300.jpg`)
let createFirstImg = document.createElement(`img`)
let createSecondImg = document.createElement(`img`)
let addToDiv = document.querySelector(`div`)
let addFirstImg = addToDiv.appendChild(createFirstImg);
let addSecondImg = addToDiv.appendChild(createSecondImg);
createFirstImg.setAttribute(`img`, `https://images-na.ssl-images-amazon.com/images/I/41t9lnhXuFL._SX330_BO1,204,203,200_.jpg`)
createSecondImg.setAttribute(`img`, `https://www.readgeek.com//images/cover/.tmb/thumb_0439554934-L_300_300.jpg`)


let allBooks = {
title: [`lord of the rings`, `Harry Potter`],
author:[`J. R. R. Tolkien`, `J. K. Rowling`],
image:[createFirstImg , createSecondImg],
alreadyRead: [true , true]
}



function createTable(tableData) {
    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');
    
    tableData.forEach(function(rowData) {
      let row = document.createElement('tr');
  
      rowData.forEach(function(cellData) {
        let cell = document.createElement('td');
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell);
      });
  
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
    document.body.appendChild(table);
  
}
 
  createTable([[allBooks.title[0],allBooks.author[0]], [allBooks.title[1],allBooks.author[1]]]);