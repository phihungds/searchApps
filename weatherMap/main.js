let searchInput = document.getElementById('searchInput')
const api_key = 'c66361ea6655b28bed44236606ccb99a'


function requestData() {
    let url = 'https://api.openweathermap.org/data/2.5/weather'
    url += '?q=' + searchInput.value + '&appid=' + api_key
    let result = axios.get(url)
    result.then(function (response) {
        console.log(response)
        printResult(response)
    })
    result.catch(function (err) {
        console.log('err', err)
    })
    console.log(result)
}

function printResult(result) {
    document.getElementById('name').innerText = `${result.data.name}`
    
    let temp = result.data.main.temp - 273.15
    document.getElementById('temp').innerHTML = `<i class="fas fa-temperature-high "></i> ${temp.toFixed(2)} °C`
    
    
    let feels_like = result.data.main.feels_like -273.15
    document.getElementById('feels_like').innerText = `Feels like ${feels_like.toFixed(2)} °C`

    document.getElementById('humidity').innerHTML = ` <i class="fas fa-humidity"></i> ${result.data.main.humidity} g/m³`

    document.getElementById('pressure').innerHTML = `<i class="fas fa-tire-pressure-warning"></i> ${result.data.main.pressure} mb`





//     document.body.style.backgroundImage =
//             `url('https://source.unsplash.com/1600x900/?${result.data.name}`;
}