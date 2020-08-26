/***** Deliverable 1 *****/
const header = document.querySelector("h1")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red"

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)


let playerContainer = document.getElementsByClassName('player-container')[0]
for(let i = 0; i < PLAYERS.length; i++){
    let playerDiv = document.createElement('DIV')
    console.log(playerDiv)
    
    playerDiv.className = 'player'
    playerDiv.setAttribute('data-number', PLAYERS[i].number)
    
    let info = 
        `<h3> ${PLAYERS[i].name} ${PLAYERS[i].nickname} </h3>`


    playerDiv.innerHTML = info
    playerContainer.appendChild(playerDiv);
}


/***** Deliverable 4 *****/

let player = document.querySelector('[data-number="7"]')
player.remove()