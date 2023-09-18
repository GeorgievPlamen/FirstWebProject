const apiKey = "564833f0f539b70b08bd50e213ad9433";
//API - https://openweathermap.org/


async function GetWeatherData()
{
    let cityName = document.getElementById("cityText").value;

    if(cityName == "")
    {
        alert("Please enter a city name.");
    }
    else
    {
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

        PrintWeatherData(converted2);
    }
}

function PrintWeatherData(json)
{
    let name = json.name;
    let temperature = Math.round(json.main.temp - 273.15);
    let sunrise = new Date(json.sys.sunrise * 1000);
    let sunriseTime = sunrise.toLocaleTimeString();
    let sunset = new Date(json.sys.sunset * 1000);
    let sunsetTime = sunset.toLocaleTimeString();

    console.log(name);
    console.log(temperature);
    console.log(sunriseTime);
    console.log(sunsetTime);

    let weatherContainer = document.getElementById("WeatherPlaceHolder");

    let htmlToAdd = 
    `<section class="WeatherContainer">` +
        
        `<div class>` +
        `<div>Current temperature in ${name} = ${temperature}&#8451</div>` +
         `<div>Sunrise is at - ${sunriseTime}</div>` +
         `<div>Sunset is at - ${sunsetTime}</div>` +
       `</div>` +
       `</section>`;
    
    weatherContainer.innerHTML = htmlToAdd;
}
