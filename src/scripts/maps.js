const initMap = () => {
    const clinicLocation = { lat: -34.397, lng: 150.644 }; // Replace with actual clinic coordinates
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: clinicLocation,
    });

    const marker = new google.maps.Marker({
        position: clinicLocation,
        map: map,
        title: "Clinic Location",
    });

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    document.getElementById("get-directions").addEventListener("click", () => {
        const request = {
            origin: { lat: -34.397, lng: 150.644 }, // Replace with user's current location or input
            destination: clinicLocation,
            travelMode: google.maps.TravelMode.DRIVING,
        };

        directionsService.route(request, (result, status) => {
            if (status === "OK") {
                directionsRenderer.setDirections(result);
            } else {
                window.alert("Directions request failed due to " + status);
            }
        });
    });
};

window.onload = initMap;