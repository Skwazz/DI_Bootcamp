let bankAmount = 10000;

const vat = 0.17;

let expenses = ["+200", "-100", "+146", "+167", "-2900"];

const program = (expenses) => {
  expenses.forEach((each) => {
    let withVat = each * (vat + 1);
    let sum = +withVat;
    bankAmount = bankAmount + sum;
  });
  console.log(bankAmount);
};

program(expenses);
