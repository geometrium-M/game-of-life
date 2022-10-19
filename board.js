class Board {
    cells = [];
    htmlElement;

    constructor(size) {
      this.size = size;
      this.createView();
      this.createCells(size);
    }

    createCells(size) {
       
      for (let y=0; y< size; y++) {
        for (let x=0; x< size; x++) {
          const cell = new Cell(x,y)
          this.cells.push(cell)
        }
      }
    }

    createView() {
        this.htmlElement = document.createElement('div');
        document.body.prepend(this.htmlElement);
        this.htmlElement.setAttribute('id','game');
        this.htmlElement.style.width = this.size * 20 + 'px';
        this.htmlElement.style.height = this.size * 20 + 'px'; 
    }

    getCell(x,y) {
        return this.cells.find(
            cell => (cell.x == x && cell.y == y)
        )

    }

    nextGeneration(){
      const gen = this.cells.map(cell => {
        return {
          x: cell.x,
          y: cell.y,
          alive: cell.alive
        }
      })
      console.log(gen)

      const nextGen = this.calc(gen)
      console.log(nextGen)

      nextGen.forEach( (el, i) => {
        this.cells[i].setAliveParam(el.alive);
      })
    }

    calc(gen) {
      const nextGen = gen.map(el => {
        const aroundCells = this.getAroundCells(el.x, el.y).filter(el=>!!el);
        console.log(aroundCells)
        const nrAlive = aroundCells
        .reduce((sum, el)=>{
          return el.alive ? ++sum : sum;
        }, 0)
        console.log(aroundCells, nrAlive);

        let alive;

        if ( el.alive && (nrAlive >= 2 && nrAlive <= 3) ) {
          alive = true;
        }

        if ( el.alive && (nrAlive < 2 || nrAlive > 3 ) ) {
          alive = false;
        }

        if ( !el.alive && nrAlive === 3 ) {
          alive = true;
        }

        return {
          x: el.x,
          y: el.y,
          alive: alive
        }
      })
      console.log(nextGen); 
      return nextGen;
     

    
    }

    getAroundCells(x,y) {
      return [
        this.getCell(x-1, y-1),
        this.getCell(x, y-1),
        this.getCell(x+1, y-1),
        this.getCell(x-1, y),
        this.getCell(x+1, y),
        this.getCell(x-1, y+1),
        this.getCell(x, y+1),
        this.getCell(x+1, y+1),
      ]
    }

    

    
}