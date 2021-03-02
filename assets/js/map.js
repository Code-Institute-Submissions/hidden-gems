
let map;

let locations = [];

/* Object for Beach Locations in Ireland */


let beachLocations = [

    {
        name: "Kinnagoe Bay",
        lat: 55.25853092702544,
        lng: -7.012858804606512,
        location: "Donegal",
        information: `Kinnagoe Bay is a secluded beach that has a rich history. It is known for being the location of the wreck of the Armada ship La Trinidad Valencera on 16 September 1588.`,
        images: `<img src="assets/images/beach-locations-1.jpg" class="map-images map-pop-up" alt= "ireland-beach"></img>`
    },
    {
        name: "Kilcoole Beach",
        lat: 53.106289454811794,
        lng: -6.040521788447418,
        location: "Wicklow",
        information: `A beautiful beach that's perfect for birdwatchers. The beach has a unique atmosphere thats both peaceful and full of energy.`,
        images: `<img src="assets/images/beach-locations-2.jpg" class="map-images map-pop-up" alt="ireland-beach" ></img>`
    },
    {
        name: "Bannow Island",
        lat: 52.21088398432121,
        lng: -6.7969478144495055,
        location: "Wexford",
        information: `Bannow Strand is a very isolated beach. It's the perfect place to spend some time alonge, walking along sandy beach or sand dunes.  `,
        images: `<img src="assets/images/beach-locations-3.jpg" class="map-images map-pop-up" alt="ireland-beach"></img>`
    },
    {
        name: "Stradbally Cove",
        lat: 52.1250195326743,
        lng: -7.4603243,
        location: "Waterford",
        information: `This unique beach is surronded by cliffs, and is a great beach for many different activities.`,
        images: `<img src="assets/images/beach-locations-10.jpg" class="map-images map-pop-up" alt="ireland-beach"></img>`
    },
    {
        name: "Sandscove Beach",
        lat: 51.55288092378668,
        lng: -8.898726986229178,
        location: "Cork",
        information: `This beach is easy to miss so keep an eye out. We recommend bringing a camera or binoculars as you may see dolphins and seals.`,
        images: `<img src="assets/images/beach-locations-5.jpg" class="map-images map-pop-up" alt="ireland-beach"></img>`
    },
    {
        name: "Silver Strand Beach",
        lat: 54.66475793754972,
        lng: -8.776379246237571,
        location: "Donegal",
        information: `A wonderful beach located on an island, surrounded by wildlife.`,
        images: `<img src="assets/images/beach-locations-6.jpg" class="map-images map-pop-up" alt="ireland-beach"></img>`
    },
    {
        name: "White Strand",
        lat: 52.7471814438714,
        lng: -9.550395830692928,
        location: "Clare",
        information: `This beach is perfect for all sorts of water activities. Be sure to bring a wet-suit! `,
        images: `<img src="assets/images/beach-locations-7.jpg" class="map-images map-pop-up" alt="ireland-beach"></img>`
    },
    {
        name: "Forbogh Beach",
        lat: 53.24898348306867,
        lng: -9.220795398428837,
        location: "Galway",
        information: `This beautiful beach is located in a Gaeltacht area where Irish is the main language. Keep your eyes open, because this beach is easy to miss. `,
        images: `<img src="assets/images/beach-locations-8.jpg" class="map-images map-pop-up" alt="ireland-beach"></img>`
    },
    {
        name: "Tramore Beach",
        lat: 55.17733341039231,
        lng: -8.022966473946783,
        location: "Donegal",
        information: `There are only two ways to access this beach; by boat and by foot. It's well worth the hike to this magical beach!`,
        images: `<img src="assets/images/beach-locations-9.jpg" class="map-images map-pop-up" alt="ireland-beach"></img>`
    },
    {
        name: "Ballyteige Burrow",
        lat: 52.20194249676858,
        lng: -6.642653162292428,
        location: "Wexford",
        information: `This beach is rich in wilflife and flora. It's the perfect place for a long walk whether along the sandy beach or long winding sandunes.`,
        images: `<img src="assets/images/beach-locations-4.jpg" class="map-images map-pop-up" alt="ireland-beach"></img>`
    },
    {
        name: "Annagh Bay",
        lat: 54.237603295991505,
        lng: -10.089105252884908,
        location: "Mayo",
        information: `This beach can only be accessed by foot or by boat. It's a very isolated beach, and absolutely worth the journey.`,
        images: `<img src="assets/images/beach-locations-11.jpg" class="map-images map-pop-up" alt="ireland-beach"></img>`
    },
    {
        name: "Trá na Feadóigey",
        lat: 53.37520657748699,
        lng: -9.96164436609833,
        location: "Galway",
        information: `A wonderful beach to visit in any weather. The perfect place to de-stress, listen to the waves, and read a book.`,
        images: `<img src="assets/images/beach-locations-12.jpg" class="map-images map-pop-up" alt="ireland-beach"></img>`
    },
    {
        name: "Galley Cove",
        lat: 51.46706896407998,
        lng: -9.731530106117043,
        location: "Cork",
        information: `One of our favorite beaches we've visited. It's a well kept secret, but worth sharing!`,
        images: `<img src="assets/images/beach-locations-13.jpg" class="map-images map-pop-up" alt="ireland-beach"></img>`
    },
    {
        name: "Trá Bán",
        lat: 52.104736754106604,
        lng: -10.510461740099627,
        location: "Kerry",
        information: `Many have seen dolphins and seals from this beach, so come prepared and bring your binoculars!`,
        images: `<img src="assets/images/beach-locations-14.jpg" class="map-images map-pop-up" alt="ireland-beach"></img>`
    },
]

