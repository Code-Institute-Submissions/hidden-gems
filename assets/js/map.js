
let map;

let locations = [];

/* Object for Beach Locations in Ireland */

let beachLocations = [

    {
        name: "Kinnagoe Bay",
        lat: 55.25853092702544,
        lng: -7.012858804606512,
        location: "Donegal"
    },
    {
        name: "Kilcoole Beach",
        lat: 53.106289454811794,
        lng: -6.040521788447418,
        location: "Wicklow"
    },
    {
        name: "Bannow Island Beach",
        lat: 52.21088398432121,
        lng: -6.7969478144495055,
        location: "Wexford"
    },
    {
        name: "Stradbally Cove",
        lat: 52.1250195326743,
        lng: -7.4603243,
        location: "Waterford"
    },
    {
        name: "Sandscove Beach",
        lat: 51.55288092378668,
        lng: -8.898726986229178,
        location: "Cork"
    },
    {
        name: "Silver Strand Beach",
        lat: 54.66475793754972,
        lng: -8.776379246237571,
        location: "Cork"
    },
    {
        name: "White Strand",
        lat: 52.7471814438714,
        lng: -9.550395830692928,
        location: "Clare"
    },
    {
        name: "Forbogh Beach",
        lat: 53.24898348306867,
        lng: -9.220795398428837,
        location: "Galway"
    },
    {
        name: "Tramore Beach",
        lat: 55.17733341039231,
        lng: -8.022966473946783,
        location: "Donegal"
    },
    {
        name: "Ballyteige Burrow",
        lat: 52.20194249676858,
        lng: -6.642653162292428,
        location: "Wexford"
    },
    {
        name: "Annagh Bay",
        lat: 54.237603295991505,
        lng: -10.089105252884908,
        location: "Mayo"
    },
    {
        name: "Trá na Feadóigey",
        lat: 53.37520657748699,
        lng: -9.96164436609833,
        location: "Galway"
    },
    {
        name: "Galley Cove",
        lat: 51.46706896407998,
        lng: -9.731530106117043,
        location: "Cork"
    },
    {
        name: "Trá Bán",
        lat: 52.104736754106604,
        lng: -10.510461740099627,
        location: "Kerry"
    },
]

let lakeIslandLocations = [
    {
        name: "Assaranca Waterfall",
        lat: 54.75894239809791,
        lng: -8.51363053069293,
        location: "Donegal"
    },
    {
        name: "Shannon Pot",
        lat: 54.2355508148235,
        lng: -7.919257591528897,
        location: "Cavan"
    },
    {
        name: "Lough Ouler",
        lat: 53.06048077000485,
        lng: -6.373418235691949,
        location: "Wicklow"
    },
    {
        name: "Arranmore Island",
        lat: 54.988728913032745,
        lng: -8.535274641997912,
        location: "Donegal"
    },
    {
        name: "Coumshingaun Lough",
        lat: 52.250591233955824,
        lng: -7.524722204343533,
        location: "Waterford"
    },
    {
        name: "Bull Rock",
        lat: 51.59565594035093,
        lng: -10.275685867593861,
        location: "Cork"
    },
    {
        name: "Poll na bPéist - The Wormhole",
        lat: 53.12160328855573,
        lng: -9.754421034582185,
        location: "Galway"
    },
    {
        name: "Spike Island",
        lat: 51.83476100594525,
        lng: 8.28623414494465,
        location: "Cork"
    },
    {
        name: "Gougane Barra",
        lat: 51.83999149856706,
        lng: -9.31495176661951,
        location: "Cork"
    },
    {
        name: "Great Blasket Island",
        lat: 52.104736754106604,
        lng: -10.510461740099627,
        location: "Kerry"
    },
    {
        name: "Valentia Island",
        lat: 51.92137461381308,
        lng: -10.332660991813258,
        location: "Kerry"
    },

     
]

/* Object for castle locations in Ireland */

let castleLocations = [
    {
        name: "Doon Fort",
        lat: 54.82915812360112,
        lng: -8.464081532894864,
        location: "Donegal"
    },
    {
        name: "McDermott Castle",
        lat: 53.98958226630207,
        lng: -8.232584288008399,
        location: "Roscommon"
    },
    {
        name: `Cú Chulainn's Castle`,
        lat: 54.01436057901478,
        lng: -6.430028530692929,
        location: "Louth"
    },
    {   
        name: "Athasselabbey",
        lat: 52.47688365193911,
        lng: -7.995341765097741,
        location: "Tipperary"
    },
    {
        name: "Drimnagh Castle",
        lat: 53.325343615027215,
        lng: -6.332674000000001,
        location: "Dublin"
    },
    {
        name: "Leap Castle",
        lat: 53.028377353540435,
        lng: -7.808453400000001,
        location: "Offaly"
    },
    {
        name: "Cahir Castle",
        lat: 52.37504489132966,
        lng: -7.927203846039392,
        location: "Tipperary"
    },
    {
        name: "Rock of Cashel",
        lat: 52.520572449407766,
        lng: -7.890538030692929,
        location: "Tipperary"
    },
    {
        name: "Ross Castle",
        lat: 52.04132859084017,
        lng: -9.53143819,
        location: "Kerry"
    },
    {   
        name: "Fiddaun Castle",
        lat: 53.010595321460826,
        lng: -8.879343030372857,
        location: "Galway"
    },
    {
        name: "Trim Castle",
        lat: 53.55449698266906,
        lng: -6.7893993000155834,
        location: "Meath"
    },
    {
        name: "Rockstown Castle",
        lat: 52.567152714724244,
        lng: -8.55695135396061,
        location: "Limerick"
    },
]

