var i=1,n=1e6,k=0,t=new Image;setInterval(function(){k=i,t.src="https://rdmr.ru/img/vehicle_images/"+k+"_1.png",i<n&&(t.onload=function(){document.write('<div class="single-goods" style="border: 1px solid black; margin: 10px; float: left; text-align: center;"><img style="width: 400px;" src="https://rdmr.ru/img/vehicle_images/'+k+'_1.png"><p>id: '+k+"</p></div>")},t.onerror=function(){}),i++},100);
