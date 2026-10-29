const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=karachi";
const apiKey = "06d7e545dbe6b85b658c42be1878c91c";
async function cheackWheather() {
    const response = await fetch(apiurl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".hum").innerHTML = data.main.humidity + "%";
    document.querySelector(".windd").innerHTML = data.wind.speed + "km/h";


    console.log(data.main.temp);

}
cheackWheather()