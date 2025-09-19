const containerCells = document.getElementById("container-cells")
let overlay = document.getElementById("overlay")
let message = document.getElementById("message")
let restart = document.getElementById("restart")
let easy = document.getElementById("easy")
let medium = document.getElementById("medium")
let hard = document.getElementById("hard")
let difficulty, startTime, endTime, differenceTime = null;
let totalCells, msTime= 0;





function startGame(difficulty){

if(difficulty === "easy") totalCells = 100
else if(difficulty === "medium") totalCells = 81
else if(difficulty === "hard") totalCells = 49

startTime = Date.now()


    let bombs = []
    
    while (bombs.length < 16) {
        let n = Math.floor(Math.random() * totalCells);
        if (!bombs.includes(n)) {
            bombs.push(n)
        }
    }
    console.log(bombs)
    
    
    
    
    
    let numbers = [];
    
    while (numbers.length < totalCells) {
        let n = Math.floor(Math.random() * totalCells) + 1;
        if (!numbers.includes(n)) {
            numbers.push(n)
        }
    }
    console.log(numbers)
    
    
    
    
    let score = 0;
    let counter = document.getElementById("counter")
    let gameOver = false;
    
    for (let i = 0; i < numbers.length; i++) {
        //let numeroCella = numbers[i];
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
                    if (difficulty === "hard" && score >= 20) {
                        gameOver = true;
                        message.innerText = " Complimenti, hai raggiunto il punteggio di 20 celle sicure🎉! HAI VINTO🎉! "
                        overlay.style.display = 'flex';
                        endTime = Date.now()
                        differenceTime = endTime - startTime
                        msTime = Math.floor(differenceTime / 1000); 
    
                    }else if(difficulty === "medium" && score >= 30) {
                        gameOver = true;
                        message.innerText = " Complimenti, hai raggiunto il punteggio di 30 celle sicure🎉! HAI VINTO🎉! "
                        overlay.style.display = 'flex';
                        endTime = Date.now()
                        differenceTime = endTime - startTime
                        msTime = Math.floor(differenceTime / 1000);  
    
                    }
                    else if(difficulty === "easy" && score >= 40) {
                        gameOver = true;
                        message.innerText = " Complimenti, hai raggiunto il punteggio di 40 celle sicure🎉! HAI VINTO🎉! "
                        overlay.style.display = 'flex';
                        endTime = Date.now()
                        differenceTime = endTime - startTime
                        msTime = Math.floor(differenceTime / 1000); 
    
                    }
                }
            }
        })
        containerCells.appendChild(div)
    }
}



restart.addEventListener("click", () => {
    overlay.style.display = "none";
    containerCells.innerHTML = ""
    counter.innerHTML = ""
    startGame(difficulty)
})


easy.addEventListener("click", () => {
    difficulty = "easy";
    containerCells.innerHTML = ""
    startGame(difficulty)
})

medium.addEventListener("click", () => {
    difficulty = "medium";
    containerCells.innerHTML = ""
    startGame(difficulty)
})

hard.addEventListener("click", () => {
    difficulty = "hard";
    containerCells.innerHTML = ""
    startGame(difficulty)
})









/*function verifyValue(arr, num) {
    if (arr.includes(num)) {
        return true
    } else {
        return false
    }
}
verifyValue(numbers, 70)
*/




