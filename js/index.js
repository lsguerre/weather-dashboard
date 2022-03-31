var cityFormEl = document.querySelector('#city-form')
var cityInput = document.querySelector('#citySearch')
var searchBtn = document.querySelector('#search-btn')
var resultsContainerEl = document.querySelector('#currentForecast')

const apiKey = 'c00dbed7550689a0253675d600f7c3a6'

var searchHandler = function(event) {
    event.preventDefault()

    var city = cityInput.value.trim()

    if(city) {
        getWeather(city)

        resultsContainerEl.textContent = ''
        cityInput.value = ''

    } else {
        alert('Please enter a city')
    }
    console.log(event)
}

var getWeather = function(city) {
    var city = cityInput.value.trim()
    var currentForecast = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey




    fetch(currentForecast)
        .then(function(response) {
            if (response.ok) {
                response.json()
                    .then(function(data) { 
                    displayWeather(data, city)
                    console.log(data)
                })
            }
        })
        .catch(function(error) {
            
            alert('Unable to connect to open weather')
        })
        
}

var displayWeather = function(currentForecast) {

    var cityWeather = $(`
            <h2 id="currentCity">
                ${currentForecast.name} 
            </h2>
            <p>Temperature: ${currentForecast.main.temp} °F</p>
            <p>Humidity: ${currentForecast.main.humidity}\%</p>
            <p>Wind Speed: ${currentForecast.wind.speed} MPH</p>
           
        `)
        $('#currentForecast').append(cityWeather)
}


$('#search-btn').click('submit', searchHandler)