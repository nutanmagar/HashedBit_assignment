
// Q1: Remove states starting with vowels
function q1() {
    let states = ["Andhra Pradesh", "Bihar", "Uttar Pradesh", "Odisha", "Kerala", "Assam"];

    let result = states.filter(state => {
        let ch = state[0].toLowerCase();
        return !['a','e','i','o','u'].includes(ch);
    });

    console.log("Q1:", result);
}

// Q2: Reverse sentence
function q2() {
    let str = "I love my India";
    let result = str.split(" ").reverse().join(" ");
    console.log("Q2:", result);
}

// Q3: INDIA → INDONESIA (splice)
function q3() {
    let str = "INDIA".split("");
    str.splice(3, 0, "O", "N", "E", "S");
    console.log("Q3:", str.join(""));
}

// Q4: Count vowels & consonants
function q4() {
    let text = "This is a sample string with more than twenty characters";

    let v = 0, c = 0;

    for (let ch of text.toLowerCase()) {
        if (/[a-z]/.test(ch)) {
            if ("aeiou".includes(ch)) v++;
            else c++;
        }
    }

    console.log("Q4: Vowels =", v, ", Consonants =", c);
}

// Q5: Replace wrong word
function q5() {
    function correctfn(str, wrong, correct) {
        return str.replace(wrong, correct);
    }

    console.log("Q5:", correctfn("I has a pen", "has", "have"));
}

// Q6: Filter numbers > 5
function q6() {
    let arr = [1,2,3,9,10,7,5,4,3];
    let result = arr.filter(n => n > 5);
    console.log("Q6:", result);
}

// Q7: Average using map & reduce
function q7() {
    const students = [
        { name: "Ram", scores: [80, 70, 60] },
        { name: "Mohan", scores: [80, 70, 90] },
        { name: "Sai", scores: [60, 70, 80] },
        { name: "Hemang", scores: [90, 90, 80, 80] }
    ];

    let result = students.map(s => {
        let total = s.scores.reduce((sum, x) => sum + x, 0);
        return { name: s.name, average: total / s.scores.length };
    });

    console.log("Q7:", result);
}

// Q8: Repeated sum of digits
function q8() {
    function repeatedSum(num) {
        while (num > 9) {
            num = num.toString().split("").reduce((s, d) => s + Number(d), 0);
        }
        return num;
    }

    console.log("Q8:", repeatedSum(456));
}

// Q9: Count words
function q9() {
    function countWords(str) {
        return str.trim().split(/\s+/).length;
    }

    console.log("Q9:", countWords("This is a sample paragraph for counting words."));
}

// Q10: Reverse string
function q10() {
    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    console.log("Q10:", reverseString("Hello"));
}

// Q11: Average from object
function q11() {
    const data = {
        student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
        student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
        student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    };

    let result = {};

    for (let student in data) {
        let marks = Object.values(data[student]);
        let avg = marks.reduce((sum, m) => sum + m, 0) / marks.length;

        result[student] = { average: Math.round(avg) };
    }

    console.log("Q11:", result);
}


// ================= CALL ALL FUNCTIONS =================
q1();
q2();
q3();
q4();
q5();
q6();
q7();
q8();
q9();
q10();
q11();