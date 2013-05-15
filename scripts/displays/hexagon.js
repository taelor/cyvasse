re.c('hexagon')
.requires('align draw mouse')
.defines({
	//define properties
  color:'white',
  q: 0,
  r: 0,
  center_x: 0,
  center_y: 0,
  size: 25,
  draw:function(c){

    var size = 25;
    
    var canvas_center_x = re.sys.sizeX / 2
    var canvas_center_y = re.sys.sizeY / 2
    
    this.center_x = canvas_center_x + ( (2.0 * size) * this.q * (1.0/2.0) + (2.0 * size) * this.r )
      
    this.center_y = canvas_center_y + ( (2.0 * size) * this.q * (Math.sqrt(3)/2.0) )
    
    c.fillStyle = this.color;
    c.beginPath();
    
    for (var i = 0; i <= 6; i += 1) {
      angle = 2 * Math.PI / 6 * (i + 0.5);
      
      x_i = this.center_x + size * Math.cos(angle);
      y_i = this.center_y + size * Math.sin(angle);
      
      if (i == 0) {
        c.moveTo(x_i, y_i);
      } else {
        c.lineTo(x_i, y_i);
      }
    }
    
    c.strokeStyle = "black";
    c.lineWidth = 1;
    c.stroke();
    c.fill();
  }
})
.init(function(){
  this.on('mousedown', function(x, y){
    // get distance from hex center to click
    var distance = Math.sqrt( Math.pow(this.center_x - x, 2) + Math.pow(this.center_y - y, 2) )
 
    if(distance < this.size){
      re.log('mouse distance '+distance+'!');
      if (this.color == "red")
        this.color = 'white'
      else
        this.color= 'red';
    }
  });
})
.dispose(function(){
  
});