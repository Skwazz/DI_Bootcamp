// Challange I:
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
  });


// Challange II:

const form = document.forms[0];
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const lat1 = form.lat1.value;
  const long1 = form.long1.value;
  const lat2 = form.lat2.value;
  const long2 = form.long2.value;
  form.lat1.value = "";
  form.long1.value = "";
  form.lat2.value = "";
  form.long2.value = "";
  const response1 = await fetch(`http://api.sunrise-sunset.org/json?lat=${lat1}&lng=${long1}`);
  const response2 = await fetch(`http://api.sunrise-sunset.org/json?lat=${lat2}&lng=${long2}`);
  const result = await Promise.all([response1, response2]);
  //   console.log(result);
  result.forEach((item) => {
    item.json().then((data) => {
      console.log("Sunrise: " + data.results.sunrise);
      console.log("Sunset: " + data.results.sunset);
    });
  });
});
