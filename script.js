var flights = [{
    airlineLogo: ["fa-solid", "fa-tickets-airline"],
    airlineName: "Indigo",
    sourceCityCode: "HYD",
    sourceCity: "Hyderabad, India",
    destinationCityCode: "DEL",
    destinationCity: "New Delhi, India",
    departureTime: "18:35",
    arrivalTime: "21:05",
    flightDuration: "2h 30m",
    flightFare: "₹ 4,426"
}];

for (var i = 0; i < flights[0].airlineLogo.length; i++) {
    document.getElementById("airline-logo").classList.add(flights[0].airlineLogo[i]);
}
document.getElementById("airline-name").innerHTML = flights[0].airlineName;
document.getElementById("source-city-code").innerHTML = (flights[0].sourceCityCode).concat(flights[0].sourceCity);
document.getElementById("destination-city-code").innerHTML = (flights[0].destinationCityCode).concat(flights[0].destinationCity);
document.getElementById("departure-time").innerHTML = flights[0].departureTime;
document.getElementById("flight-duration").innerHTML = flights[0].flightDuration;
document.getElementById("arrival-time").innerHTML = flights[0].arrivalTime;
document.getElementById("flight-fare").innerHTML = flights[0].flightFare;