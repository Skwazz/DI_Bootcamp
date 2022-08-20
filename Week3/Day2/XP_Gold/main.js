// Exercise 1 : Favorite Color:

let sentence = ["my","favorite","color","is","blue"];

let sentanceJoined = sentence.toString();

console.log(sentanceJoined);

// Exercise 2 : Mixup:


// Task 2.2 : 
let str1 = "mix";
let str2 = "pod";

let str1WithP = str2.slice(0, 2) + str1.slice(2, 3);  
let str2WithM = str1.slice(0, 2) + str2.slice(2, 3);

console.log(str1WithP);
console.log(str2WithM);

// Task 2.3 + Task 2.4 :

let newWord = str1WithP + ' ' + str2WithM;

console.log(newWord);



// Exercise 3 : Calculator :

let num1 = parseInt (prompt('Enter 1st number: ')) ;

let num2 = parseInt (prompt('Enter 2nd number: ')) ;

let sum = num1 + num2;

alert(sum);
