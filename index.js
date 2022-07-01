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

var i = 400;
var n = 500;
var k = i;
var t = new Image();  
setInterval(function() {
  k = i;
  t.src = 'https://rdmr.ru/img/vehicle_images/' + k + '_1.png';  
  if (i < n) {
    t.onload = function () {
      document.write('<div class="single-goods">' +
      '<img src="https://rdmr.ru/img/vehicle_images/'+(k)+'_1.png">'
      + '<p>id: '+(k)+'</p>'+'</div>')
    };
    t.onerror = function(){
      console.log('картинка не существует', k)
    };
  }
  i++;
}, 100);