/* Object for cave locations in Ireland */

let caveLocations = [
    {
        name: "Keshcorran Caves",
        lat: 54.060966340687045,
        lng: -8.449664538155785,
        location: "Sligo"
    },
    {
        name: `Bruce's Cave`,
        lat: 55.298518354390445,
        lng: -6.169222761385858,
        location: "Antrim"
    },
    {
        name: "Marble Arch Caves",
        lat: 54.25902655880112,
        lng: -7.813274946039392,
        location: "Fermanagh"
    },
    {
        name: "Crag Caves",
        lat: 52.24763355035248,
        lng: -9.443211170299001,
        location: "Kerry"
    },
    {
        name: "Dunmore Cave",
        lat: 52.73422200101786,
        lng: -7.246985815346465,
        location: "Kilkenny"
    },
    {
        name: "Doolin Cave",
        lat: 53.04110351270187,
        lng: -9.345149200042298,
        location: "Clare"
    },
    {
        name: "Aillwee Cave",
        lat: 53.089360163139524,
        lng: -9.14358156930707,
        location: "Clare"
    },
    {
        name: "Mitchelstown Cave",
        lat: 52.30417599030712,
        lng: -8.1088003,
        location: "Tipperary"
    },
    {
        name: "Pigeon Hole Cave",
        lat: 53.54275510201632,
        lng: -9.306707023516834,
        location: "Galway"
    },
    {
        name: "Pollnagollum–Poulelva",
        lat: 53.07786514887954,
        lng: -9.251255432960807,
        location: "Clare"
    },
    {
        name: "Oweynagat Cave",
        lat: 53.79695547961791,
        lng: -8.310280138614143,
        location: "Rosscommon"
    },
]


/* Object for cliff and mountains in Ireland */

let cliffMountainLocations = [
    {
        name: "Croaghaun",
        lat: 53.97977025770544,
        lng: -10.193419230770017,
        location: "Mayo"
    },
    {
        name: "Diamond Hill",
        lat: 53.548263166950626,
        lng: -9.91489406258491,
        location: "Galway"
    },
    {
        name: "Knockmealdown Mountains",
        lat: 52.22845940290453,
        lng: 7.915621227079968,
        location: "Waterford"
    },
    {
        name: "Kilbaha Cliffs",
        lat: 52.571955032395074,
        lng: -9.86175423418042,
        location: "Clare"
    },
    {
        name: "Devil’s Chimney",
        lat: 54.341005843280804,
        lng: -8.392807069307072,
        location: "Sligo"
    },
    {
        name: `Priest's leap`,
        lat: 51.79367893027667,
        lng: -9.47125517274581,
        location: "Kerry"
    },
    {
        name: "The Nine Stones",
        lat: 52.6360572209473,
        lng: -6.772222302314992,
        location: "Carlow"
    },
    {
        name: "Ballaghbeama Gap",
        lat: 51.94129256166348,
        lng: -9.81548710154434,
        location: "Kerry"
    },
    {
        name: "Slieve League Cliffs",
        lat: 54.640391412976356,
        lng: -8.682113067849912,
        location: "Donegal"
    },
    {
        name: "Ballycotton Cliffs",
        lat: 51.82495664593324,
        lng: -8.008259815384314,
        location: "Cork"
    },
    {
        name: "Geokaun Cliffs",
        lat: 51.92380608699363,
        lng: -10.34829668199812,
        location: "Kerry"
    },
]

 

/* -- Function to run google map -- */

function initMap(clickedLocation) {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: {
            lat: 53.39456916818927,
            lng: -7.927418401701575
        }
    });

    /* -- If statement which loops through locations of in selected array, and shows markers depending on which location is selected. */

    if (clickedLocation) {
        for (let i = 0; i < clickedLocation.length; i++) {
            const marker = new google.maps.Marker(
                {
                    position: new google.maps.LatLng(clickedLocation[i].lat, clickedLocation[i].lng),
                    map: map,
                    title: clickedLocation[i].name,
                    animation: google.maps.Animation.DROP,
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

