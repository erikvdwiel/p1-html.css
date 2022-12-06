var MyCanvas = document.getElementById("MyCanvas"); // canvas uitlezen
var ctx = MyCanvas.getContext("2d"); // ctx koppel aan  2d omgeving
var MySprite = ctx.fillRect(20,20,25,25); // MySprite => vierhoek in ctx 
var SpritePosition = [20,20]; // defenitie [0]=20 [1]=20 

document.addEventListener("keydown", (event) => {
    let keypressed = event.key; // event heeft de inhoud vam de EventListener
    switch (keypressed) {
        case "w":
            MoveSprint("u", 5);
            break; 
        case "a": 
            MoveSprint("l", 5)
            break;
        case "s":
            MoveSprint("d", 5);
            break; 
        case "d": 
            MoveSprint("r", 5)
            break;
        default:
            break;
    }
});

function MoveSprint(direction, speed) {
   switch (direction){
       case "u":
           SpritePosition[1] -= speed;
           break;
       case "d":
           SpritePosition[1] += speed;
           break;
        case "l":
            SpritePosition[0] -= speed;
            break;
        case "r":
            SpritePosition[0] += speed;
            default: break;
   }
   if(SpritePosition[0] < 0) { SpritePosition[0] = 0;}
   if(SpritePosition[1] < 0) { SpritePosition[1] = 0;}
   if(SpritePosition[0] > 475) { SpritePosition[0] = 475;}
   if(SpritePosition[1] > 475) { SpritePosition[1] = 475;}
   ctx.clearRect(0,0, MyCanvas.offsetWidth, MyCanvas.offsetHeight);
   ctx.fillRect(SpritePosition[0], SpritePosition[1], 25, 25);
}