function updateTime() {

//Amsterdam
let amsterdamElement = document.querySelector("#amsterdam");
if (amsterdamElement) {
let amsterdamDateElement = amsterdamElement.querySelector(".date");
let amsterdamTimeElement = amsterdamElement.querySelector(".time");
let amsterdamTime = moment().tz("Europe/Amsterdam");

amsterdamDateElement.innerHTML = amsterdamTime.format("dddd MMMM D, YYYY");
amsterdamTimeElement.innerHTML = amsterdamTime.format("HH:mm:ss");
}
//Auckland
let aucklandElement = document.querySelector("#auckland");
if (aucklandElement) {
let aucklandDateElement = aucklandElement.querySelector(".date");
let aucklandTimeElement = aucklandElement.querySelector(".time");
let aucklandTime = moment().tz("Pacific/Auckland");

aucklandDateElement.innerHTML = aucklandTime.format("dddd MMMM D, YYYY");
aucklandTimeElement.innerHTML = aucklandTime.format("HH:mm:ss");
}
//New York
let newYorkElement = document.querySelector("#new-york");
if (newYorkElement) {
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New_York");

newYorkDateElement.innerHTML = newYorkTime.format("dddd MMMM D, YYYY");
newYorkTimeElement.innerHTML = newYorkTime.format("HH:mm:ss");
}
}


function updateCity(event) {
    let cityTimeZone = event.target.value;
    console.log(cityTimeZone);
    }

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
let cityTimeZone = event.target.value;
let cityName = cityTimeZone.replace("_", " ").split("/")[1];
let cityTime = moment().tz(cityTimeZone);
let citiesElement = document.querySelector("#cities");

citiesElement.innerHTML = `
<div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("dddd MMMM D, YYYY")}</div>
        </div>  
        <div class="time">${cityTime.format("HH:mm:ss")}</div>
    </div>
`
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);