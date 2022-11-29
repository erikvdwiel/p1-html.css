var mijnObject;
 
function startCanvas() {
    plaatsCanvas.start();
    mijnObject = new component(30, 30, "red", 10, 120);
}
 
function plaatsCanvas = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.widht = 480;
        this.canvas.height = 360;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}
 
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    ctx = plaatsCanvas.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}