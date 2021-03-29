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
            hff29ff: { cmd: "textRandom", label: "The Filthy Lyre", txt: "\"Paws off, y'animal!\"|\"Bugger!\"|\"That tickles!\"|\"I'm so lonely.\"|\"My spoon is too big.\"|\"The mouse hole hides a secret.\"|\"You're not supposed to be down here!\"", align: "center", lines: 1, point: [45, 90], obstacle: false },
            h0000ff: { cmd: "enter", room: "MouseTunnelA1", label: "Mouse Hole", point: [26, 72], enterPoint: [68, 50], obstacle: false },
	    hff0000: { cmd: "enter", room: "MouseTunnelB1", label: "Mouse Hole", point: [27, 72], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelC1", label: "Mouse Hole", point: [28, 72], enterPoint: [68, 50], obstacle: false },
        },
        things: {
            //lyre
            lyre: { file: "TheFilthyLyre.png", frames: 2, frameDelay: 40, position: [21, 72], depthAdjust:3, visible: true },
        },
    },

    MouseTunnelA1: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", label: "Blocked Tunnel", point: [16, 51], obstacle: false },
	    hff0000: { cmd: "enter", label: "Blocked Tunnel", point: [70, 23], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelA3", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelA2", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
	things: {
            //front and blockages
            mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	    mouseBlockLeft: { file: "Mouse-block-left.png", frames: 1, frameDelay: 40, position: [3, 39], depthAdjust:-2, visible: true, obstacle: true},
	    mouseBlockUp: { file: "Mouse-block-up.png", frames: 1, position: [59, 1], depthAdjust:-2, visible: true, obstacle: true },
	
        },
    },

    MouseTunnelA2: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", label: "Blocked Tunnel", point: [16, 51], obstacle: false },
	    hff0000: { cmd: "enter", label: "Collapsed Tunnel", point: [70, 22], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelA4", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelA6", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
	things: {
            //front and blockages
            mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	    mouseBlockLeft: { file: "Mouse-block-left.png", frames: 1, frameDelay: 40, position: [3, 39], depthAdjust:-2, visible: true, obstacle: true},
	    mouseBlockUp: { file: "Mouse-block-up.png", frames: 1, position: [59, 1], depthAdjust:-2, visible: true, obstacle: true },
	
        },
    },
    
    MouseTunnelA3: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", label: "Collapsed Tunnel", point: [16, 51], obstacle: false },
	    hff0000: { cmd: "enter", room: "MouseTunnelA5", label: "Mouse Tunnel", point: [70, 5], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", label: "Collapsed Tunnel", point: [116, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelA4", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
	things: {
            //front and blockages
            mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	    mouseBlockLeft: { file: "Mouse-block-left.png", frames: 1, frameDelay: 40, position: [3, 39], depthAdjust:-2, visible: true, obstacle: true},
	    mouseBlockRight: { file: "Mouse-block-right.png", frames: 1, position: [93, 39], depthAdjust:-2, visible: true, obstacle: true },
	
        },
    },

    MouseTunnelA4: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", room: "MouseTunnelA2", label: "Mouse Tunnel", point: [16, 51], enterPoint: [68, 50], obstacle: false },
	    hff0000: { cmd: "enter", room: "MouseTunnelA3", label: "Mouse Tunnel", point: [70, 5], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelB2", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelA7", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
	things: {
            //front and blockages
            mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	},
    },

    MouseTunnelA5: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", label: "Blocked Tunnel", point: [25, 51], obstacle: false },
	    hff0000: { cmd: "enter", label: "Blocked Tunnel", point: [70, 22], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelB4", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelA3", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
	things: {
            //front and blockages
            mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	    mouseBlockLeft: { file: "Mouse-block-left.png", frames: 1, frameDelay: 40, position: [3, 39], depthAdjust:-2, visible: true, obstacle: true},
	    mouseBlockUp: { file: "Mouse-block-up.png", frames: 1, position: [59, 1], depthAdjust:-2, visible: true, obstacle: true },
	
        },
    },

    MouseTunnelA6: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", room: "stairwell", label: "A Way Out", point: [16, 51], enterPoint: [18, 36], obstacle: false },
	    hff0000: { cmd: "enter", room: "MouseTunnelA2", label: "Mouse Tunnel", point: [70, 5], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelA7", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", label: "Collapsed Tunnel", point: [68, 82], obstacle: false },
        },
	things: {
            //front and blockages
	    mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
            mouseBlockDown: { file: "Mouse-block-down.png", frames: 1, frameDelay: 40, position: [55, 83], depthAdjust:126, visible: true },	
        },
    },

    MouseTunnelA7: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", room: "MouseTunnelA6", label: "Mouse Tunnel", point: [16, 51], enterPoint: [68, 50], obstacle: false },
	    hff0000: { cmd: "enter", room: "MouseTunnelA4", label: "Mouse Tunnel", point: [70, 5], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelB6", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelA8", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
	things: {
            //front and blockages
            mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	},
    },

    MouseTunnelA8: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", room: "MouseTunnelA9", label: "Mouse Tunnel", point: [16, 51], enterPoint: [68, 50], obstacle: false },
	    hff0000: { cmd: "enter", room: "MouseTunnelA7", label: "Mouse Tunnel", point: [70, 5], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelB7", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", label: "Blocked Tunnel", point: [68, 92], obstacle: false },
        },
	things: {
            //front and blockages
	    mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
            mouseBlockDown: { file: "Mouse-block-down.png", frames: 1, frameDelay: 40, position: [55, 83], depthAdjust:126, visible: true },	
        },
    },

    MouseTunnelA9: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", label: "Blocked Tunnel", point: [16, 51], obstacle: false },
	    hff0000: { cmd: "enter", label: "Blocked Tunnel", point: [66, 22], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelA8", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", label: "Blocked Tunnel", point: [68, 92], obstacle: false },
        },
	things: {
            //front and blockages
	    mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	    mouseBlockLeft: { file: "Mouse-block-left.png", frames: 1, frameDelay: 40, position: [3, 39], depthAdjust:-2, visible: true, obstacle: true},
	    mouseBlockUp: { file: "Mouse-block-up.png", frames: 1, position: [59, 1], depthAdjust:-2, visible: true, obstacle: true },
            mouseBlockDown: { file: "Mouse-block-down.png", frames: 1, frameDelay: 40, position: [55, 83], depthAdjust:126, visible: true },	
        },
    },

    MouseTunnelB1: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", room: "MouseTunnelA3", label: "Mouse Tunnel", point: [16, 51], enterPoint: [68, 50], obstacle: false },
	    hff0000: { cmd: "enter", room: "MouseTunnelB4", label: "Mouse Tunnel", point: [70, 5], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelB3", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelB2", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
	things: {
            //front and blockages
            mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	},
    },
    
    MouseTunnelB2: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", room: "MouseTunnelA4", label: "Mouse Tunnel", point: [16, 51], enterPoint: [68, 50], obstacle: false },
	    hff0000: { cmd: "enter", label: "Collapsed Tunnel", point: [66, 14], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelC5", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelB6", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
	},
	things: {
            //front and blockages
            mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	    mouseBlockUp: { file: "Mouse-block-up.png", frames: 1, position: [59, 1], depthAdjust:-2, visible: true, obstacle: true },
	},
    },

    MouseTunnelB3: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", label: "Collapsed Tunnel", point: [16, 51], enterPoint: [68, 50], obstacle: false },
	    hff0000: { cmd: "enter", room: "MouseTunnelB5", label: "Mouse Tunnel", point: [70, 5], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", label: "Collapsed Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelC5", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
	things: {
            //front and blockages
            mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	    mouseBlockLeft: { file: "Mouse-block-left.png", frames: 1, frameDelay: 40, position: [3, 39], depthAdjust:-2, visible: true, obstacle: true},
	    mouseBlockRight: { file: "Mouse-block-right.png", frames: 1, position: [93, 39], depthAdjust:-2, visible: true, obstacle: true },
	
        },
    },

    MouseTunnelB4: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", room: "MouseTunnelA5", label: "Mouse Tunnel", point: [16, 51], enterPoint: [68, 50], obstacle: false },
	    hff0000: { cmd: "enter", room: "TPCAHallway2", label: "A Way Out", point: [70, 5], enterPoint: [112, 26], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelB5", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelA8", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
	things: {
            //front and blockages
	    mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
            mouseBlockDown: { file: "Mouse-block-down.png", frames: 1, frameDelay: 40, position: [55, 83], depthAdjust:126, visible: true },	
        },
    },

    MouseTunnelB5: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", room: "MouseTunnelB4", label: "Mouse Tunnel", point: [16, 51], enterPoint: [68, 50], obstacle: false },
	    hff0000: { cmd: "enter", label: "Blocked Tunnel", point: [66, 14], enterPoint: [70, 22], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelC4", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelB3", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
	things: {
            //front and blockages
            mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	    mouseBlockUp: { file: "Mouse-block-up.png", frames: 1, position: [59, 1], depthAdjust:-2, visible: true, obstacle: true },
	},
    },

    MouseTunnelB6: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", room: "MouseTunnelA7", label: "Mouse Tunnel", point: [16, 51], enterPoint: [68, 50], obstacle: false },
	    hff0000: { cmd: "enter", room: "MouseTunnelB2", label: "Mouse Tunnel", point: [70, 5], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelC6", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelB7", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
	things: {
            //front and blockages
            mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	},
    },

    MouseTunnelB7: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", room: "MouseTunnelA8", label: "Mouse Tunnel", point: [16, 51], enterPoint: [68, 50], obstacle: false },
	    hff0000: { cmd: "enter", room: "MouseTunnelB6", label: "Mouse Tunnel", point: [70, 5], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", label: "Unfinished Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "TavernBasement", label: "A Way Out", point: [68, 92], enterPoint: [27, 72], obstacle: false }, 
        },
	things: {
            //front and blockages
            mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	    mouseBlockRight: { file: "Mouse-block-right.png", frames: 1, position: [93, 39], depthAdjust:-2, visible: true, obstacle: true },
	
        },
    },

    MouseTunnelC1: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", room: "MouseTunnelB3", label: "Mouse Tunnel", point: [16, 51], enterPoint: [68, 50], obstacle: false },
	    hff0000: { cmd: "enter", room: "MouseTunnelC4", label: "Mouse Tunnel", point: [70, 5], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelC3", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelC2", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
	things: {
            //front and blockages
            mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	},
    },

    MouseTunnelC2: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", room: "MouseTunnelC5", label: "Mouse Tunnel", point: [16, 51], enterPoint: [68, 50], obstacle: false },
	    hff0000: { cmd: "enter", label: "Collapsed Tunnel", point: [66, 14], enterPoint: [70, 22], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelC10", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", label: "Blocked Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
	things: {
            //front and blockages
            mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	    mouseBlockUp: { file: "Mouse-block-up.png", frames: 1, position: [59, 1], depthAdjust:-2, visible: true, obstacle: true },
	    mouseBlockDown: { file: "Mouse-block-down.png", frames: 1, frameDelay: 40, position: [55, 83], depthAdjust:126, visible: true },
	},
    },

    MouseTunnelC3: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", label: "Collapsed Tunnel", point: [16, 51], enterPoint: [68, 50], obstacle: false },
	    hff0000: { cmd: "enter", room: "MouseTunnelC7", label: "Mouse Tunnel", point: [70, 5], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", label: "Unfinished Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", label: "Unfinished Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
	things: {
            //front and blockages
            mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	    mouseBlockLeft: { file: "Mouse-block-left.png", frames: 1, frameDelay: 40, position: [3, 39], depthAdjust:-2, visible: true, obstacle: true},
	    mouseBlockRight: { file: "Mouse-block-right.png", frames: 1, position: [93, 39], depthAdjust:-2, visible: true, obstacle: true },
	    mouseBlockDown: { file: "Mouse-block-down.png", frames: 1, frameDelay: 40, position: [55, 83], depthAdjust:126, visible: true },
	
        },
    },

    MouseTunnelC4: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", room: "MouseTunnelB5", label: "Mouse Tunnel", point: [16, 51], enterPoint: [68, 50], obstacle: false },
	    hff0000: { cmd: "enter", label: "Unfinished Tunnel", point: [70, 22], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelC7", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", label: "Collapsed Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
	things: {
            //front and blockages
            mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	    mouseBlockUp: { file: "Mouse-block-up.png", frames: 1, position: [59, 1], depthAdjust:-2, visible: true, obstacle: true },
	    mouseBlockDown: { file: "Mouse-block-down.png", frames: 1, frameDelay: 40, position: [55, 83], depthAdjust:126, visible: true },
	},
    },

    MouseTunnelC5: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", room: "MouseTunnelB2", label: "Mouse Tunnel", point: [16, 51], enterPoint: [68, 50], obstacle: false },
	    hff0000: { cmd: "enter", room: "MouseTunnelB3", label: "Mouse Tunnel", point: [70, 5], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelC2", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelC6", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
	things: {
            //front and blockages
            mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	},
    },

    MouseTunnelC6: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", room: "MouseTunnelB6", label: "Mouse Tunnel", point: [16, 51], enterPoint: [68, 50], obstacle: false },
	    hff0000: { cmd: "enter", room: "MouseTunnelC5", label: "Mouse Tunnel", point: [70, 5], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", room: "ForestPathFountain", label: "A Way Out", point: [116, 50], enterPoint: [109, 90], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelC8", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
	things: {
            //front and blockages
            mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	},
    },

    MouseTunnelC7: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", room: "MouseTunnelC4", label: "Mouse Tunnel", point: [16, 51], enterPoint: [68, 50], obstacle: false },
	    hff0000: { cmd: "enter", label: "Unfinished Tunnel", point: [70, 22], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", room: "oldspaceBar", label: "A Way Out", point: [116, 50], enterPoint: [19, 77], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelC3", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
	things: {
            //front and blockages
            mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	    mouseBlockUp: { file: "Mouse-block-up.png", frames: 1, position: [59, 1], depthAdjust:-2, visible: true, obstacle: true },
	},
    },

    MouseTunnelC8: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", label: "Blocked Tunnel", point: [16, 51], enterPoint: [68, 50], obstacle: false },
	    hff0000: { cmd: "enter", room: "MouseTunnelC6", label: "Mouse Tunnel", point: [70, 5], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelC9", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", label: "Unfinished Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
	things: {
            //front and blockages
            mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	    mouseBlockLeft: { file: "Mouse-block-left.png", frames: 1, frameDelay: 40, position: [3, 39], depthAdjust:-2, visible: true, obstacle: true},
	    mouseBlockDown: { file: "Mouse-block-down.png", frames: 1, frameDelay: 40, position: [55, 83], depthAdjust:126, visible: true },
	
        },
    },

    MouseTunnelC9: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", room: "MouseTunnelC8", label: "Mouse Tunnel", point: [16, 51], enterPoint: [68, 50], obstacle: false },
	    hff0000: { cmd: "enter", label: "Unfinished Tunnel", point: [70, 22], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", label: "Unfinished Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", label: "Unfinished Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
	things: {
            //front and blockages
            mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	    mouseBlockUp: { file: "Mouse-block-up.png", frames: 1, position: [59, 1], depthAdjust:-2, visible: true, obstacle: true },
	    mouseBlockRight: { file: "Mouse-block-right.png", frames: 1, position: [93, 39], depthAdjust:-2, visible: true, obstacle: true },
	    mouseBlockDown: { file: "Mouse-block-down.png", frames: 1, frameDelay: 40, position: [55, 83], depthAdjust:126, visible: true },
	
        },
    },

    MouseTunnelC10: {
        bg: "Mouse-back.png",
        avatarScale: 0.75,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [76, 59, 57, 42],
        area: "MouseTunnel-map.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", room: "MouseTunnelC2", label: "Mouse Tunnel", point: [16, 51], enterPoint: [68, 50], obstacle: false },
	    hff0000: { cmd: "enter", label: "Unfinished Tunnel", point: [70, 22], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", label: "Unfinished Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", label: "Unfinished Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
	things: {
            //front and blockages
            mouseFront: { file: "Mouse-front.png", frames: 1, frameDelay: 40, position: [0, 55], depthAdjust:126, visible: true },
	    mouseBlockUp: { file: "Mouse-block-up.png", frames: 1, position: [59, 1], depthAdjust:-2, visible: true, obstacle: true },
	    mouseBlockRight: { file: "Mouse-block-right.png", frames: 1, position: [93, 39], depthAdjust:-2, visible: true, obstacle: true },
	    mouseBlockDown: { file: "Mouse-block-down.png", frames: 1, frameDelay: 40, position: [55, 83], depthAdjust:126, visible: true },
	
        },
    },





}