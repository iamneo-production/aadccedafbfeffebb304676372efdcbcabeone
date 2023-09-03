let current='X';
let gameboard=['','','','','','','','',''];
let gameactive=true;
const cells=document.querySelectorAll('.cell');
const resetbutton=document.getElementById('reset-button');
const resultmessage=document.getElementById('result-message');
function handlecellclick(event){
    const cell=event.target;
    const cellindex=parseInt(cell.id('-')[1]);
    if(gameboard[cellindex]==''&&gameactive){
        cell.textcontent=currentplayer;
        gameboard[cellindex]=currentplayer;
        if(checkwin()){
            gameactive=false;
            resultmessage.textcontent='Player ${currentplayer} wins!';
            enableresetbutton();
        }
        else if(checkdraw()){
            gameactive=false;
            resultmessage.textcontent="It's a draw!";
            enableresetbutton();
        }
        else{
            currentplayer=currentplayer=='X'
        }
    }
}