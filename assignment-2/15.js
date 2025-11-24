let expenses = [2000, 1500, 3500, 4000];

function calculateTotal(expList) {
  let total = 0;

  for (let amount of expList) {
    total += amount;
  }

  console.log("Total Money Spent:", total);
}


calculateTotal(expenses);

