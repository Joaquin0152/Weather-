function initPage() {
    const inputEl = document.getElementById("city-input");
    const searchEl = document.getElementById("search-button");
    const nameEl = document.getElementById("city-name");
    const currentPicEl = document.getElementById("current-pic");
    const currentTempEl = document.getElementById("temperature");
    const currentHumidityEl = document.getElementById("humidity");4
    const currentWindEl = document.getElementById("wind-speed");
    const currentUVEl = document.getElementById("UV-index");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

const APIKey = '169e58d2ca409af944a54e82aad06492';

function getWeather(cityName){
    let queryURL = "https://api.openweathermap.org/data/2.0/weather?q=" + cityName + "&appid=" + APIKey;
    axios.get(queryURL)
    .then(function(response){
        console.log(response);
    })
}