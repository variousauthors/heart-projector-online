module.exports = {
	TPCAcheckin: {
        bg: "TPCA-checkin.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [37, 88, 22, 70],
        area: "TPCA-checkin-areas.png",
        areaColors: {
            // exits
            h0000ff: { cmd: "enter", room: "TPCAHallway2", label: "exit", point: [18, 74], enterPoint: [11, 48], obstacle: false },
			hff0000: { cmd: "enter", room: "TPCAHallway2", label: "exit", point: [94, 44], enterPoint: [117, 48], obstacle: false },
			hf000ff: { cmd: "text", label: "sense", txt: "Someone cares about you.", align: "center", lines: 1, point: [25, 58], obstacle: false },
			hfff000: { cmd: "text", label: "marvel", txt: "That's unusual.", align: "center", lines: 1, point: [70, 45], obstacle: false },
        	h00ff00: { cmd: "text", label: "spectate", txt: "This wasn't in the medical books!", align: "center", lines: 1, point: [84, 45], obstacle: false },
			h7000ff: { cmd: "text", label: "wonder", txt: "A strong reaction?", align: "center", lines: 1, point: [83, 75], obstacle: false },
			h00feff: { cmd: "text", label: "consider", txt: "More questions to ask.", align: "center", lines: 1, point: [86, 70], obstacle: false },
        	hffae00: { cmd: "text", label: "observe", txt: "A curious sample.", align: "center", lines: 1, point: [90, 80], obstacle: false },
		},
		things: {
			mri: { file: "TPCA-checkin-mri.png", frames: 4, frameDelay: 5, position: [63, 17], depthAdjust:-2 },
            skelly: { file: "TPCA-checkin-skelly.png", frames: 4, frameDelay: 20, position: [79, 14], depthAdjust: -2},
            heart: { file: "TPCA-checkin-heart.png", frames: 2, frameDelay: 30, position: [103, 32]},
			middle: { file: "TPCA-checkin-middle.png", position: [47, 11], depthAdjust: 50, obstacle: true},	
		},
	},

}