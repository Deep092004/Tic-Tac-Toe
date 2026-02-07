let turn = 'O';
let total_turn=0;
let winner= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const board_array=new Array(9).fill("E");

function checkWinner(){
    for(let [index0,index1,index2] of winner ){
        if(board_array[index0]!="E" && board_array[index0]==='O' && board_array[index1]==='O' && board_array[index2]==='O'){
           console.log("Winner is O");
            return 1;
        }
        return 0;
        
    }
}

//print ho 
const printer= (event) => {
const element=event.target;
if(board_array[element.id]==="E")
{
    total_turn++;
if(turn==='O'){
 element.innerText='O';
 board_array[element.id]="O";
 if(checkWinner()){
    document.getElementById("winningMessage").innerText="Winner is O";
    board.removeEventListener('click', printer);
    return;
 }
 turn='X';
}
else{
 element.innerText='X';
 board_array[element.id]="X";
  if(checkWinner()){
    document.getElementById("winningMessage").innerText="Winner is X";
    board.removeEventListener('click', printer);
    return;
 }
 turn='O';
}
if(total_turn===9){
    document.getElementById("winningMessage").innerText="It's a Draw";
    board.removeEventListener('click', printer);
}
}  
}
const board = document.querySelector('.board');
board.addEventListener('click', printer);

const restartButton = document.getElementById('restartButton');
restartButton.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    Array.from(cells).forEach((value) => {
        value.innerText="";
    });
    turn='O';
    total_turn=0;
    board_array.fill("E");
    document.getElementById("winningMessage").innerText="";
    board.addEventListener('click', printer);
});
