const urlBase= `https://api.openweathermap.org/data/2.5/weather`
const API_KEY= 'ba55d9ef528fb51751e8bbaa5834c398'
const diffkelvin = 273.15


document.getElementById('searchButton').addEventListener('click', ()=>{
    const city = document.getElementById ('cityinput').value;
    if(city){
        fetchWeather(city)
    }else{
        alert('ingrese una cuidad valida')
    }
})

function fetchWeather(city){
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then(data => showWeatherData(data))
}

function showWeatherData(data){
    const divResponseData = document.getElementById('responseData')
    divResponseData.innerHTML = ''

    const cityName = data.name
    const countryName= data.sys.country
    const temp = data.main.temp 
    const humidity = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon


    const cityInfo = document.createElement('h2')
    cityInfo.textContent = `${cityName}`,`${countryName}`

    const tempInfo = document.createElement('p')
    tempInfo.textContent = `La tempratura es: ${Math.floor(temp-diffkelvin)}°C`

    const humidityInfo = document.createElement('p')
    humidityInfo.textContent = `La humedad es del ${humidity}%`

    const iconInfo = document.createElement('img')
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png` //verificar en la documentación como mostrar una imagen 

    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `La descripción meteorologica es ${description}`


    divResponseData.appendChild(cityInfo)
    divResponseData.appendChild(tempInfo)
    divResponseData.appendChild(humidityInfo)    
    divResponseData.appendChild(iconInfo)      
    divResponseData.appendChild(descriptionInfo)      

}