module.exports = {
    TPCAWashRoom: {
        bg: "TPCAwashroomBackground.png",
        avatarScale: 3,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [14, 87, 11, 80],
        area: "TPCAwashroom-areas.png",
        areaColors: {
            // exits
            hff8800: { cmd: "enter", room: "TPCAHallway1", label: "Hall", point: [10, 84], enterPoint: [115, 80], obstacle: false },
	    // areas of note
            hbbcc88: { cmd: "text", label: "Hooks", txt: "At variable heights", align: "center", lines: 1, point: [19, 75], obstacle: false },
            h55ffff: { cmd: "text", label: "Didactic Panel", txt: "This reality gives us near unlimited real estate to imagine accessible spaces we can only wish for as an artist-run community. With the swipe of my stylus, I can carve out rooms, add fixtures, and host folks in a way that I could never afford to or build IRL. I wanted to imagine a place where, even when we didn't need to have every body's needs met, we could still make space for it. \n- Kay Slater.", align: "center", lines: 13, point: [11, 91], obstacle: false },
            h889922: { cmd: "text", label: "Visual Fire Alarm", txt: "For non-auditory awareness", align: "center", lines: 1, point: [8, 91], obstacle: false },
	    hff0000: { cmd: "text", label: "High Contrast Exit", txt: "", align: "center", lines: 1, point: [8, 91], obstacle: false },
	    hffccff: { cmd: "text", label: "\"Running Man Exit\"", txt: "Green Means Go", align: "center", lines: 1, point: [16, 81], obstacle: false },
	    h33aaaa: { cmd: "text", label: "High Contrast Baseboard", txt: "", align: "center", lines: 1, point: [54, 81], obstacle: false },
	    hff00ff: { cmd: "text", label: "High Contrast Flooring", txt: "", align: "center", lines: 1, point: [28, 78], obstacle: false },
	    h0000ff: { cmd: "text", label: "Tactile Walking Surface Indicator", txt: "", align: "center", lines: 1, point: [41, 79], obstacle: false },
	    hff99ff: { cmd: "text", label: "Paper Towels and Receptacle", txt: "Near the sink.", align: "center", lines: 1, point: [23, 73], obstacle: false },
	    hffeeff: { cmd: "text", label: "Repositionable Shelving", txt: "A place for bags and devices.", align: "center", lines: 1, point: [43, 76], obstacle: false },
	    hfcbbbb: { cmd: "text", label: "Automated Soap Dispenser", txt: "With unscented soap.", align: "center", lines: 1, point: [43, 76], obstacle: false },
	    h8bcccc: { cmd: "text", label: "Automated Fountain", txt: "With space for a bottle.", align: "center", lines: 1, point: [43, 76], obstacle: false },
	    hffddcc: { cmd: "text", label: "Repositionable Sink", txt: "With Lever Handle Faucet", align: "center", lines: 1, point: [43, 76], obstacle: false },
	    heebbcc: { cmd: "text", label: "Tiltable Mirror", txt: "With LED Lighting", align: "center", lines: 1, point: [43, 76], obstacle: false },
	    hccffcc: { cmd: "text", label: "Assistance Call Button", txt: "Easy to push", align: "center", lines: 1, point: [65, 76], obstacle: false },
	    hffaadd: { cmd: "text", label: "Power Outlet", txt: "At variable heights", align: "center", lines: 1, point: [65, 76], obstacle: false },
	    h00ff00: { cmd: "text", label: "Sling", txt: "U-Sling with Full Head Support", align: "center", lines: 1, point: [75, 80], obstacle: false },
	    hffff00: { cmd: "text", label: "Swing Away Grab Bar", txt: "", align: "center", lines: 1, point: [84, 75], obstacle: false },
	    hffffdd: { cmd: "text", label: "Sanitary Waste Container", txt: "Within reach but not in transit area.", align: "center", lines: 1, point: [84, 75], obstacle: false },
	    hffffcc: { cmd: "text", label: "Horizontal Grab Bar behind Toilet", txt: "", align: "center", lines: 1, point: [104, 79], obstacle: false },
	    hffff33: { cmd: "text", label: "Automated Flushing Mechanism", txt: "No touch flush.", align: "center", lines: 1, point: [104, 79], obstacle: false },
	    hffff99: { cmd: "text", label: "Padded Back Rest", txt: "Required for toilets with no back.", align: "center", lines: 1, point: [104, 79], obstacle: false },
	    hffffbb: { cmd: "text", label: "Toilet", txt: "Floor Mounted Back-to-Wall", align: "center", lines: 1, point: [104, 79], obstacle: false },
	    hffffaa: { cmd: "text", label: "Toilet Paper", txt: "Within reach.", align: "center", lines: 1, point: [104, 79], obstacle: false },
	    h00bb00: { cmd: "text", label: "L-Shaped Grab Bar", txt: "", align: "center", lines: 1, point: [106, 84], obstacle: false },
	    h008800: { cmd: "text", label: "Urinal", txt: "", align: "center", lines: 1, point: [116, 83], obstacle: false },
	    h002200: { cmd: "text", label: "Vertical Grab Bar", txt: "For both sides of the urinal.", align: "center", lines: 1, point: [116, 83], obstacle: false },
	    h77aaaa: { cmd: "text", label: "Colour Contrasted Wall", txt: "", align: "center", lines: 1, point: [100, 83], obstacle: false },
	    haabbaa: { cmd: "text", label: "Moveable Garbage Bin", txt: "Out of the way.", align: "center", lines: 1, point: [16, 93], obstacle: false },
	    h225522: { cmd: "text", label: "Baby Changing Table", txt: "", align: "center", lines: 1, point: [36, 93], obstacle: false },
	    haa22aa: { cmd: "text", label: "Adult Changing Table", txt: "", align: "center", lines: 1, point: [75, 93], obstacle: false },

        },

        things: {
            //scenery
            changingTables: { file: "TPCAwashroomeForeground.png", frames: 1, position: [0, 0], depthAdjust:3 },
	    sling: { file: "sling.png", frames: 1, position: [72, 25], depthAdjust:1 },
        },
    },

}