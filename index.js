let homeScore = 0
let awayScore = 0

let scoreH= document.getElementById('homeScore')
let scoreA= document.getElementById('awayScore')

function add1PointHome() {
    homeScore += 1
    let scoreH = document.getElementById('homeScore').textContent = homeScore
 }

function add2PointsHome() {
    homeScore += 2
    document.getElementById('homeScore').textContent = homeScore
  
}

function add3PointsHome() {
    homeScore+=3   
    document.getElementById('homeScore').textContent = homeScore

}

function add1PointAway() {
    awayScore+=1 
    document.getElementById('awayScore').textContent = awayScore
   
}

function add2PointsAway() {
    awayScore+=2
    document.getElementById('awayScore').textContent = awayScore    
}

function add3PointsAway() {
    awayScore+=3
    document.getElementById('awayScore').textContent = awayScore
      
}

function reset() {
    homeScore = 0
    awayScore = 0
    document.getElementById('homeScore').textContent = homeScore
    document.getElementById('awayScore').textContent = awayScore
}