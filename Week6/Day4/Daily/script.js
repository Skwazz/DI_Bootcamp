let client = "Betty";

let groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "35$",
  other: {
    payed: false,
    meansOfPayment: ["cash", "creditCard"],
  },
};

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

const displayGroceries = () => {
  groceries.fruits.forEach((element) => {
    console.log(element);
  });
};

displayGroceries();

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// ANSWER ------
// Yes we it would change aswell because client is in the global scope and is a let which means we can chabge it througout the file
// ANSWER ------
// In the function, create a variable named shopping that is a copy of the groceries object. (Tip : make the shopping variable equal to the groceries variable)
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// ANSWER ------
///Yes we it would change aswell because client is in the global scope and is a let which means we can chabge it througout the file
// and when cloning the new object gets the same data as the first object that he copied from
// ANSWER ------
// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?
///Yes we it would change aswell because client is in the global scope and is a let which means we can chabge it througout the file
// and when cloning the new object gets the same data as the first object that he copied from
// ANSWER ------

let cloneGroceries = () => {
  let user = client;

  let shopping = { ...groceries };
  console.log(shopping);
};

cloneGroceries();
