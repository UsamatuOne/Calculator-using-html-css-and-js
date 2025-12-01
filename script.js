// CLEAR SCREEN 
const displayScreen = document.querySelector("#displayScreen");

// DELETE ALL
const deleteAll = document.querySelector("#deleteAll");
deleteAll.addEventListener("click", () => {
    displayScreen.value = "";
});

// DELETE ONE NUMBER
const delete1 = document.querySelector("#delete");
delete1.addEventListener("click", () => {
    displayScreen.value = displayScreen.value.toString().slice(0, -1);
});

// DOT
const dot = document.querySelector("#dot");
dot.addEventListener("click", () => {
    displayScreen.value += ".";
});

// DIVIDE
const divide = document.querySelector("#divide");
divide.addEventListener("click", () => {
    displayScreen.value += "/";
})

// SEVEN
const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    displayScreen.value += "7";
});

// EIGHT
const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    displayScreen.value += "8";
});

// NINE
const nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
    displayScreen.value += "9";
});

// TIMES
const times = document.querySelector("#times");
times.addEventListener("click", () => {
    displayScreen.value += "*";
});

// FOUR
const four = document.querySelector("#four");
four.addEventListener("click", () => {
    displayScreen.value += "4";
});

// FIVE
const five = document.querySelector("#five");
five.addEventListener("click", () => {
    displayScreen.value += "5";
});

// SIX
const six = document.querySelector("#six");
six.addEventListener("click", () => {
    displayScreen.value += "6";
});

// PLUS
const plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
    displayScreen.value += "+";
});

// ONE
const one = document.querySelector("#one");
one.addEventListener("click", () => {
    displayScreen.value += "1";
});

// TWO
const two = document.querySelector("#two");
two.addEventListener("click", () => {
    displayScreen.value += "2"
});

// THREE
const three = document.querySelector("#three");
three.addEventListener("click", () => {
    displayScreen.value += "3";
});

// MINUS
const minus = document.querySelector("#minus");
minus.addEventListener("click", () => {
    displayScreen.value += "-";
});

// ZERO 2
const zero2 = document.querySelector("#zero2");
zero2.addEventListener("click", () => {
    displayScreen.value += "00";
});

// ZERO 1
const zero1 = document.querySelector("#zero1");
zero1.addEventListener("click", () => {
    displayScreen.value += "0";
});

// EQUAL
const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
    displayScreen.value = eval(displayScreen.value);
});
