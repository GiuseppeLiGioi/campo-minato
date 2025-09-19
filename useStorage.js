function saveBestTime(level, time){
let savedTime = localStorage.getItem("bestTime_" + level)

if(!savedTime || time < savedTime){
  localStorage.setItem("bestTime_" + level, time)
}
}


function getBestTime(level){
 let bestTime = localStorage.getItem("bestTime_" + level) || null  
 return bestTime
}