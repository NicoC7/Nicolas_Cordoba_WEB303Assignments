/*
    Assignment #4
    {Your name here}
*/

$(function () {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            displayLocation(position.coords.latitude, position.coords.longitude);

            const storedLocation = localStorage.getItem("storedLocation");
            if (storedLocation) {
                const [storedLat, storedLng] = storedLocation.split(",");
                const distance = calcDistanceBetweenPoints(
                    position.coords.latitude,
                    position.coords.longitude,
                    parseFloat(storedLat),
                    parseFloat(storedLng)
                );
                displayWelcomeBack(distance);
            } else {
                displayWelcome();
            }

            localStorage.setItem("storedLocation", `${position.coords.latitude},${position.coords.longitude}`);
        });
    } else {
        displayErrorMessage("Geolocation is not available. Please enable it to use this application.");
    }

    function displayLocation(latitude, longitude) {
        const locationDiv = document.getElementById("locationhere");
        locationDiv.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
    }

    function displayWelcomeBack(distance) {
        const welcomeMessage = document.getElementById("welcomeMessage");
        welcomeMessage.textContent = "Welcome back to the page! You traveled a distance of " + distance.toFixed(2) + " meters since your last visit.";
    }

    function displayWelcome() {
        const welcomeMessage = document.getElementById("welcomeMessage");
        welcomeMessage.textContent = "Welcome to the page for the first time!";
    }

    function displayErrorMessage(message) {
        const errorMessage = document.getElementById("welcomeMessage");
        errorMessage.textContent = message;
    }

    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        return calculatedDistance;
    }
});





    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    };


