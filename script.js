
const displayScreen = document.querySelector("#displayScreen");

// DELETE ALL
const deleteAll = document.querySelector("#deleteAll");
deleteAll.addEventListener("click", () => {
    displayScreen.value = "";
});

const delete1 = document.querySelector("#delete");
const divide = document.querySelector("#divide");

// SEVEN
const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    displayScreen.value += "7";
});

// EIGHT
const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    displayScreen.value += "8";
})