
let rounds = [5, 5, 3, 3, 2];
let colors = ['#ba4545', '#ce3131', '#e21d1d', '#ff0000', '#4e0000' ];
 
// need to create the ball function 
let Ball = {
    new: function (incrementedSpeed) {
        return {
            width: 18,
            height: 18,
            x: (this.canvas.width / 2) - 9,
            y: (this.canvas.height / 2) - 9,
            moveX: DIRECTION.IDLE,
            moveY: DIRECTION.IDLE,
            speed: incrementedSpeed || 7 
        };
    }
};
 
// Need to create the 2 lines the go up and down
let Ai = {
    new: function (side) {
        return {
            width: 18,
            height: 180,
            x: side === 'left' ? 150 : this.canvas.width - 150,
            y: (this.canvas.height / 2) - 35,
            score: 0,
            move: DIRECTION.IDLE,
            speed: 8
        };
    }
};
 
// Tomorrow: need to create the game frame and add the ball and lines that go up and down in it.
