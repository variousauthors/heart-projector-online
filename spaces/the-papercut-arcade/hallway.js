module.exports = {
    TPCAHallway: {
        bg: "TPCAhallway.png",
        avatarScale: 1.5,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [17, 84, 60, 95],
        area: "TPCAhallway-areas.png",
        areaColors: {
            // exits
            h7c7c7c: { cmd: "enter", room: "TPCAcheckin", label: "Check-Up Room", point: [8, 30], enterPoint: [38, 62], obstacle: false },
			      h00ffee: { cmd: "enter", room: "TPCAcheckin", label: "Go to work", point: [120, 30], enterPoint: [86, 67], obstacle: false },
            h00ff00: { cmd: "enter", room: "TPCAMapRoom", label: "Map Room", point: [121, 60], obstacle: false },
            hf000ff: { cmd: "enter", room: "TPCATavern", label: "The Filthy Lyre", point: [8, 61], enterPoint: [3, 50], obstacle: false },
            h0000ff: { cmd: "enter", room: "TPCAFireRoom", label: "Bonfire", point: [96, 13], enterPoint: [15, 94], obstacle: false },
            h55ffff: { cmd: "enter", room: "elevator", label: "Elevator", point: [66, 97], enterPoint: [64, 68], obstacle: false },
			      hff0000: { cmd: "enter", room: "TPCAColourRoom", label: "Lost and Found", point: [32, 12], enterPoint: [67, 94], obstacle: false },
			
			//placard
            hfeff00: { cmd: "text", label: "The Papercut Arcade", txt: "The Papercut Arcade collective works to create safer spaces to explore creativity and art with like-minded folks. We're proud to be sharing digital real estate with the folks at Heart Projector.", point: [66, 73], align: "center", lines: 6, },
        },
    },
}