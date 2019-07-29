var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d')


//face
ctx.beginPath();
ctx.arc(220,208,130 , 0, Math.PI*2, false);
ctx.fillStyle = "#fbe939";
ctx.fill();
ctx.closePath();


var eyeSize = 20;
//eyes
ctx.beginPath();
ctx.arc(150,151,eyeSize , 0, Math.PI*2, false);
ctx.arc(300,142,eyeSize , 0, Math.PI*2, false);
ctx.fillStyle = "#2d2d29";
ctx.fill();
ctx.closePath();

//mouth

ctx.beginPath();
ctx.arc(250,240,45 , 0, Math.PI*2, false);
ctx.fillStyle = "#f44240";
ctx.fill();
ctx.closePath();



