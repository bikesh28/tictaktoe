
// let cells=document.getElementsByTagName('td');
// let count=1;

// function checkWinner(board) {
//     let win=document.getElementById("winner");
//     const wins = [
//         [0, 1, 2],  
//         [3, 4, 5],  
//         [6, 7, 8],  
//         [0, 3, 6], 
//         [1, 4, 7], 
//         [2, 5, 8], 
//         [0, 4, 8], 
//         [2, 4, 6]   
//     ];
//     for (let i = 0; i < wins.length; i++) {
//             const [a, b, c] = wins[i];
//         if ( board[a] == board[b] && board[a] == board[c]) {
//             win.textContent="You win";
//         }else{
//             win.textContent="No one is winner";
//         }
//     }

// }    

// for(var i=0;i<cells.length;i++){
//     cells[i].addEventListener("click", function() {
//         if(this.textContent!==""){
//             return;
//         }
        
//         if ((count%2==0)){
//             this.textContent="X";
//             this.style.backgroundColor="grey";
//             count++;
//             console.log(count);
//             checkWinner(cells);
//         }else{
//             this.textContent="0";
//             this.style.backgroundColor="brown";
//             count++;
//             console.log(count);
//             checkWinner(cells);
//         }
           
        
//     });
// }




