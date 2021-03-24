module.exports = {
    TPCAMapRoom: {
        bg: "maproom1.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [3, 3, 125, 95],
        area: "maproom-areas.png",
		areaColors: {
            // exits
            hff0000: { cmd: "enter", room: "TPCAHallway1", label: "Unceded territory", point: [10, 19], enterPoint: [115, 43], obstacle: false },
        },
		things: {
            //sprite spreadsheets only 1 row ok?
			maproomExit: { file: "TPCAmaproomExit.png", position: [9, 18], depthAdjust: 0, obstacle: false },
            maproom1: { file: "maproom1.png", position: [0, 0], depthAdjust:-150, visible: false },
            maproom2: { file: "maproom2.png", position: [0, 0], depthAdjust:-150, visible: false },
            maproom3: { file: "maproom3.png", position: [0, 0], depthAdjust:-150, visible: false },
            maproom4: { file: "maproom4.png", position: [0, 0], depthAdjust:-150, visible: false },
			
		},
    },
}