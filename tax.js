function calculateSalary() {
  const salary = document.getElementById('salary').value;

  const daPercentage = 5;
  const hraPercentage = 10;

  const da = (daPercentage / 100) * salary;
  const hra = (hraPercentage / 100) * salary;

  let taxPercentage;

  if (salary <= 500000) {
    taxPercentage = 5;
  } else if (salary > 500000 && salary <= 1000000) {
    taxPercentage = 10;
  } else {
    taxPercentage = 15;
  }

  const tax = (taxPercentage / 100) * salary;
  const finalSalary = salary - tax;

  document.getElementById('da').textContent = `Dearness Allowance (DA): ₹${da.toFixed(2)}`;
  document.getElementById('hra').textContent = `House Rent Allowance (HRA): ₹${hra.toFixed(2)}`;
  document.getElementById('tax').textContent = `Tax: ₹${tax.toFixed(2)}`;
  document.getElementById('finalSalary').textContent = `Final Salary after Tax: ₹${finalSalary.toFixed(2)}`;
}
