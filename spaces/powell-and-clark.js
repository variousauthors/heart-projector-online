module.exports = {
  powellAndClark: {
    bg: "PowellAndClark.png",
    avatarScale: 2,
    tint: "#DAC7F0",
    pageBg: "#3b2751",
    bubblesY: 50,
    spawn: [5, 76, 70, 95],
    area: "PowellAndClark-areas.png",
    areaColors: {
      // exits
      h7eff00: { cmd: "enter", room: "stairwell", label: "Stairwell", point: [77, 80], enterPoint: [51, 98], obstacle: false },
      hff0000: { cmd: "enter", room: "elevator", label: "Entrance", point: [114, 89], enterPoint: [56, 73], obstacle: false },

      // interior objects
      he54cca: { cmd: "text", label: "by heart projector", txt: "by heart projector", align: "center", lines: 1, point: [14, 69], obstacle: true },
      ha500ff: { cmd: "text", lines: 2, txt: "by The Papercut Arcade \nthepapercutarcade.ca", align: "center", url: "https://thepapercutarcade.ca", label: "papercut", point: [40, 68], obstacle: false },
      h0000ff: { cmd: "text", label: "street", txt: "Unceded territory", align: "center", lines: 1, point: [50, 70], obstacle: false },
    }
  },
}