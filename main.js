const containerCells = document.getElementById("container-cells")
let overlay = document.getElementById("overlay")
let message = document.getElementById("message")
let restart = document.getElementById("restart")
function startGame(){

    let bombs = []
    
    while (bombs.length < 16) {
        let n = Math.floor(Math.random() * 49);
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
    
    
    
    
    let score = 0;
    let counter = document.getElementById("counter")
    let gameOver = false;
    
    for (let i = 0; i < numbers.length; i++) {
        let numeroCella = numbers[i];
        let div = document.createElement("div");
        div.classList.add("cell")
        div.innerHTML = numbers[i];
    
        div.addEventListener("click", () => {
            if (gameOver) return;
            if (div.classList.contains("clicked")) {
                return;
            } else {
                div.classList.add("clicked")
    
    
                if (bombs.includes(i)) {
                    div.innerHTML = "💣"
                    div.classList.add("bomba")
                    gameOver = true;
                    message.innerText = "BOOOOOMMM.. Ops hai fatto esplodere una bomba💣! HAI PERSO!"
                    overlay.style.display = 'flex';
    
    
    
                    for (let i = 0; i < bombs.length; i++) {
                        let bomba = bombs[i]
    
                        containerCells.children[bomba].innerHTML = "💣"
                        containerCells.children[bomba].classList.add("bomba")
    
                    }
                    for (let j = 0; j < containerCells.children.length; j++) {
                        containerCells.children[j].classList.add("disabled");
                    }
                } else {
                    score++;
                    counter.innerHTML = `${"Contatore:" + score}`
                    if (score >= 20) {
                        gameOver = true;
                        message.innerText = " Complimenti, hai raggiunto il punteggio di 20 celle sicure🎉! HAI VINTO🎉! "
                        overlay.style.display = 'flex';
    
                    }
                }
            }
        })
        containerCells.appendChild(div)
    }
}

startGame();

restart.addEventListener("click", () => {
    overlay.style.display = "none";
    containerCells.innerHTML = ""
    startGame()
})









function verifyValue(arr, num) {
    if (arr.includes(num)) {
        return true
    } else {
        return false
    }
}
verifyValue(numbers, 70)





