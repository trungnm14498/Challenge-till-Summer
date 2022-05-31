var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var time = document.querySelector('.time');
var value = document.querySelector('.value');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sunny = document.querySelector('.sunny span');
var content = document.querySelector('.content');
var body = document.body;


async function changWeatherUI() {
    let capitalValue = search.value.trim();
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalValue}&appid=cb8d857e9528680474d1a7a90b239fba
    `;
    // let timeAPI = `https://api.ipgeolocation.io/timezone?apiKey=d8583d8eb2c044759a2c2bb44b7bed18&location=${capitalValue}
    // `;
    let data = await fetch(apiURL).then(res=> res.json());
    // let data2 = await fetch(timeAPI).then(res=> res.json());
    console.log(data);
    if (data.cod == 200) {
        content.classList.remove('hide');
        city.innerText = data.name;
        country.innerText = data.sys.country;
        // time.innerText = data2.date_time_wti;
        var date = new Date();
        date.setTime(date.getTime() + (data.timezone - 10800) * 1000);
        // console.log(date);
        var showDate = date.toString();
        showDate = showDate.slice(0,-26);
        console.log(showDate);
        time.innerText = showDate;
        visibility.innerText = data.visibility + 'm';
        wind.innerText = data.wind.speed + ' m/s';
        sunny.innerText = data.main.humidity + '%';
        var temp = Math.round(data.main.temp - 273.15)
        value.innerText = temp;
        shortDesc.innerText = data.weather[0] ? data.weather[0].main: '';

        console.log(weather);
        if (temp >= 30) {
            body.removeAttribute('class');
            body.classList.add('hot');
            content.style.color='white';
        }
        else if (temp < 30 && temp >= 23) {
            body.removeAttribute('class');
            body.classList.add('warm');
            content.style.color='white';
        }
        else if (temp < 23 && temp > 16) {
            body.removeAttribute('class');
            body.classList.add('cool');
            content.style.color='white';
        }
        else {
            body.removeAttribute('class');
            body.classList.add('cold');
            content.style.color='#3d3d5c';
        }
        
    }
    else {
        content.classList.add('hide');
    }
}

changWeatherUI()

search.addEventListener('keypress', function(e){
    if(e.code == 'Enter') {
        changWeatherUI();
    }
})