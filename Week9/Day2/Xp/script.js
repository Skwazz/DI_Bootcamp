// EX I:
const compareToTen = (num) => {
  let compare = new Promise((res, rej) => {
    if (num > 10) {
      rej(`Bigger than 10`);
    } else {
      res(`Smaller than 10`);
    }
  });
  return compare;
};

// EX II:
const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success"), reject("Ooops something went wrong");
  }, 4000);
});

newPromise
  .then((resolved) => {
    console.log(resolved);
  })
  .catch((reject) => {
    console.log(reject);
  });

const newPromise2 = Promise.resolve("Success2");
newPromise2.then((value) => {
  console.log(value);
});
// EX III:
const newPromise3 = Promise.resolve(3);
newPromise3.then((value) => {
  console.log("value");
});

const newPromise4 = Promise.reject("Boo!");
newPromise.then((value) => {
  console.log(value);
});