let lakeIslandLocations = [
    {
        name: "Assaranca Waterfall",
        lat: 54.75894239809791,
        lng: -8.51363053069293,
        location: "Donegal",
        information: "There is nothing more calming than the sounds of this waterfall after a day of heavy rain. It's truly breathtaking!",
        images: `<img src="assets/images/lake-island-locations-1.jpg" class="map-images map-pop-up" alt="ireland-waterfall"></img>`
    },
    {
        name: "Shannon Pot",
        lat: 54.2355508148235,
        lng: -7.919257591528897,
        location: "Cavan",
        information: `Rumoured to be the origin of Ireland's longest river. It's a fantastic location for a peaceful walk, and picnic.`,
        images: `<img src="assets/images/lake-island-locations-2.jpg" class="map-images map-pop-up" alt="ireland-lake"></img>`
    },
    {
        name: "Lough Ouler",
        lat: 53.06048077000485,
        lng: -6.373418235691949,
        location: "Wicklow",
        information: "This heart shape lake is an excellent place to hike, and the perfect spot for a swim afterwards.",
        images: `<img src="assets/images/lake-island-locations-3.jpg" class="map-images map-pop-up" alt="ireland-lake"></img>`

    },
    {
        name: "Arranmore Island",
        lat: 54.988728913032745,
        lng: -8.535274641997912,
        location: "Donegal",
        information: `A magical island with beautiful cliffs, sandy beaches. Once you arrive, you may never want to leave.`,
        images: `<img src="assets/images/lake-island-locations-4.jpg" class="map-images map-pop-up" alt="ireland-island"></img>`
    },
    {
        name: "Coumshingaun Lough",
        lat: 52.250591233955824,
        lng: -7.524722204343533,
        location: "Waterford",
        information: `A four hour hike awaits to arrive at this lake. It's absolutely worth it for the magnificant view that awaits.`,
        images: `<img src="assets/images/lake-island-locations-5.jpg" class="map-images map-pop-up" alt="ireland-lake"></img>`
    },
    {
        name: "Bull Rock",
        lat: 51.59565594035093,
        lng: -10.275685867593861,
        location: "Cork",
        information: `Sometimes called 'The End of The World'. Surrounded by cliffs, and often massive waves. This location is unforgettable.`
    },
    {
        name: "Poll na bPéist - The Wormhole",
        lat: 53.12160328855573,
        lng: -9.754421034582185,
        location: "Galway",
        information: `An extraordinary view of a natural phenomenon. There's nothing quite like it in Ireland.`
    },
    {
        name: "Spike Island",
        lat: 51.83476100594525,
        lng: 8.28623414494465,
        location: "Cork",
        information: `This island is filled with history, as it was first a settlement, and later a prison. It's the perfect lcoation for a day-trip.`
    },
    {
        name: "Bere Island",
        lat: 51.63037224006302,
        lng: -9.865961566386499,
        location: "Cork",
        information: "An idyllic island with many ancient ruins. This location offers a beautiful walk, and a fantastic place for a quiet day of exploration and reflection.",
        images: `<img src="assets/images/lake-island-locations-7.jpg" class="map-images map-pop-up" alt="ireland-old-house"></img>`
    },
    {
        name: "Clare Island",
        lat: 53.80262284462848,
        lng: -9.9964143107925,
        location: "Mayo",
        information: "",
        images: `<img src="assets/images/lake-island-locations-10.jpg" class="map-images map-pop-up" alt="ireland-island"></img>`
    },
    {
        name: "Sherkin Island",
        lat: 51.46511094755541,
        lng: -9.418069650576705,
        location: "Cork",
        information: "A picturesque island that is rich in wildlife, and beautiful views. The island is very peaceful and there is a wonderful hotel to stay the night after a day of travelling.",
        images: `<img src="assets/images/lake-island-locations-6.jpg" class="map-images map-pop-up" alt="ireland-island"></img>`
    },
    {
        name: "Great Blasket Island",
        lat: 52.104736754106604,
        lng: -10.510461740099627,
        location: "Kerry",
        information: `For many this island is a reminder of the simple ways of living. You can stay the night here in accomodation without WiFi, and electricity. The perfect getaway.`,
        images: `<img src="assets/images/lake-island-locations-9.jpg" class="map-images map-pop-up" alt="ireland-island"></img>`
    },
    {
        name: "Valentia Island",
        lat: 51.92137461381308,
        lng: -10.332660991813258,
        location: "Kerry",
        information: `A small island with many things to do. We recommend visiting the fabulous lighthouse. It's one of the most western points of Ireland, and one of our favourite places to visit.`,
        images: `<img src="assets/images/lake-island-locations-8.jpg" class="map-images map-pop-up" alt="ireland-island"></img>`
    },


]

