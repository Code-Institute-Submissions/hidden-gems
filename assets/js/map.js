
let map;

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
]



/* -- Function to run google map -- */

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: {
            lat: 53.39456916818927,
            lng: -7.927418401701575
        }
    });
};