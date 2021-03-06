function canvasSupport () {
    return Modernizr.canvas;
}

//ELEMENTS/VARIABLES
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

//to make the canvas the size of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//FUNCTIONS
//bottom right
ctx.beginPath();
ctx.arc(600,400,30,0,2*Math.PI);
ctx.stroke();

//bottom left
ctx.beginPath();
ctx.arc(150,400,30,0,2*Math.PI);
ctx.stroke();

//top
ctx.beginPath();
ctx.arc(350,120,30,0,2*Math.PI);
ctx.stroke();

ctx.font = "100% sans-serif";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText("Development", canvas.width/3, canvas.height/3); 
ctx.fillText("Design", canvas.width/5, canvas.height/5);
ctx.fillText("Art", canvas.width/7, canvas.height/7); 
