
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
        name: "Kinbane Castle",
        lat: 55.229378402935396,
        lng: -6.291388746039393,
        location: "Antrim"
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
        name: "Dunluce Castle",
        lat: 55.21083931448046,
        lng: -6.5796063,
        location: "Antrim"
    },
    {
        name: "Trim Castle",
        lat: 53.55449698266906,
        lng: -6.7893993000155834,
        location: "Meath"
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