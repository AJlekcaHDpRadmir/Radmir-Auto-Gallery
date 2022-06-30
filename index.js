var car = new Array(603); // create an empty array with length 45
for(var i = 400; i < car.length; i++){
  document.write('<div class="single-goods">' +
    '<img src="https://rdmr.ru/img/vehicle_images/'+(i + 1)+'_1.png">'
    + '<p>id: '+(i + 1)+'</p>'+'</div>'); 
}
