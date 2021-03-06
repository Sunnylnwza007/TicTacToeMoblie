'use strict';
var round = 1;
var prompt = require('prompt')
var Player = require('./player.js')
const firstPlayer =  'O'
const getBoard = () => {
    return {
        1: '1', 2: '2', 3: '3',
        4: '4', 5: '5', 6: '6',
        7: '7', 8: '8', 9: '9'
    }
}

class TicTacToe {
    constructor() {
        this.winningLines = [
            [1, 2, 3], [4, 5, 6], [7, 8, 9],
            [1, 5, 9], [3, 5, 7],
            [1, 4, 7], [2, 5, 8], [3, 6, 9]
        ];

        this.board = getBoard()

        this.currentPlayer = firstPlayer

        this.players = {
            'O': new Player("Tu"),
            'X': new Player("Pravit"),
        }
    }

    start() {
        this.printBoard()
        prompt.start()
        
        prompt.get(['location'], (err, result) => { // arrow function callback function
            // console.log(result.location);
            if (this.checkLoca(result.location)){
            this.setBoard(result.location);
            if (this.checkWin()) {
                this.printBoard()
                console.log(` ${this.currentPlayer} | ${this.players[this.currentPlayer].name} Win`)
                return
            } else if (this.checkDraw()) {
                this.printBoard()
                console.log("Draw")
                return
            }else {
                this.switchPlayer();
            }
            round++;
            this.start()
            }else{
                this.start()
            }
        
    });
        
    }
    checkLoca(location){
        if (this.board[location]!= 'X' && this.board[location]!= 'O'){
            return true;
        }else{
            return false;
        }
        
    }

    setBoard(location) {
        this.board[location] = this.currentPlayer
    }


    switchPlayer() {
        if (this.currentPlayer === 'X') {
            this.currentPlayer = 'O'
        } else {
            this.currentPlayer = 'X'
        }
    }
    checkDraw(){
        if (round === 9 ){
            return true;
        }
        return false;
    }

    checkWin() {
        let checker = 0;
        for(let i=0; i < this.winningLines.length; i++) {
            checker = 0;
            for (let j = 0; j < this.winningLines[i].length; j++) {
                if (this.board[this.winningLines[i][j]] === this.currentPlayer) {
                  checker++;
                }
                if (checker === 3) {
                    return true;
                } 
            }
        }
        return false;
    }

    printBoard() {
        console.log(`| ${this.board[1]} | ${this.board[2]} | ${this.board[3]} |`)
        console.log(`| ${this.board[4]} | ${this.board[5]} | ${this.board[6]} |`)
        console.log(`| ${this.board[7]} | ${this.board[8]} | ${this.board[9]} |`)
    }
}

let game = new TicTacToe()
game.start()