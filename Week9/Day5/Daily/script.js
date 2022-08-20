
const form = document.forms[0];
const from = document.getElementById("from");
const to = document.getElementById("to");
const amount = document.getElementById("amount");
const display = document.getElementById("display");
const apiKey = "78fdb7aa851ee7dbf49790d3";
const codesApi = `https://v6.exchangerate-api.com/v6/${apiKey}/codes`;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let amountValue = amount.value;
  if (isNaN(amountValue) || amountValue == "") {
    alert("Please enter a number");
  } else {
    getExchange(amountValue);
    amount.value = "";
  }
});

async function getCurrencies(url) {
  const result = await fetch(url);
  if (!result.ok) {
    console.log("error");
  } else {
    const jsonResult = await result.json();
    return jsonResult.supported_codes;
  }
}

async function getExchange(amount) {
  const result = await fetch(
    `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from.selectedOptions[0].value}/${to.selectedOptions[0].value}`
  );
  if (!result.ok) {
    console.log("error");
  } else {
    const jsonResult = await result.json();
    const finalConversion = `${amount} ${from.selectedOptions[0].value} is equal to ${jsonResult.conversion_rate* amount} ${to.selectedOptions[0].value}`;
    display.textContent = finalConversion;
  }
}

getCurrencies(codesApi).then((e) => {
  e.forEach((element) => {
    element = element.join(" - ");
    let optionFrom = document.createElement("option");
    let optionTo = document.createElement("option");
    optionFrom.setAttribute("value", element.slice(0, 3));
    optionTo.setAttribute("value", element.slice(0, 3));
    optionFrom.textContent = element;
    optionTo.textContent = element;
    from.append(optionFrom);
    to.append(optionTo);
  });
});