/* Object for castle locations in Ireland */

let castleLocations = [
    {
        name: "Doon Fort",
        lat: 54.82915812360112,
        lng: -8.464081532894864,
        location: "Donegal",
        information: `A breathtaking heritage site. This fort is located in the middle of a lake. It's a real hidden gem.`
    },
    {
        name: "McDermott Castle",
        lat: 53.98958226630207,
        lng: -8.232584288008399,
        location: "Roscommon",
        information: `This caslte is located on an island within a large lake. There's a boat which will take you to caslte. It's a very remote area, and a perfect place to get lost in the past.`
    },
    {
        name: `Cú Chulainn's Castle`,
        lat: 54.01436057901478,
        lng: -6.430028530692929,
        location: "Louth",
        information: `The castle is located on top of a hill, that overlooks the beautiful surrounding area. Once you reach the caslte, you can see all of Dundalk town. It's a wonderful site.`
    },
    {
        name: "Athassel Abbey",
        lat: 52.47688365193911,
        lng: -7.995341765097741,
        location: "Tipperary",
        information: `This abby is the largest in Ireland, and dates back to the 12th century. It's absolutely worth visiting both for the history, and the walk around the beautiful site.`
    },
    {
        name: "Drimnagh Castle",
        lat: 53.325343615027215,
        lng: -6.332674000000001,
        location: "Dublin",
        information: `The only castle in Ireland that has a flooded moat. This castle is filled with history, and while it's located in the capital city, it's still a hidden gem.`
    },
    {
        name: "Leap Castle",
        lat: 53.028377353540435,
        lng: -7.808453400000001,
        location: "Offaly",
        information: `This caslte is often described as "the world's most haunted castle". It has been featured on TV's 'Most Haunted'. It's a terrific location.`
    },
    {
        name: "Graystown Castle",
        lat: 52.564195871196716,
        lng: -7.715855315346465,
        location: "Tipperary",
        information: `This mesmerizing castle offers wonderful sites, as it stands over 60ft tall. It dates back to the 1500's, and is certainily one of the most beautiful castle's we've seen in Ireland.`
    },
    {
        name: "Rock of Cashel",
        lat: 52.520572449407766,
        lng: -7.890538030692929,
        location: "Tipperary",
        information: `This castle is a National Monument of Ireland. While that may take away from the secrecy, it's still unknown for many. There are tour guides which operate daily, and give insight into this fantastic historic location.`
    },
    {
        name: "Roche Castle",
        lat: 54.04678206725634,
        lng: -6.4883566,
        location: "Louth",
        information: `An amazing Norman caslte, that offers splendid views. This castle is build on top of a hill, which offers spectacular views.`
    },
    {
        name: "Fiddaun Castle",
        lat: 53.010595321460826,
        lng: -8.879343030372857,
        location: "Galway",
        information: `This caslte is quite a walk away, but it's absolutely worth it. At one point in time, it was considered the largest castle in Ireland.`
    },
    {
        name: "Trim Castle",
        lat: 53.55449698266906,
        lng: -6.7893993000155834,
        location: "Meath",
        information: `This castle is over 30,000 m². It's well-maintained and offers great insight into what it must have been like in the past. It was also a location site for the movie 'Braveheart.`
    },
    {
        name: "Rockstown Castle",
        lat: 52.567152714724244,
        lng: -8.55695135396061,
        location: "Limerick",
        information: `A fantastic tower house that has five floors. This site differs from many other castles due to its compact size, but it's well worth a visit.`
    },
]

