

let currentInfoWindow = null;

/* -- Function to run google map -- */

function initMap(locations) {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        /* Code to remove terrain and satellite checkbox from map */
        mapTypeControl: true,
        mapTypeControlOptions: {
            mapTypeIds: [
                google.maps.MapTypeId.ROADMAP,
            ]
        },
        center: {
            lat: 53.39456916818927,
            lng: -7.927418401701575
        }
    });

    /* -- If statement which loops through locations of in selected array, 
    and shows markers depending on which location is selected. */

    if (locations) {
        for (let i = 0; i < locations.length; i++) {
            /* variable to store information about each marker when clicked */

            const contentString = '<div class= "pop-up-container">' +
                '<h5 class="pop-up-heading">' + locations[i].name + ", " + locations[i].location +
                '</h5>' + '<div class="pop-up-content">' + '<p class="pop-up-info">' + locations[i].information +
                '</p>' + '<img class="pop-up-image">' + locations[i].images + '</div>' +
                '</div>';

            const infowindow = new google.maps.InfoWindow({
                content: contentString,
            });
            /* variable to store markers  */

            const marker = new google.maps.Marker(
                {
                    position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
                    map: map,
                    title: locations[i].name,
                    animation: google.maps.Animation.DROP,
                });

            /* Event listener to show location information when user clicks on specfic marker, 
            and to close previous marker when a new one is clicked*/
            
            google.maps.event.addListener(marker, 'click', function () {
                if (currentInfoWindow != null) {
                    currentInfoWindow.close();
                }
                infowindow.open(map, marker);
                currentInfoWindow = infowindow;
            });
        }
    }
}

/* To add and remove active class on map buttons */
$(document).ready(function () {
    $('.map-button').click(function () {
        $('.map-button').removeClass('active-map-button ').addClass('inactive');
        $(this).removeClass('inactive').addClass('active-map-button ');
    });
});


/* Add Event Listener to button to show locations of selected category Ireland */

document.getElementById("beaches").addEventListener("click", function () {
    initMap(beachLocations);
});


document.getElementById("caves").addEventListener("click", function () {
    initMap(caveLocations);
});

document.getElementById("castles").addEventListener("click", function () {
    initMap(castleLocations);
});

document.getElementById("mountains").addEventListener("click", function () {
    initMap(cliffMountainLocations);
});

document.getElementById("islands").addEventListener("click", function () {
    initMap(lakeIslandLocations);
});

document.getElementById("camping").addEventListener("click", function () {
    initMap(campingLocations);
});
