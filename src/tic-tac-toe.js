class TicTacToe {

    constructor() {
        this.field = new Array();
        for(let i=0; i < 3; i++){
            this.field[i] = new Array();
            for(let j = 0; j < 3; j++){
                this.field[i][j] = null;
            }
        }
        this.curPlayer = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.curPlayer;
    }

    noMoreTurns() {
        for(let i=0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(this.field[i][j] == null)
                    return false;
            }
        }
        return true;
    }
    nextTurn(rowIndex, columnIndex) {

        if(this.field[rowIndex][columnIndex] == null) {
            this.field[rowIndex][columnIndex] = this.curPlayer;
            if(this.curPlayer=="x")
                this.curPlayer="o";
            else
                this.curPlayer="x";
        }
    }

    isFinished() {
        if(this.isDraw()|| this.getWinner()!=null)
            return true;
        return false;
    }

    getWinner() {
        for(let i=0; i < 3; i++){
            let checkRow = true, checkCol = true;
            let symbolRow = this.field[i][0];
            let symbolCol = this.field[0][i];
            for(let j=1; j < 3; j++){

                if(symbolRow != this.field[i][j]){
                    checkRow = false;
                }
                if(symbolCol != this.field[j][i]){
                    checkCol = false;
                }
            }
            if(checkRow == true) {
                return symbolRow;
            }
            if(checkCol == true) {
                return symbolCol;
            }
        }
        let checkMain = true,
            checkSec = true;
        let symbolMain = this.field[0][0], symbolSec = this.field[0][this.field.length - 1];

        for(let i=0; i < 3; i++){
            let field;
            if(symbolMain != this.field[i][i])
                checkMain = false;

            if(symbolSec != this.field[i][this.field.length-1-i])
                checkSec = false;
        }
        if(checkSec == true)
            return symbolSec;
        if(checkMain == true)
            return symbolMain;
        return null;

    }

    isDraw() {

        if(this.noMoreTurns() && this.getWinner() == null)
            return true;
        return false;

    }
    getFieldValue(rowIndex, colIndex) {

        return this.field[rowIndex][colIndex];
    }
}
module.exports = TicTacToe;
