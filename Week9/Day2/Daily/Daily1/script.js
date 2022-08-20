function makeAllCaps(arr) {
  let counter = 0;
  const promise = new Promise((res, rej) => {
    arr.array.forEach((element) => {
      if (typeof element === "string") {
        counter++;
      }
    });
    if (counter === arr.length) {
      res(arr.map((e) => e.toUpperCase()));
    } else {
      rej(`Not all of the array is a string`);
    }
  });
  return promise
    .then((res) => {
      console.log(res);
    })
    .then(sortWords(arr))
    .catch((error) => {
      console.log(error);
    });
}
function sortWords(capsArr) {
  const promise = new Promise((res, rej) => {
    if (capsArr.length > 4) {
      res(capsArr.sort());
    } else {
      rej("Array is not bigger than 4.");
    }
  });
  return promise
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
}
