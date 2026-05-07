// ===============================
// JS Practice 1 - All in One File
// ===============================

// 1. Scope Demo
function q1() {
  function variableScopeDemo() {
    var a = 10;
    let b = 20;
    const c = 30;

    if (true) {
      var a = 100;
      let b = 200;
      const c = 300;

      console.log("Inside block:", a, b, c);
    }

    console.log("Outside block:", a, b, c);
  }

  variableScopeDemo();

  
}

// 2. Second Fruit
function q2() {
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

  function getSecondFruit(arr) {
    return arr[1];
  }

  console.log("Second fruit:", getSecondFruit(fruits));
}

// 3. push & pop
function q3() {
  function modifyArray(arr) {
    arr.push("NewItem");
    arr.pop();
    return arr;
  }

  console.log("Modified array:", modifyArray(["A", "B", "C"]));
}

// 4. map square
function q4() {
  function squareNumbers(arr) {
    return arr.map(num => num * num);
  }

  console.log("Squared array:", squareNumbers([1, 2, 3, 4]));
}

// 5. filter odd
function q5() {
  function getOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
  }

  console.log("Odd numbers:", getOddNumbers([1, 2, 3, 4, 5, 6]));
}

// 6. greeting object
function q6() {
  const person = {
    name: "Nutan",
    age: 22,
    occupation: "Student"
  };

  function greet(p) {
    console.log(`Hello, my name is ${p.name}. I am ${p.age} years old and I am a ${p.occupation}.`);
  }

  greet(person);
}

// 7. rectangle area
function q7() {
  function getArea(rect) {
    return rect.width * rect.height;
  }

  console.log("Area:", getArea({ width: 5, height: 10 }));
}

// 8. object keys
function q8() {
  function getKeys(obj) {
    return Object.keys(obj);
  }

  console.log("Keys:", getKeys({ name: "Nutan", age: 22, city: "Mumbai" }));
}

// 9. merge objects
function q9() {
  function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
  }

  console.log("Merged:", mergeObjects({ a: 1 }, { b: 2 }));
}

// 10. reduce sum
function q10() {
  function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
  }

  console.log("Sum:", sumArray([1, 2, 3, 4, 5]));
}

// ===============================
// Terminal Control Logic
// ===============================

const question = process.argv[2];

switch (question) {
  case "1": q1(); break;
  case "2": q2(); break;
  case "3": q3(); break;
  case "4": q4(); break;
  case "5": q5(); break;
  case "6": q6(); break;
  case "7": q7(); break;
  case "8": q8(); break;
  case "9": q9(); break;
  case "10": q10(); break;
  default:
    
    console.log("Example: node practice.js 3");
}
if (question === "all") [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10].forEach(fn => fn());