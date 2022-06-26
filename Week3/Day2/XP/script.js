// Exercise 1: Your Favorite Food
let favoriteFood = 'spagetthi';
let favoriteMeal = 'lunch';

 console.log('My favorite food is ' + favoriteFood + ' and my fovorite meal of the day is '+ favoriteMeal +'.');

// Exercise 2 : Series

//part 1:
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesLength = myWatchedSeries.length;

console.log(myWatchedSeriesLength);

let myNumberOfWatched = myWatchedSeries.slice(0,3);

let myWatchedSeriesSentence = 'I watched '+ myWatchedSeriesLength  + ' series : '+ myNumberOfWatched;

console.log(myWatchedSeriesSentence);

//part 2.1:

myWatchedSeries[2] = 'friends';

console.log(myWatchedSeries);

// Task 2.2:

let myWatchedSeriesAddEnd = myWatchedSeries.push('naruto');

console.log(myWatchedSeries);

// Task 2.3:

let myWatchedSeriesAddStart = myWatchedSeries.unshift('one piece');

console.log(myWatchedSeries);

// Task 2.4:

let myWatchedSeriesRemoveEle = myWatchedSeries.splice(1, 1, );

console.log(myWatchedSeries);

// Task 2.5:

console.log(myWatchedSeries[1][2]);

// Task  2.6:

console.log(myWatchedSeries);

// Exercise 3 : The Temperature Converter

let celsius = 10;


let fahrenheit = (celsius*1.8)+32;

console.log(celsius + '°C is '+ fahrenheit + '°F');

// Exercise 4 : Guess The Answers #1

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction:55, Because 34 and 21 are numbers
// Actual:55

a = 2;

console.log(a+b) //second expression
// Prediction:23, Because a we set a 'a' to a new value then now it is equal to 2 and they are both numbers
// Actual:23

console.log(3 + 4 + '5');
// Prediction : It would be 75. Because the 3 and 4 are numbers so the get added together and 5 is a string so it just adds himself to the string.
// Actual: 75



// Exercise 5 : Guess The Answers #2

typeof(15)
// Prediction:Number
// Actual:Number

typeof(5.5)
// Prediction:Number
// Actual:Number

typeof(NaN)
// Prediction:Number
// Actual:Number

typeof("hello")
// Prediction:String    
// Actual:String

typeof(true)
// Prediction:Boolean
// Actual:Boolean

typeof(1 != 2)
// Prediction:Boolean
// Actual:Boolean

"hamburger" + "s"
// Prediction:Humburgers
// Actual:Humburgers

"hamburgers" - "s"
// Prediction:NaN
// Actual:NaN

"1" + "3"
// Prediction:13
// Actual:13

"1" - "3"
// Prediction:-2
// Actual:-2

"johnny" + 5
// Prediction:johnny5
// Actual:

"johnny" - 5
// Prediction:NaN
// Actual:NaN

99 * "hello"
// Prediction:NaN   
// Actual:NaN

1 != 1
// Prediction:false
// Actual:false

1 == "1"
// Prediction:true 
// Actual:true

1 === "1"
// Prediction:false
// Actual:false


// Exercise 6 : Guess The Answers #3

5 + "34"
// Prediction:534
// Actual:534

5 - "4"
// Prediction:1
// Actual:1

10 % 5
// Prediction:0
// Actual:0

5 % 10
// Prediction:5
// Actual:5

"Java" + "Script"
// Prediction:JavaScript
// Actual:JavaScript

" " + " "
// Prediction:'  '
// Actual:'  '

" " + 0
// Prediction:' 0'
// Actual:' 0'

true + true
// Prediction:true  
// Actual:2

true + false
// Prediction:1
// Actual:1

false + true
// Prediction:1
// Actual:1

false - true
// Prediction:-1
// Actual:-1

!true
// Prediction:false
// Actual:false

3 - 4
// Prediction:-1    
// Actual:-1

"Bob" - "bill"
// Prediction:NaN
// Actual:NaN
