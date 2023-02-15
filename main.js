const cells = document.querySelectorAll('.cell')
const currentPlayer = document.querySelector('.app-game-current-player')
const winnerText = document.querySelector('.app-winner')

const rounds = 10;
let turns = 0;

let playerX = true;
let playerO = false;

let checkWinArrX = []
let checkWinArrO = []

currentPlayer.innerHTML = 'Turn X'
winnerText.innerHTML = ''

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
        winnerText.innerHTML = 'Winner is X'
        currentPlayer.innerHTML = 'Game Over'
        window.removeEventListener('click', handleClick)
        setTimeout(() => {
            resetGame()
        }, 3000)
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
        winnerText.innerHTML = 'Winner is O'
        currentPlayer.innerHTML = 'Game Over'
        window.removeEventListener('click', handleClick)
        setTimeout(() => {
            resetGame()
        }, 3000)
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
                //e.target.classList.remove('o')
                e.target.classList.add('x')
                // e.target.style.backgroundColor = 'yellow'
                // e.target.style.color = 'blue'
            } else {
                e.target.innerText = 'O'
                //e.target.classList.remove('x')
                e.target.classList.add('o')
                // e.target.style.backgroundColor = 'blue'
                // e.target.style.color = 'yellow'
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
            resetGame()
        }
    }
    console.log(playerX + ' ' + playerO)
}

const resetGame = () => {
    [...cells].map((item) => {
        item.innerText = '-'
        item.classList.remove('o')
        item.classList.remove('x')
        // item.style.backgroundColor = 'rgb(255, 255, 255)'
        // item.style.color = 'black'
    })
    winnerText.innerHTML = ''
    currentPlayer.innerHTML = 'Turn X'
    checkWinArrX = []
    checkWinArrO = []
    turns = 0
    window.addEventListener('click', handleClick)
}

window.addEventListener('click', handleClick)
