re.scene('home')
.enter(function(){
  
  //stop the browser from moving around
  re.preventDefault('left right up down');
  
  var x, y;  
  //var center_x = re.sys.sizeX / 2
  //var center_y = re.sys.sizeY / 2
  
  n = 5
  for(x = (-1 * n); x <= n; x++ ){
    
    if( x < 0 ){
      var start = (1 * n)
      var end = (-1 * n)  + (-1 * x)
    } else {
      var start = (n - x)
      var end = (-1 * n)
    }
    
    for(y = start; y >= end; y-- ){
      tile = re.e('hexagon').attr({ q: x, r: y })
    }
  }
});