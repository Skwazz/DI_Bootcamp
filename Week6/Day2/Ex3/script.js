let isString = (str) => {
  return str ? str.String(true) : str.String(false);
};

console.log(isString(`hello`));
console.log(isString(1234));
