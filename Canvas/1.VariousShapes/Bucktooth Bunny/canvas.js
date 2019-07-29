var c = document.getElementById("myCanvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
var ctx = c.getContext("2d");

//face
ctx.beginPath();
ctx.arc(c.width/2, c.height/2, 50, 0, 2 * Math.PI);
ctx.strokeStyle = "black";
ctx.stroke();
ctx.fillStyle = "white";
ctx.fill();


//eye
var leftEye = c.width/2 - 20;
var rightEye = c.width/2 + 20;
var eyeHeight = c.height/2 - 20;
var eyeSize = 5;
ctx.beginPath();
ctx.arc(leftEye,eyeHeight,eyeSize , 0, Math.PI*2, false);
ctx.arc(rightEye,eyeHeight,eyeSize , 0, Math.PI*2, false);
ctx.fillStyle = "#2d2d29";
ctx.fill();
ctx.closePath();

//mouth
ctx.beginPath();
ctx.moveTo((c.width/2)-30, (c.height/2)+20);
ctx.lineTo((c.width/2)+30, (c.height/2)+20);
ctx.stroke();
ctx.closePath();

// teeth
ctx.beginPath();
ctx.strokeRect((c.width/2)-7.5, (c.height/2)+20, 10, 20);
ctx.strokeRect((c.width/2)+2.5, (c.height/2)+20, 10, 20);
ctx.closePath();

// ear
ctx.beginPath();
ctx.ellipse((c.width/2)+50, (c.height/2)-60, 20, 60, 0, 0, Math.PI*2);
ctx.strokeStyle = "black";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.ellipse((c.width/2)-50, (c.height/2)-60, 20, 60, 0, 0, Math.PI*2);
ctx.strokeStyle = "black";
ctx.stroke();
ctx.closePath();
