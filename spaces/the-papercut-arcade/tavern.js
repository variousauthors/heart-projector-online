module.exports = {
    //Tavern Rooms
    TPCATavern: {
        bg: "TavernBackground.png",
        avatarScale: 2,
	frames: 3,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [113, 86, 97, 77],
        area: "Tavern-animate-map.png",
        areaColors: {
            // exits
            hff0000: { cmd: "enter", room: "TPCAHallway1", label: "Hallway", point: [118, 85], enterPoint: [13, 43], obstacle: false },
	    hff00ff: { cmd: "enter", room: "TavernBasement", label: "Basement", point: [9, 84], enterPoint: [119, 86], obstacle: false },
            h0000ff: { cmd: "text", label: "The Bar", txt: "You're cut off!", align: "center", lines: 1, point: [45, 80], obstacle: true },
            h00ff00: { cmd: "text", label: "Regular", txt: "No, you are!", align: "center", lines: 1, point: [90, 80], obstacle: true },
	    hffff00: { cmd: "text", label: "Cozy Fireplace", align: "center", lines: 1, point: [90, 80], obstacle: true },
            hff7f00: { cmd: "text", label: "Portrait", txt: "Paintings can't talk!", align: "center", lines: 1, point: [92, 75] },

	},
        things: {
	    bartender: { file: "bartender.png", frames: 81, frameDelay: 30, position: [23, 57], depthAdjust: -2, visible:true },
            patron: { file: "tavern-patron.png", frames: 2, frameDelay: 150, position: [71, 57], depthAdjust: -2, visible:true },
	    roundtable: { file: "tavernroundtable.png", frames: 2, frameDelay: 50, position: [78, 84], depthAdjust: -2, visible:true, obstacle: true },
            longtable: { file: "tavernlongtable.png", frames: 1, frameDelay: 50, position: [8, 82], depthAdjust: -2, visible:true, obstacle: true },
        },
    },
	
    TavernBasement: {
        bg: "TavernBasementBackground.png",
        avatarScale: 2,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [120, 90, 110, 80],
        area: "Tavern-basement-map.png",
        areaColors: {
            // exits
            h00ffff: { cmd: "enter", room: "TPCATavern", label: "Tavern", point: [119, 86], enterPoint: [10, 86], obstacle: false },
            hffff00: { cmd: "text", label: "The Filthy Lyre", txt: "Pffft!", align: "center", lines: 1, point: [45, 90], obstacle: true },
            hff29ff: { cmd: "textRandom", label: "The Filthy Lyre", txt: "Hey! Paws off, y'animal!|Bugger!|That tickles!", align: "center", lines: 1, point: [45, 90], obstacle: false },
        },
        things: {
            //lyre
            lyre: { file: "TheFilthyLyre.png", frames: 2, frameDelay: 40, position: [21, 72], depthAdjust:3, visible: true },
        },
    },
}