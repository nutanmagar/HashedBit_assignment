
// ====== EVEN NUMBERS =====
function showEven() {
    let result = "";
    for (let i = 2; i <= 100; i += 2) {
        result += i + " ";
    }
    document.getElementById("evenOutput").innerText = result;
}

// ========== CALCULATOR ==========
function calculate(op) {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    let result;

    switch (op) {
        case '+': result = n1 + n2; break;
        case '-': result = n1 - n2; break;
        case '*': result = n1 * n2; break;
        case '/': 
            result = n2 !== 0 ? n1 / n2 : "Cannot divide by zero"; 
            break;
        default: result = "Invalid operation";
    }

    document.getElementById("calcOutput").innerText = "Result: " + result;
}

// ================= TAX CALCULATOR =================
function calculateTax() {
    let salary = Number(document.getElementById("salary").value);
    let tax;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = 0;
            break;

        case (salary <= 1000000):
            tax = salary * 0.10;
            break;

        case (salary <= 1500000):
            tax = salary * 0.20;
            break;

        case (salary > 1500000):
            tax = salary * 0.30;
            break;

        default:
            tax = "Invalid salary";
    }

    document.getElementById("taxOutput").innerText = "Tax: ₹ " + tax;
}

// ================= SUM OF PRODUCTS =================
function findSumProduct() {
    let n1 = document.getElementById("n1").value.toString();
    let n2 = document.getElementById("n2").value.toString();

    let maxLength = Math.max(n1.length, n2.length);

    n1 = n1.padStart(maxLength, '0');
    n2 = n2.padStart(maxLength, '0');

    let sum = 0;

    for (let i = 0; i < maxLength; i++) {
        sum += Number(n1[i]) * Number(n2[i]);
    }

    document.getElementById("prodOutput").innerText = "Output: " + sum;
}