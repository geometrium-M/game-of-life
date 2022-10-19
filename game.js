class Game {

    board;
    timer;

    constructor() {
        this.board = new Board(10);
        this.init()
    }

    init() {
        document.getElementById('btn').addEventListener('click', ()=> this.start())
    }

    start() {
       this.timer = setInterval(() => this.board.nextGeneration(), 500) 
       
    }

    stop() {
        clearInterval(this.timer)
    }
}

   
