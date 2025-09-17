let bombs = []

while (bombs.length < 16) {
    let n = Math.floor(Math.random() * 49) + 1;
    if (!bombs.includes(n)) {
        bombs.push(n)
    }
}
console.log(bombs)





let numbers = [];

while (numbers.length < 49) {
    let n = Math.floor(Math.random() * 49) + 1;
    if (!numbers.includes(n)) {
        numbers.push(n)
    }
}
console.log(numbers)



const containerCells = document.getElementById("container-cells")

let score = 0;
let counter = document.getElementById("counter")
let gameOver = false;

for (let i = 0; i < numbers.length; i++) {
    let numeroCella = i;
    let div = document.createElement("div");
    div.classList.add("cell")
    div.innerHTML = numbers[i];

    div.addEventListener("click", () => {
        if (div.classList.contains("clicked")) {
            return;
        } else {
            div.classList.add("clicked")


            if (verifyValue(bombs, numeroCella)) {
                div.innerHTML = "💣"
                div.classList.add("bomba")
                gameOver = true;
            } else {
                score++;
                counter.innerHTML = `${"Contatore:" + score}`
            }
        }
    })
    containerCells.appendChild(div)
}



function verifyValue(arr, num) {
    if (arr.includes(num)) {
        return true
    } else {
        return false
    }
}
verifyValue(numbers, 70)





