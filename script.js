const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "06d7e545dbe6b85b658c42be1878c91c";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function cheackWheather(city) {
    const response = await fetch(apiurl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        console.log(data)
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".country").innerHTML = data.sys.country;

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".hum").innerHTML = data.main.humidity + "%";
        document.querySelector(".windd").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }



}


searchBtn.addEventListener("click", () => {
    cheackWheather(searchBox.value);
})
