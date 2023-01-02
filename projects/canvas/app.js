const canvas = document.getElementById('demo');
const can = canvas.getContext('2d'); // return drawing context on canvas
//console.log(can)
canvas.width = window.innerWidth; // window pixels interior of width and height
canvas.height = window.innerHeight;

        //can.beginPath();
can.strokeStyle = 'blue';
can.lineJoin = 'round'; //join 2 segments 
can.lineCap = 'round';  //shape to be used at the end of open subpaths
        //can.stroke();
        //can.moveTo(20, 20);
        //can.lineTo(200, 20);     
can.lineWidth = 30;        
//can.globalCompositeOperation = 'darken';

var drawing = false;
var yaxis = 0;
var xaxis = 0;
var hue = 0; //hue means degree on color from 0 to 360
var direction = true;

function draw(e){
    if(!drawing) return;
    //alert('hi');
    console.log(e);
    can.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    can.beginPath(); //beginPath // new path
    /*can.strokeStyle = 'blue';
    can.moveTo(20, 20); moveTo = create new sub path at point x-axis and y-axis(x, y)
    can.lineTo(200, 20); lineTo = adds a straight line to the current sub-path by connecting the sub-path's last point (x,y)*/
  
    
    can.moveTo(xaxis, yaxis);
    can.lineTo(e.offsetX, e.offsetY);
    can.stroke();
    [xaxis, yaxis] = [e.offsetX, e.offsetY]; //destructing Arr
    
     hue++;
     if(hue >= 360){
        hue = 0;
     }else if(can.lineWidth <= 500 || can.lineWidth <= 1){
        direction = !direction;
     }else if(direction){
        can.lineWidth++;
     }else{
        can.lineWidth--
     }
   
            
}

canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    [xaxis, yaxis] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mouseout', () => drawing = false);