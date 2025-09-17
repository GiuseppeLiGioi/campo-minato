let numbers = [];

while (numbers.length < 49) {
    let n = Math.floor(Math.random() * 49) + 1;
    if(!numbers.includes(n)){
        numbers.push(n)
    }
}
console.log(numbers)



const containerCells = document.getElementById("container-cells")

for(let i = 0; i < numbers.length; i++){
    let div = document.createElement("div");
    div.classList.add("cell")
    div.innerHTML = numbers[i];

    div.addEventListener("click", () => {
        if(div.classList.contains("clicked")){
            return;
        }else{
            div.classList.add("clicked")
        }
    })
    containerCells.appendChild(div)
}



function verifyValue(arr, num){
    if(arr.includes(num)){
        console.log("trovato")
    }else{
        console.log("Non trovato")
    }
}
verifyValue(numbers, 70)



