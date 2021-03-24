module.exports = {
    elevator: {
        bg: "elevator.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [72, 73, 53, 63],
        area: "elevator-areas.png",
        areaColors: {
            // exits
            h00ffff: { cmd: "enter", room: "oldspaceLounge", label: "Heart Projector", point: [66, 60], enterPoint: [72, 99], obstacle: false },
            hff002a: { cmd: "enter", room: "TPCAHallway1", label: "The Papercut Arcade", point: [66, 60], enterPoint: [89, 95], obstacle: false },
			h0000ff: { cmd: "enter", room: "powellAndClark", label: "outside", point: [66, 60], enterPoint: [110, 90], obstacle: false },
		},
		things: {
			elevatorol: { file: "elevator-OL.png", position: [65, 39], depthAdjust: 126 },
        },
    },
}