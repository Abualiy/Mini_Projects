const canvas = document.getElementById('sketchBoard');
const color = document.getElementById('color')
const pencil = document.getElementById('pencil')
const eraser = document.getElementById('eraser')
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth - 80;
canvas.height = window.innerHeight - 150;

let isDrawing = false;
let isEraser = false;
var col = '#000'



// Pencil settings
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.lineCap = 'round';

// Track mouse position
let lastX = 0;
let lastY = 0;

function startDrawing(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function draw(e) {
    if (!isDrawing) return;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
}

// Toggle pencil/eraser
color.addEventListener('change', (e) => {
    col = e.target.value;
    canvas.style = " cursor: crosshair;"
    pencil.classList.add('active')
    eraser.classList.remove('active')
    isEraser = false;
    ctx.strokeStyle = col;
    ctx.lineWidth = 2;
})

pencil.addEventListener('click', () => {
    canvas.style = " cursor: crosshair;"
    pencil.classList.add('active')
    eraser.classList.remove('active')
    isEraser = false;
    ctx.strokeStyle = col;
    ctx.lineWidth = 2;
});

eraser.addEventListener('click', () => {
    canvas.style = "cursor: url('./icons/eraser-cursor.svg') 0 0, auto;"
    eraser.classList.add('active')
    pencil.classList.remove('active')
    isEraser = true;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 30;
});

// Clear canvas
document.getElementById('clear').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);
