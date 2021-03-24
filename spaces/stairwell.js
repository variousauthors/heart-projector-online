
module.exports = {
    stairwell: {
        bg: "Stairwell.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [17, 84, 60, 95],
        area: "Stairwell-areas.png",
        areaColors: {
            // exits
            h0000ff: { cmd: "enter", room: "stairwell2", label: "up", point: [81, 8], enterPoint: [61, 95], obstacle: false },
            hff0000: { cmd: "enter", room: "powellAndClark", label: "down", point: [61, 95], enterPoint: [72, 77], obstacle: false },
        },
		things: {
			candle1: { file: "Stairwell-candle1.png", frames: 3, frameDelay: 5, position: [9, 24], depthAdjust:10, obstacle: true },
            candle2: { file: "Stairwell-candle2.png", frames: 3, frameDelay: 8, position: [110, 55], depthAdjust: -20, obstacle: true},
		},
	},
	
	    stairwell2: {
        bg: "Stairwell.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [17, 84, 60, 95],
        area: "Stairwell-areas.png",
        areaColors: {
            // exits
            h0000ff: { cmd: "enter", room: "stairwell", label: "up", point: [81, 8], enterPoint: [61, 95], obstacle: false },
            hff0000: { cmd: "enter", room: "powellAndClark", label: "down", point: [61, 95], enterPoint: [72, 77], obstacle: false },
        },
		things: {
			candle1: { file: "Stairwell-candle2.png", frames: 3, frameDelay: 6, position: [14, 25], depthAdjust:10, obstacle: true },
            candle2: { file: "Stairwell-candle1.png", frames: 3, frameDelay: 10, position: [100, 52], depthAdjust: -20, obstacle: true},
		},
	},
}
