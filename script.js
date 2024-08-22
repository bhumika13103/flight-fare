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
    flightFare: "4,426"
}];

for (var i = 0; i < flights[0].airlineLogo.length; i++) {
    document.getElementById("airline-logo").classList.add(flights[0].airlineLogo[i]);
}
