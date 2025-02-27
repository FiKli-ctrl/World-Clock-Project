function updateTime() {

//Amsterdam
let amsterdamElement = document.querySelector("#amsterdam");
let amsterdamDateElement = amsterdamElement.querySelector(".date");
let amsterdamTimeElement = amsterdamElement.querySelector(".time");
let amsterdamTime = moment().tz("Europe/Amsterdam");

amsterdamDateElement.innerHTML = amsterdamTime.format("dddd MMMM D, YYYY");
amsterdamTimeElement.innerHTML = amsterdamTime.format("HH:mm:ss");

//Auckland
let aucklandElement = document.querySelector("#auckland");
let aucklandDateElement = aucklandElement.querySelector(".date");
let aucklandTimeElement = aucklandElement.querySelector(".time");
let aucklandTime = moment().tz("Pacific/Auckland");

aucklandDateElement.innerHTML = aucklandTime.format("dddd MMMM D, YYYY");
aucklandTimeElement.innerHTML = aucklandTime.format("HH:mm:ss");

//New York
let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New_York");

newYorkDateElement.innerHTML = newYorkTime.format("dddd MMMM D, YYYY");
newYorkTimeElement.innerHTML = newYorkTime.format("HH:mm:ss");
}

updateTime();
setInterval(updateTime, 1000);