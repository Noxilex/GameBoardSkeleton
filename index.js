//Game board
var board;
var canvas =  document.querySelector("#visible-canvas");
var cellSize = 30;
var hoveredCell;

function setup(){
    //let boardSizeRaw = prompt("Board size: x y");
    
    let boardSizeRaw = "30 30";
    let sizeRaw = boardSizeRaw.split(' ');
    if(sizeRaw.length != 2){
        throw new Error("Wrong number of arguments")
    }else if(!parseInt(sizeRaw[0]) || !parseInt(sizeRaw[1])) {
        throw new Error("Values provided are not numbers")
    }else{
        console.log("All is well");
        canvas.width = cellSize*sizeRaw[0];
        canvas.height = cellSize*sizeRaw[1];
        board = new Board(sizeRaw[0], sizeRaw[1]);
        board.setup();
    }
}

function updateGame(){
    processPlayerInput();
    updateGameLogic();
    draw();
    requestAnimationFrame(updateGame);
}

function processPlayerInput(){

}

function updateGameLogic(){
    
}

function draw(){
    var buffer = document.createElement('canvas');
    var canvas = document.getElementById('visible-canvas');

    buffer.width = canvas.width;
    buffer.height = canvas.height;

    var buffer_ctx = buffer.getContext('2d');
    var ctx = canvas.getContext('2d');

    buffer_ctx.fillStyle = 'darkred';
    board.draw(buffer_ctx, cellSize);

    if(hoveredCell){
        buffer_ctx.strokeStyle = 'black';
        buffer_ctx.strokeRect(hoveredCell.position.x*cellSize, hoveredCell.position.y*cellSize, cellSize, cellSize);
    }

    ctx.drawImage(buffer, 0, 0);
}
setup();
updateGame();

/**
 * Listeners
 */

canvas.addEventListener("mousemove", (event) => {
    hoveredCell = getCellAtMousePos(canvas, event);
 })

 function getCellAtMousePos(canvas, e){
    let mousePos = getMousePos(canvas, e);
    return board.getCell(Math.floor(mousePos.x/cellSize), Math.floor(mousePos.y/cellSize));
 }

 /**
 * Returns mouse position based on canvas & mouse event
 * @param {Canvas} canvas 
 * @param {Event} e 
 */
function getMousePos(canvas, e) {
    let rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    return new Vector(x, y);
}