/* Object for cave locations in Ireland */

let caveLocations = [
    {
        name: "Keshcorran Caves",
        lat: 54.060966340687045,
        lng: -8.449664538155785,
        location: "Sligo",
        information: `Fantastic limestone caves located on the side of a hill. The cave consists of sixteen simple chambers, some interconnecting. The caves are often presented as being associated with the otherworld, and as places to be respected and feared.`
    },
    {
        name: `Bruce's Cave`,
        lat: 55.298518354390445,
        lng: -6.169222761385858,
        location: "Antrim",
        information: `This historic cave is well worth the visit. It's name after Robert the Bruce, as it is said that he hid there after his defeat in the 1300's.`
    },
    {
        name: "Marble Arch Caves",
        lat: 54.25902655880112,
        lng: -7.813274946039392,
        location: "Fermanagh",
        information: `These caves are the longest in Northern Ireland spanning over 11.5 kilometres. It's a fantastic site, and a must see location.`
    },
    {
        name: "Crag Caves",
        lat: 52.24763355035248,
        lng: -9.443211170299001,
        location: "Kerry",
        information: `These caves are said to be over 1 million years old Crag Cave is a magical wonderland of stalagmites and stalactites. We cannot recommend this breathtaking site enough.`
    },
    {
        name: "Dunmore Cave",
        lat: 52.73422200101786,
        lng: -7.246985815346465,
        location: "Kilkenny",
        information: `These caves are known for their archaeological discoveries, and its no wonder, when you see the depth of these cave systems.`
    },
    {
        name: "Doolin Cave",
        lat: 53.04110351270187,
        lng: -9.345149200042298,
        location: "Clare",
        information: `This cave is home to the longest known free-hanging stalactite in Europe, and one of the largest in the entire world.`
    },
    {
        name: "Aillwee Cave",
        lat: 53.089360163139524,
        lng: -9.14358156930707,
        location: "Clare",
        information: `The cave system consists of over a kilometre of passages leading into the heart of the mountain. Its features include an underground river and a waterfall as well as some large stalactites and stalagmites.`
    },
    {
        name: "Mitchelstown Cave",
        lat: 52.30417599030712,
        lng: -8.1088003,
        location: "Tipperary",
        information: `A fantastic cave system, with brilliant and informative tour guides.`
    },
    {
        name: "Pigeon Hole Cave",
        lat: 53.54275510201632,
        lng: -9.306707023516834,
        location: "Galway",
        information: `A beautiful cave with an underground stream. The forest leading to the caves are perfect for a walk amongst huge trees.`
    },
    {
        name: "Pollnagollum ",
        lat: 53.07786514887954,
        lng: -9.251255432960807,
        location: "Clare",
        information: `The longest cave in Ireland, and one of the deepest caves too. It's well worth the journey through to the cave to see the underground stream.`
    },
    {
        name: "Oweynagat Cave",
        lat: 53.79695547961791,
        lng: -8.310280138614143,
        location: "Rosscommon",
        information: `You'll need to bring a torch and some wet gear with you for this unique cave. It's a true gateway to another world.`
    },
]


