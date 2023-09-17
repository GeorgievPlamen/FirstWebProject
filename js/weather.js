const apiKey = "564833f0f539b70b08bd50e213ad9433";

async function GetWeatherData()
{
    let cityName = document.getElementById("cityText").value;
    console.log(cityName);

    let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`);

    let converted = await response.json();
    console.log(converted);
    let lat = converted[0].lat;
    let lon = converted[0].lon;
    console.log(converted[0].lat);
    console.log(converted[0].lon);

    let response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)

    let converted2 = await response1.json();
    console.log(converted2.main.temp - 273.15);
    console.log(converted2);
    //TODO Finish Weather App
}

