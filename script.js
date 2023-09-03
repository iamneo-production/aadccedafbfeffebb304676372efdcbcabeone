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
            currentplayer=currentplayer=='X' ? '0' : 'X';
            resultmessage.textcontent='Its Player ${currentplayer} turn';
        }
    }
}
function checkwin(){
    const winpatterns=[[0,1,2],[3,4,5],[6,7,8],
                       [0,3,6],[1,4,7],[2,5,8],
                       [0,4,8],[2,4,6]];
    for (let pattern of winpatterns){
        const [a,b,c]=pattern;
        if(gameboard[a] && gameboard[a] == gameboard[b] && gameboard[a] == gameboard[c]){
            return true;
        }
    }
    return false;
}
function checkdraw(){
    return !gameboard.includes('');
}
function enableresetbutton(){
    resetbutton.disabled=false;
}
cells.forEach(cell=> cell.addEventListener('click',handleCellClick));
resetbutton.addEventListener('click',resetgame);
function resetgame(){
    currentplayer='X';
    gameboard=['','','','','','','','',''];
    gameactive=true;
    resultmessage.textcontent=
}