/* Object for cliff and mountains in Ireland */

let cliffMountainLocations = [
    {
        name: "Croaghaun",
        lat: 53.97977025770544,
        lng: -10.193419230770017,
        location: "Mayo",
        information: `These cliffs are the highest in Ireland, and the third highest in Europe. You'll have to hike to see these stunning views, but its well worth the trek.`
    },
    {
        name: "Diamond Hill",
        lat: 53.548263166950626,
        lng: -9.91489406258491,
        location: "Galway",
        information: `An amazing hike, that doesn't take too long. The hike features paths so its perfect for all ages and abilities.`
    },
    {
        name: "Knockmealdown Mountains",
        lat: 52.22845940290453,
        lng: 7.915621227079968,
        location: "Waterford",
        information: `For the select people who know about these mountains, they're a favorite due to the brilliant views, and varying degrees of difficulty in paths you can take.`
    },
    {
        name: "Kilbaha Cliffs",
        lat: 52.571955032395074,
        lng: -9.86175423418042,
        location: "Clare",
        information: `A fabulous cliff walk which overlooks a lighthouse. This location offers some of the best views you'll ever see. `
    },
    {
        name: "Devil’s Chimney",
        lat: 54.341005843280804,
        lng: -8.392807069307072,
        location: "Sligo",
        information: `A terrific walk which ends at the unique waterfall. It's best to visit here after heavy rain, and the waterfall may be over 150ft tall.`
    },
    {
        name: `Priest's leap`,
        lat: 51.79367893027667,
        lng: -9.47125517274581,
        location: "Kerry",
        information: `A truly unique hidden gem. You can opt to drive this path, which many people do. It's not for the feint of heart. Otherwise, you can hike the area for fantastic views.`
    },
    {
        name: "The Nine Stones",
        lat: 52.6360572209473,
        lng: -6.772222302314992,
        location: "Carlow",
        information: `Magnificent views can be seen from here. On clear days, you can see eight different counties including Waterford, Kilkenny, Laois and Wexford.`
    },
    {
        name: "Ballaghbeama Gap",
        lat: 51.94129256166348,
        lng: -9.81548710154434,
        location: "Kerry",
        information: `This route is best taken by car. It's a breathtaking journey, that feels totally out of this world.`
    },
    {
        name: "Slieve League Cliffs",
        lat: 54.640391412976356,
        lng: -8.682113067849912,
        location: "Donegal",
        information: `These cliffs reach nearly 2,000ft. It's almost three times the size of the Cliff's of Moher. The hike is well worth the wonderful views.`
    },
    {
        name: "Ballycotton Cliffs",
        lat: 51.82495664593324,
        lng: -8.008259815384314,
        location: "Cork",
        information: `These cliffs overlook vast fields, and a never-ending ocean. The hike can take about five hours, and it's suitable for all ages and abilities.`
    },
    {
        name: "Geokaun Cliffs",
        lat: 51.92380608699363,
        lng: -10.34829668199812,
        location: "Kerry",
        information: `These cliffs are a photographer's dream. From the top of the hike, you can see many of Kerry's islands, and surrounding mountains.`
    },
]

