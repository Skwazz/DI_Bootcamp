// #1
function q1() {
  var a = 5;
  if (a > 1) {
    a = 3;
  }
  alert(a);
}

// run in the console:
q1();
// Prediction: will alert the number 3

//#2
var a = 0;
function q2() {
  a = 5;
}

function q22() {
  alert(a);
}

// run in the console:
q22();
q2();
q22();

// Prediction : will alert a = 5 for the first q22 function, then q2 will do nothing and then q22 will be 5 aswell

//#3
function q3() {
  window.a = "hello";
}

function q32() {
  alert(a);
}

// run in the console:
q3();
q32();
// Prediction : q3 will do nothing , q32 will alert hello.
//#4
var a = 1;
function q4() {
  var a = "test";
  alert(a);
}

// run in the console:
q4();
// Prediction : q4 will alert test
//#5
var a = 2;
if (true) {
  var a = 5;
  alert(a);
}
alert(a);
// Prediction : will not do anything because a isn't equal to 5 so it will not do anything
