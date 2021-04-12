const powellAndClark = require("./spaces/powell-and-clark");
const stairwell = require("./spaces/stairwell");
const heartProjector = require("./spaces/heart-projector");
const elevator = require("./spaces/elevator");
const thePapercutArcade = require("./spaces/the-papercut-arcade");

//settings are just variables that can be sent to the client from the server
//they are either related to the rooms or shared with the server 
module.exports.SETTINGS = {
    //if not specified by the url where is the starting point
    defaultRoom: "powellAndClark",
    //minimum time between talk messages enforced by both client and server
    ANTI_SPAM: 1000,
    //shows up at first non lurking login
    INTRO_TEXT: "Click/tap to move"
};

//miscellaneous assets to preload
module.exports.IMAGES = [

];

//miscellaneous sounds to preload
module.exports.SOUNDS = [
    ["beat1", "beat1.ogg"], //credit https://www.youtube.com/watch?v=ugLVpZm69DE
    ["beat2", "beat2.ogg"], // credit https://www.youtube.com/watch?v=dPdoxIz0w24
    ["beat3", "beat3.ogg"], //credit https://www.youtube.com/watch?v=XShEWT4MwJs
    ["DJStop", "DJStop.mp3"]
];

module.exports.ROOMS = {
    ...powellAndClark,
    ...stairwell,
    ...heartProjector,
    ...elevator,
    ...thePapercutArcade,
};