export const mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 11,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: true,
    scaleControl: false,
    draggable: true,
    disableDefaultUI: true,

    // The latitude and longitude to center the map (always required)
    center: { lat: 40.67, lng: -73.94 }, // New York

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [
        {
            featureType: "administrative",
            elementType: "all",
            stylers: [{ saturation: "-100" }],
        },
        {
            featureType: "administrative.province",
            elementType: "all",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "landscape",
            elementType: "all",
            stylers: [
                { saturation: -100 },
                { lightness: 65 },
                { visibility: "on" },
            ],
        },
        {
            featureType: "poi",
            elementType: "all",
            stylers: [
                { saturation: -100 },
                { lightness: "50" },
                { visibility: "simplified" },
            ],
        },
        {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: "-100" }],
        },
        {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
        },
        {
            featureType: "road.arterial",
            elementType: "all",
            stylers: [{ lightness: "30" }],
        },
        {
            featureType: "road.local",
            elementType: "all",
            stylers: [{ lightness: "40" }],
        },
        {
            featureType: "transit",
            elementType: "all",
            stylers: [{ saturation: -100 }, { visibility: "simplified" }],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                { hue: "#ffff00" },
                { lightness: -25 },
                { saturation: -97 },
            ],
        },
        {
            featureType: "water",
            elementType: "labels",
            stylers: [{ lightness: -25 }, { saturation: -100 }],
        },
    ],
};