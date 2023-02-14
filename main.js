const cells = document.querySelectorAll('.cell')
const currentPlayer = document.querySelector('.app-game-current-player')

const rounds = 10;
let turns = 0;

let playerX = true;
let playerO = false;

let checkWinArrX = []
let checkWinArrO = []

currentPlayer.innerHTML = 'Turn X'

const checkX = () => {
    const readValuesFromGame = [...cells].map((item) => checkWinArrX.push(item.innerText))

    if ((checkWinArrX[0] == 'X' && checkWinArrX[1] == 'X' && checkWinArrX[2] == 'X') || 
        (checkWinArrX[3] == 'X' && checkWinArrX[4] == 'X' && checkWinArrX[5] == 'X') ||
        (checkWinArrX[6] == 'X' && checkWinArrX[7] == 'X' && checkWinArrX[8] == 'X') ||
        (checkWinArrX[0] == 'X' && checkWinArrX[3] == 'X' && checkWinArrX[6] == 'X') ||
        (checkWinArrX[1] == 'X' && checkWinArrX[4] == 'X' && checkWinArrX[7] == 'X') ||
        (checkWinArrX[2] == 'X' && checkWinArrX[5] == 'X' && checkWinArrX[8] == 'X') ||
        (checkWinArrX[0] == 'X' && checkWinArrX[4] == 'X' && checkWinArrX[8] == 'X') ||
        (checkWinArrX[2] == 'X' && checkWinArrX[4] == 'X' && checkWinArrX[6] == 'X') 
        ) {
        console.log('X Win!')
        currentPlayer.innerHTML = 'Game Over'
        window.removeEventListener('click', handleClick)
    }
}
const checkO = () => {
    const readValuesFromGame = [...cells].map((item) => checkWinArrO.push(item.innerText))

    if ((checkWinArrO[0] == 'O' && checkWinArrO[1] == 'O' && checkWinArrO[2] == 'O') || 
        (checkWinArrO[3] == 'O' && checkWinArrO[4] == 'O' && checkWinArrO[5] == 'O') ||
        (checkWinArrO[6] == 'O' && checkWinArrO[7] == 'O' && checkWinArrO[8] == 'O') ||
        (checkWinArrO[0] == 'O' && checkWinArrO[3] == 'O' && checkWinArrO[6] == 'O') ||
        (checkWinArrO[1] == 'O' && checkWinArrO[4] == 'O' && checkWinArrO[7] == 'O') ||
        (checkWinArrO[2] == 'O' && checkWinArrO[5] == 'O' && checkWinArrO[8] == 'O') ||
        (checkWinArrO[0] == 'O' && checkWinArrO[4] == 'O' && checkWinArrO[8] == 'O') ||
        (checkWinArrO[2] == 'O' && checkWinArrO[4] == 'O' && checkWinArrO[6] == 'O')       
        ) {
        console.log('O Win!')
        currentPlayer.innerHTML = 'Game Over'
        window.removeEventListener('click', handleClick)
    }
}

const handleClick = (e) => {

    const target = e.target.getAttribute('name')
    console.log(target)

    if ( target ) {
        if ( e.target.innerText != '-') {
            console.log('occupied')
            return
        } else {
            if( playerX ) {
                e.target.innerText = 'X'
            } else {
                e.target.innerText = 'O'
            }
            playerX = !playerX
            playerO = !playerO
            currentPlayer.innerHTML = playerX ? 'Turns X' : 'Turns O'
            checkX()
            checkO()
            console.log(checkWinArrX)
            console.log(checkWinArrO)
            checkWinArrX = []
            checkWinArrO = []
        }
        turns ++
        console.log(turns)
        if ( turns == 9 ) {
            currentPlayer.innerHTML = 'Game Over'
            window.removeEventListener('click', handleClick)
        }
    }
    
    console.log(playerX + ' ' + playerO)
}

window.addEventListener('click', handleClick)