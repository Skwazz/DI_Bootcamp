let word = "bottles";
let count = Number(prompt(`How many beers on the wall?`));
let num = 1;
while (count > 0) {
  if (count == 1) {
  }
  let word = "bottle";
  console.log(`${count} ${word} of beer on the wall`);
  console.log(`${count} ${word} of beer on the wall`);
  console.log(`Take ${num} down, pass it around`);
  count = count - num++;

  if (count > num) {
    if (count == 1) {
      let word = "bottle";
      console.log(`${count} ${word} of beer on the wall`);
    }
  } else {
    if (count < 1) {
      let word = "bottles";
      console.log(`No more ${word} of beer on the wall`);
    }
  }
}
