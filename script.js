let winnerMessage=document.getElementById('winner');
let cells=document.getElementsByTagName('td');
let currentPlayer="X";
let count=1;
let gameover=false;
for(var i=0;i<cells.length;i++){
    cells[i].addEventListener("click", function() {
        if(this.textContent!==""|| gameover){
            return;
        }
        
        if ((count%2==0)){
            this.textContent="X";
            this.style.backgroundColor="#25b528";
            currentPlayer="O";
            count++;
            console.log(count);
            checkWinner(cells);
            gameDraw();
        }else{
            this.textContent="O";
            this.style.backgroundColor="#cd1c1c";
            currentPlayer="X";
            count++;
            console.log(count);
            checkWinner(cells);
            gameDraw();
        }
            
        
    });
}
function gameDraw(){
    if((count>9)&&(checkWinner(cells)==false)){
        winnerMessage.textContent="No one is a winner";
    }

}


function checkWinner(board) {
    let winner;
    const wins = [
        [0, 1, 2],  
        [3, 4, 5],  
        [6, 7, 8],  
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]   
    ];
    for (let i = 0; i < wins.length; i++) {
            const [a, b, c] = wins[i];
        if ((board[a].textContent!=='')&& (board[a].textContent == board[b].textContent && board[a].textContent == board[c].textContent)) {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            winnerMessage.textContent=`Player ${currentPlayer} Wins!!`;
            gameover=true;
            winner=true;

        }
    }
    return winner ? true : false;
    
}


function resetGame(){
    console.log(checkWinner(cells));
    currentPlayer='X';
    count=1;
    winnerMessage.textContent='';
    gameover=false;
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
        cells[i].style.background='white';
    }

}