let campingLocations = [
    {
        name: "Beara Peninsula",
        lat: 51.74830162986611,
        lng: -9.701959008230475,
        location: "Kerry",
        information: `A beautiful location filled with mountains, oceans and walks. The perfect spot to pitch a tent for the night.`,
        images: `<img border="0" align="Left" src="assets/images/beach-ireland.jpg" class="map-images"></img>`
    },
    {
        name: "Black Valley",
        lat: 51.97689366681456,
        lng: -9.681442711723035,
        location: "Kerry",
        information: `A secluded valley surrounded by mountains, and rivers. It's an excellent location to camp out in the wild.`,
        images: `<img border="0" src="assets/images/castle-in-field.jpg" class="map-images map-pop-up"></img>`

    },
    {
        name: "Dunlaughin Beach",
        lat: 53.43335491541271,
        lng: -10.141844956052886,
        location: "Galway",
        information: `This camping spot is located right by the beach, and it's a fantastic place to spend the night. Especially, if you fancy a morning swim.`
    },
    {
        name: "Glenregan Wild Camping",
        lat: 53.08281329343294,
        lng: -7.63577198115244,
        location: "Offaly",
        information: `This valley is secluded by dense woodlands, but also quite accessible. It's the perect spot for family camping.`
    },
    {
        name: "Wicklow Mountains National Park",
        lat: 53.142799739081575,
        lng: -6.307651092046029,
        location: "Wicklow",
        information: `An amazing location to camp, as the surrounding area is one of the best hiking spots.`
    },
    {
        name: "Knockmealdown Mountains",
        lat: 52.225252362129396,
        lng: -7.9166511953951115,
        location: "Wicklow",
        information: `An amazing location to camp, as the surrounding area is one of the best hiking spots.`
    },





]



/* Functions to filter attractions by county locations */


let filteredBeaches = beachLocations.filter(function (currentElement) {

    return currentElement.location == "Cork";
});

console.log(filteredBeaches);

let filteredCaves = caveLocations.filter(function (currentElement) {

    return currentElement.location == "Kerry"
});

console.log(filteredCaves)



var currentInfoWindow = null;

/* -- Function to run google map -- */

function initMap(locations) {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        /* Code to remove terrain checkbox from map */
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

    /* -- If statement which loops through locations of in selected array, and shows markers depending on which location is selected. */

    if (locations) {
        for (let i = 0; i < locations.length; i++) {
            /* variable to store information about each marker when clicked */

            const contentString = '<div class= "pop-up-container">' +
                '<h5 class="pop-up-heading">' + locations[i].name + ", "
                + locations[i].location +
                '</h5>' + '<div class="pop-up-content">' + '<p class="pop-up-info">'
                + locations[i].information +
                '</p>' + '<img class="pop-up-image">'
                + locations[i].images + '</div>' +
                '</div>';

            const infowindow = new google.maps.InfoWindow({
                content: contentString,
            });

            const marker = new google.maps.Marker(
                {
                    position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
                    map: map,
                    title: locations[i].name,
                    animation: google.maps.Animation.DROP,
                });

            /* Event listener to show location information when user clicks on specfic marker, and to close previous marker when a new one is clicked*/
            google.maps.event.addListener(marker, 'click', function () {
                if (currentInfoWindow != null) {
                    currentInfoWindow.close();
                }
                infowindow.open(map, marker);
                currentInfoWindow = infowindow;
            });
        };
    };
};

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

