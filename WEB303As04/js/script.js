/*
    Assignment #4
    {Nicolas Moreno Cordoba}
*/

$(function () {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const accuracy = position.coords.accuracy;

            displayLocation(latitude, longitude, accuracy);

            const storedLocation = localStorage.getItem("storedLocation");
            if (storedLocation) {
                const [storedLat, storedLng] = storedLocation.split(",");
                const distance = calcDistanceBetweenPoints(
                    latitude,
                    longitude,
                    parseFloat(storedLat),
                    parseFloat(storedLng)
                );
                displayStoredLocation(storedLat, storedLng);
                displayWelcomeBack(distance);
            } else {
                displayWelcome();
            }

            localStorage.setItem("storedLocation", `${latitude},${longitude}`);
        }, function (error) {
            displayErrorMessage("Error getting location: " + error.message);
        });
    } else {
        displayErrorMessage("Geolocation is not available. Please enable it to use this application.");
    }

    function createMessage(messageText) {
        const messageDiv = document.createElement("h1");
        messageDiv.textContent = messageText;
        document.getElementById("content").appendChild(messageDiv);
    }

    function displayLocation(latitude, longitude, accuracy) {
        createMessage(`Latitude: ${latitude}, Longitude: ${longitude}, Accuracy: ${accuracy.toFixed(2)} meters`);
    }

    function displayStoredLocation(latitude, longitude) {
        createMessage(`Stored Location: Latitude: ${latitude}, Longitude: ${longitude}`);
    }

    function displayWelcomeBack(distance) {
        createMessage(`Welcome back to the page! You traveled a distance of ${(distance / 1000).toFixed(2)} km since your last visit.`);
    }

    function displayWelcome() {
        createMessage("Welcome to the page for the first time!");
    }

    function displayErrorMessage(message) {
        createMessage(message);
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


