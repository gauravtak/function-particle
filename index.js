const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');
const originX = 0;
const originY = canvas.height / 2;

ctx.translate(originX, originY)

let x = 0;
let y = 0;
let amplitude = 50;
let frequency = 0.05;
let dx = 2;

function draw() {
    // ctx.clearRect(-canvas.width, -canvas.height/2, canvas.width*2, canvas.height);

    // you need to change this to a function instead 
    y = amplitude * Math.sin(x * frequency);


    ctx.beginPath()
    ctx.arc(x, y, 4, 0, Math.PI * 2); // (x, y, radius, startAngle, endAngle)
    ctx.fillStyle = "red";
    ctx.fill()


    x += dx;

    if (x > canvas.width) {
        x=0;
    }

    requestAnimationFrame(draw)

}

draw()

