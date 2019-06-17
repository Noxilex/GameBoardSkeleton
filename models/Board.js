class Board {
    /**
     * 
     * @param {*} height Number of cells vertically 
     * @param {*} width Number of cells horizontally
     */
    constructor(height, width){
        this.height = height;
        this.width = width;
        this.cells = [];
    }

    /**
     *      x
     *   |---->
     * y |---->
     *   v
     */
    setup(){
        //Resets cell array
        this.cells = [];

        //Populate it with Cell objects
        for (let y = 0; y < this.height; y++) {
            let line = [];
            for (let x = 0; x < this.width; x++) {
                line.push(new Cell(x,y));        
            }
            this.cells.push(line);
        }
    }

    /**
     * Returns the cell at pos {x,y}
     * @param {*} x 
     * @param {*} y 
     */
    getCell(x,y){
        if(y >= 0 && y < this.height && x >= 0 && x <= this.width){
            return this.cells[y][x];
        }
    }

    /**
     * Draw function
     */
    draw(ctx, cellSize){
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let cell = this.getCell(x,y);
                ctx.fillRect(cell.position.x*cellSize,cell.position.y*cellSize,cellSize, cellSize);
            }
        }
    }
}