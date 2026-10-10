function calculateBill({ amount, tipPercent = 15, people = 1 }) {
  if (typeof amount !== "number" || amount <= 0) {
    throw new Error("Amount must be a positive number");
  }
  if (typeof tipPercent !== "number" || tipPercent < 0) {
    throw new Error("Tip percent must be a valid non-negative number");
  }
  if (typeof people !== "number" || people < 1) {
    throw new Error("There must be at least one person");
  }

  const tip = amount * (tipPercent / 100);
  const total = amount + tip;

  return {
    tip: Number(tip.toFixed(2)),
    total: Number(total.toFixed(2)),
    perPerson: Number((total / people).toFixed(2)),
  };
}

function formatBill(result) {
  return [
    "\n\n_____________________Bill Summary_______________",
    `Tip: Rs. ${result.tip}`,
    `Total: Rs. ${result.total}`,
    `Per Person: Rs. ${result.perPerson}`
  ].join("\n");
}

try {
  const billResult = calculateBill({ amount: 2400, tipPercent: 10, people: 3 });
  console.log(formatBill(billResult));
} catch (error) {
  console.error(error.message);
}

try {
  calculateBill({ amount: 2000, tipPercent: "fifteen" });
} catch (error) {
  console.error(`Error caught: ${error.message}`);
}