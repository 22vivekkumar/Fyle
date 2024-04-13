const calculateButton = document.getElementById("calculate");
const resultDiv = document.querySelector(".result");

calculateButton.addEventListener("click", () => {
    const grossIncome = parseFloat(document.getElementById("grossIncome").value);
    const extraIncome = parseFloat(document.getElementById("extraIncome").value);
    const ageGroup = document.getElementById("ageGroup").value;
    const deduction = parseFloat(document.getElementById("deduction").value);

    let tax = 0;

    if (ageGroup === "under30") {
        tax = grossIncome * 0.1 + extraIncome * 0.2;
    } else if (ageGroup === "30to50") {
        tax = grossIncome * 0.15 + extraIncome * 0.25;
    } else if (ageGroup === "over50") {
        tax = grossIncome * 0.2 + extraIncome * 0.3;
    }

    tax -= deduction;

    resultDiv.textContent = `Your tax is: Rs${tax.toFixed(2)}`;
}); 