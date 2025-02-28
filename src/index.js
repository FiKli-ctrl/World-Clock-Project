function updateTime() {

//Amsterdam
let berlinElement = document.querySelector("#berlin");
if (berlinElement) {
let berlinDateElement = berlinElement.querySelector(".date");
let berlinTimeElement = berlinElement.querySelector(".time");
let berlinTime = moment().tz("Europe/Berlin");

berlinDateElement.innerHTML = berlinTime.format("dddd MMMM D, YYYY");
berlinTimeElement.innerHTML = berlinTime.format("HH:mm:ss");
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

   


updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
let cityTimeZone = event.target.value;
if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
}
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