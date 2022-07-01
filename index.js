/*var k = j = 400;
while ( j <= 500 ){
    /*var t = new Image();  
    
    t.onload = function () {
      console.log('картинка существует', j)
    };
    t.onerror = function(){
      console.log('картинка не существует')
    };
    t.src = 'https://rdmr.ru/img/vehicle_images/' + j + '_1.png';
} */

var i = 399;
var n = 20000;
var k = 0;
var t = new Image();  
setInterval(function() {
  k = i;
  t.src = 'https://rdmr.ru/img/vehicle_images/' + k + '_1.png';  
  if (i < n) {
    t.onload = function () {
      document.write('<div class="single-goods" style="border: 1px solid black; margin: 10px; float: left; text-align: center;">' +
      '<img style="width: 400px;" src="https://rdmr.ru/img/vehicle_images/'+(k)+'_1.png">'
      + '<p>id: '+(k)+ '</p>'+'</div>')
    };
    t.onerror = function(){};
  }
  i++;
}, 200);