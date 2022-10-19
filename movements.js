class MovementService {
    aroundPositions;
    aroundCells;
    aliveListCells;

   static newArr =[];

    constructor(size) {
        this.size = size;
    }


    getAroundPositions(x,y) {
        let arr=[];

        const max = this.size;
    
        if ( (x - 1 >= 0) && (y - 1 >= 0)) {
            arr.push({x: x - 1, y: y - 1})
        }

        if ( (x == x) && (y - 1 >= 0) ) {
            arr.push({x: x, y: y-1})
        }
    
        if ( (x + 1 < max ) && (y - 1 >= 0)) {
            arr.push({x: x + 1, y: y - 1})
        }
    
        if ( (x - 1 >= 0) && (y == y)) {
            arr.push({x: x - 1, y: y})
        }
    
        if ((x + 1 < max) && (y == y)) {
            arr.push({x: x + 1, y: y})
        }
    
        if ((x - 1 >=0) && (y + 1 < max)) {
            arr.push({x: x - 1, y: y + 1})
        }
    
        if ((x == x) && (y + 1 < max)) {
            arr.push({x: x, y: y + 1})
        } 
    
        if ((x + 1 < max) && (y + 1 < max)) {
            arr.push({x: x + 1, y: y + 1})
        }

       
       return arr;
    }

    getAroundCells(cell) {
        this.aroundCells = this.getAroundPositions(cell.x, cell.y).map(cell => board.getCell(cell.x,cell.y))
       
        console.log(this.aroundCells)

        this.aliveListCells = this.aroundCells.filter(function(el) {
        return el.alive == true
      });

     
        console.log(this.aliveListCells)


        this.stateCells(cell)
    
    }
    

 stateCells(cell) {

        if (cell.alive === true) {
            if (this.aliveListCells.length === 2 || this.aliveListCells === 3) {
               MovementService.newArr.push(cell)
            }
        }

        if (cell.alive === false) {
            if (this.aliveListCells.length === 3) {
               MovementService.newArr.push(cell)
            }
        }

    }

}

    

 
   




    

    

    

