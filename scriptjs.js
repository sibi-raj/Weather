function displayresult(){
var city=document.getElementById("city").value;
var apikey='a43708429c614e809a65552188848433';
fetch ('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey+'&units=metric')
.then(response=>response. json())
.then (data => {
  var t = data['main']['temp']
  document.getElementById("output").innerHTML=t;
})
.then (data => {
  var min = data['main']['temp_min']
  document.getElementById("min").innerHTML=min;
})
}