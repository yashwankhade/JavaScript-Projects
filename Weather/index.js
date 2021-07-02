
 

var a;
 document.getElementById('submit').addEventListener('click',function(e){
   var city = document.querySelector('#input')[0].value;
  //  fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=90599d11e8d47bf5db7e877188c97ef5&units=metric')
  fetch('https://api.weatherapi.com/v1/current.json?key=6c16bfc6e71645c1b08111746211306&q='+city+'&unit=metrics')
   .then(response=>response.json())
   .then(data=>{
     a=data;
     console.log(data)
     document.querySelector('#city_name').innerHTML=a.location.name;
     document.querySelector('#region').innerHTML='('+a.location.region+')';
     var date= new Date();
     var c= date.toLocaleDateString();
     document.querySelector('#date').innerHTML='Last Updated:\n'+a.current.last_updated;
     
    document.getElementById('icon').setAttribute('src','https://'+a.current.condition.icon)
    document.querySelector('#condition').innerHTML= a.current.condition.text;
    document.querySelector('#temp').innerHTML=a.current.temp_c+'℃';
    })
    e.preventDefault();
    
 })


 