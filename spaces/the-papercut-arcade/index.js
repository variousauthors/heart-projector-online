const hallway = require("./hallway");
const checkIn = require("./check-in");
const ghostsOnly = require("./ghosts-only");
const mapRoom = require("./map-room");
const colourRoom = require("./colour-room");
const tavern = require("./tavern");
const fireRoom = require("./fire-room");
const washroom = require("./washroom");

module.exports = {
  ...hallway,
  ...checkIn,
  ...ghostsOnly,
  ...mapRoom,
  ...colourRoom,
  ...tavern,
  ...fireRoom,
  ...washroom,
}