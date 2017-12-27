//console.log("yo");
var ticTacToe={};

ticTacToe.init=function(){
    ticTacToe.currentPlayer="red";
    ticTacToe.playerIndicator=$(".current-player-indicator");
    ticTacToe.playerIndicator.addClass(ticTacToe.currentPlayer);
    ticTacToe.boxes=$(".box");
    ticTacToe.boxes.on("click", ticTacToe.clickOnBoxes);
};

ticTacToe.clickOnBoxes=function(){
    $(this).addClass(ticTacToe.currentPlayer);
    console.log("box clicked");
}

$(document).ready(function(){
    ticTacToe.init();
});