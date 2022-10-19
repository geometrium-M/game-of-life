class Cell {
    x;
    y;
    alive = false;
    htmlElement;


    constructor(x,y) {
        this.x = x;
        this.y = y;

        this.createView()   
        
    }

    createView() {
        this.htmlElement = document.createElement('div');
        this.htmlElement.classList.add('cell')
        this.htmlElement.addEventListener('click', ()=> {
            this.alive = !this.alive;
            this.updateView()
        })
        document.querySelector('#game').append(this.htmlElement);
    }

    setAliveParam(isAlive) {
        this.alive = isAlive;
        this.updateView()
    }

    die() {
        this.alive = false;
        this.updateView()
    }

    alive() {
        this.alive = true;
        this.updateView()
    }

    updateView() {
        if (this.alive) {
            this.htmlElement.style.backgroundColor = 'black';
        } else {
            this.htmlElement.style.backgroundColor = 'white';
        }
    }
}