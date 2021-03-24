module.exports = {
	    TPCAColourRoom: {
        bg: "colourRoom.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 40,
        spawn: [17, 84, 60, 95],
        area: "colourRoom-areas.png",
        areaColors: {
            // exits
            hff0000: { cmd: "enter", room: "TPCAHallway", label: "out", point: [65, 94], enterPoint: [32, 16], obstacle: false },
        },
		things: {
			instrument: {file: "colourRoom-Music.png", position: [96, 15], obstacle: true, lightEmissionColour: "#e8d42e" },
			voice: {file: "colourRoom-Voice.png", position: [20, 73], frames: 3, frameDelay: 11, obstacle: true, lightEmissionColour: "#e82e3a"},
			blender: {file: "colourRoom-Blender.png", position: [95, 58], obstacle: true, lightEmissionColour: "#73dff4"},
			Footstep: {file: "colourRoom-Footstep.png", position: [21, 21], frames: 3, frameDelay: 10, obstacle: true, lightEmissionColour: "#ac73f4" },
		},
    },
    
}