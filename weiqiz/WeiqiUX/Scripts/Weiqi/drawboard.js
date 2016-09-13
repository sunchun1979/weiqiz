function draw() {
    var canvas = document.getElementById("canvas");
    var context2d = canvas.getContext('2d');
    var canvasdiv = document.getElementById("canvasdiv");
    
    var wHeight = window.innerHeight;
    var wWidth = window.innerWidth;
    var offsets = canvasdiv.getBoundingClientRect();

    var modifiedHeight = wHeight - 2 * offsets.top - 50;
    var modifiedWidth = wWidth - 2 * offsets.left;
    var drawSize = Math.min(modifiedHeight, modifiedWidth);

    //canvasdiv.height = wHeight;
    //drawsize = Math.min(width, height)*0.9;
    canvas.width = drawSize;
    canvas.height = drawSize;

    context2d.strokeStyle = '#000000';
    context2d.moveTo(0, 0);
    context2d.lineTo(100, 100);
    context2d.lineWidth = 10;
    context2d.stroke();

    var cellsize = drawSize / 25;

}

window.addEventListener('resize', draw, false);
