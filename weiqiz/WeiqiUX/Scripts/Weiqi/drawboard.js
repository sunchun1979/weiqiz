function resize_canvas() {
    canvas = document.getElementById("canvas");
    canvasdiv = document.getElementById("canvasdiv");
    
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
}
window.addEventListener('resize', resize_canvas, false);
