// Exercise 2 : Work With Forms

// 1.1

console.log(document.querySelector(`form`));

// 1.2

console.log(document.getElementById(`fname`));
console.log(document.getElementById(`lname`));
console.log(document.getElementById(`submit`));

// 1.3

console.log(document.getElementsByName(`fname`));
console.log(document.getElementsByName(`lname`));

// 1.4 

let selectSubmit = document.getElementById(`submit`)
console.log(selectSubmit);

let submitListener = selectSubmit.addEventListener(`submit`, (event) =>{
    event.preventDefault();
   return 

})