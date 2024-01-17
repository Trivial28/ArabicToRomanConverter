const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");



const arabicToRomanConverter = (number) => {

    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let result = "";

    for (let i in romanNumerals) {
        while (number >= romanNumerals[i]) {
            result += i;
            number -= romanNumerals[i];
        }
    }

    return result;
}

const checkInput = () => {
    const inputInt = parseInt(number.value);

    if (!number.value || number.value <= 0){
        alert("Please enter a valid number");
        return;
    } else if (number.value >= 4000) {
        alert("Please enter a number less than or equal to 3999");
        return;
    }

    output.textContent = arabicToRomanConverter(inputInt);
    number.value = "";
} 

convertBtn.addEventListener("click", checkInput);

number.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkInput();
    }
});