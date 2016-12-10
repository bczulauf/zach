const canvasElem = document.getElementById("game-board");
const canvas = canvasElem.getContext("2d");
canvasElem.height = 480;
canvasElem.width = 320;
const color = "lime";
let width = 50;
let height = 50;
let x = 20;
let y = 20;

canvas.fillStyle = color;
canvas.fillRect(x, y, width, height);

function clear() {
    canvas.clearRect(x, y, width, height);
}

function draw() {
    canvas.fillStyle = color;
    canvas.fillRect(x, y, width, height);
}

function update(newX, newY) {
    clear();
    x += newX;
    y += newY;
    draw();
}

document.onkeydown = (evt) => {
    const keyCode = evt.keyCode;
    
    if (keyCode === 37) {
        update(-5, 0);
    } else if (keyCode === 38) {
        update(0, -5);
    } else if (keyCode === 39) {
        update(5, 0);
    } else if (keyCode === 40) {
        update(0, 5);
    }
}