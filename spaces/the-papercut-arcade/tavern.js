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
        bg: "MouseTunnel.png",
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
	    hff0000: { cmd: "enter", label: "Blocked Tunnel", point: [66, 14], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelA3", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelA2", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
    },

    MouseTunnelA2: {
        bg: "MouseTunnel.png",
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
	    hff0000: { cmd: "enter", label: "Collapsed Tunnel", point: [66, 14], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelA4", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelA6", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
    },
    
    MouseTunnelA3: {
        bg: "MouseTunnel.png",
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
	    hff0000: { cmd: "enter", room: "MouseTunnelA5", label: "Mouse Tunnel", point: [66, 14], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", label: "Collapsed Tunnel", point: [116, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelA4", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
    },

    MouseTunnelA4: {
        bg: "MouseTunnel.png",
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
	    hff0000: { cmd: "enter", room: "MouseTunnelA3", label: "Mouse Tunnel", point: [66, 14], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelB2", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelA7", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
    },

    MouseTunnelA5: {
        bg: "MouseTunnel.png",
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
	    hff0000: { cmd: "enter", label: "Blocked Tunnel", point: [66, 14], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelB4", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelA3", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
    },

    MouseTunnelA6: {
        bg: "MouseTunnel.png",
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
	    hff0000: { cmd: "enter", room: "MouseTunnelA5", label: "Mouse Tunnel", point: [66, 14], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", label: "Collapsed Tunnel", point: [116, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelA4", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
    },

    MouseTunnelA7: {
        bg: "MouseTunnel.png",
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
	    hff0000: { cmd: "enter", room: "MouseTunnelA3", label: "Mouse Tunnel", point: [66, 14], enterPoint: [68, 50], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelB2", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelA7", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
    },

    MouseTunnelA8: {
        bg: "MouseTunnel.png",
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
	    hff0000: { cmd: "enter", label: "Blocked Tunnel", point: [66, 14], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelA3", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelA2", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
    },

    MouseTunnelA9: {
        bg: "MouseTunnel.png",
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
	    hff0000: { cmd: "enter", label: "Blocked Tunnel", point: [66, 14], obstacle: false },
	    h00ff00: { cmd: "enter", room: "MouseTunnelA3", label: "Mouse Tunnel", point: [116, 50], enterPoint: [68, 50], obstacle: false },
	    h0000ff: { cmd: "enter", room: "MouseTunnelA2", label: "Mouse Tunnel", point: [68, 92], enterPoint: [68, 50], obstacle: false },
        },
    },

    MouseTunnelB1: {
        bg: "MouseTunnel.png",
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
            //h00ffff: { cmd: "enter", room: "TPCATavern", label: "Tavern", point: [119, 86], enterPoint: [10, 86], obstacle: false },
            h0000ff: { cmd: "enter", room: "TavernBasement", label: "Mouse Hole", point: [67, 92], enterPoint: [27, 72], obstacle: false },
        },
        things: {
            //lyre
            //lyre: { file: "TheFilthyLyre.png", frames: 2, frameDelay: 40, position: [21, 72], depthAdjust:3, visible: true },
        },
    },
    
    MouseTunnelB2: {
        bg: "MouseTunnel.png",
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
            //h00ffff: { cmd: "enter", room: "TPCATavern", label: "Tavern", point: [119, 86], enterPoint: [10, 86], obstacle: false },
            h0000ff: { cmd: "enter", room: "TavernBasement", label: "Mouse Hole", point: [67, 92], enterPoint: [27, 72], obstacle: false },
        },
        things: {
            //lyre
            //lyre: { file: "TheFilthyLyre.png", frames: 2, frameDelay: 40, position: [21, 72], depthAdjust:3, visible: true },
        },
    },

    MouseTunnelB3: {
        bg: "MouseTunnel.png",
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
            //h00ffff: { cmd: "enter", room: "TPCATavern", label: "Tavern", point: [119, 86], enterPoint: [10, 86], obstacle: false },
            h0000ff: { cmd: "enter", room: "TavernBasement", label: "Mouse Hole", point: [67, 92], enterPoint: [27, 72], obstacle: false },
        },
        things: {
            //lyre
            //lyre: { file: "TheFilthyLyre.png", frames: 2, frameDelay: 40, position: [21, 72], depthAdjust:3, visible: true },
        },
    },

    MouseTunnelB4: {
        bg: "MouseTunnel.png",
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
            //h00ffff: { cmd: "enter", room: "TPCATavern", label: "Tavern", point: [119, 86], enterPoint: [10, 86], obstacle: false },
            h0000ff: { cmd: "enter", room: "TavernBasement", label: "Mouse Hole", point: [67, 92], enterPoint: [27, 72], obstacle: false },
        },
        things: {
            //lyre
            //lyre: { file: "TheFilthyLyre.png", frames: 2, frameDelay: 40, position: [21, 72], depthAdjust:3, visible: true },
        },
    },

    MouseTunnelB5: {
        bg: "MouseTunnel.png",
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
            //h00ffff: { cmd: "enter", room: "TPCATavern", label: "Tavern", point: [119, 86], enterPoint: [10, 86], obstacle: false },
            h0000ff: { cmd: "enter", room: "TavernBasement", label: "Mouse Hole", point: [67, 92], enterPoint: [27, 72], obstacle: false },
        },
        things: {
            //lyre
            //lyre: { file: "TheFilthyLyre.png", frames: 2, frameDelay: 40, position: [21, 72], depthAdjust:3, visible: true },
        },
    },

    MouseTunnelB6: {
        bg: "MouseTunnel.png",
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
            //h00ffff: { cmd: "enter", room: "TPCATavern", label: "Tavern", point: [119, 86], enterPoint: [10, 86], obstacle: false },
            h0000ff: { cmd: "enter", room: "TavernBasement", label: "Mouse Hole", point: [67, 92], enterPoint: [27, 72], obstacle: false },
        },
        things: {
            //lyre
            //lyre: { file: "TheFilthyLyre.png", frames: 2, frameDelay: 40, position: [21, 72], depthAdjust:3, visible: true },
        },
    },

    MouseTunnelB7: {
        bg: "MouseTunnel.png",
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
            //h00ffff: { cmd: "enter", room: "TPCATavern", label: "Tavern", point: [119, 86], enterPoint: [10, 86], obstacle: false },
            h0000ff: { cmd: "enter", room: "TavernBasement", label: "Mouse Hole", point: [67, 92], enterPoint: [27, 72], obstacle: false },
        },
        things: {
            //lyre
            //lyre: { file: "TheFilthyLyre.png", frames: 2, frameDelay: 40, position: [21, 72], depthAdjust:3, visible: true },
        },
    },

    MouseTunnelC1: {
        bg: "MouseTunnel.png",
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
            //h00ffff: { cmd: "enter", room: "TPCATavern", label: "Tavern", point: [119, 86], enterPoint: [10, 86], obstacle: false },
            h0000ff: { cmd: "enter", room: "TavernBasement", label: "Mouse Hole", point: [67, 92], enterPoint: [27, 72], obstacle: false },
        },
        things: {
            //lyre
            //lyre: { file: "TheFilthyLyre.png", frames: 2, frameDelay: 40, position: [21, 72], depthAdjust:3, visible: true },
        },
    },

    MouseTunnelC2: {
        bg: "MouseTunnel.png",
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
            //h00ffff: { cmd: "enter", room: "TPCATavern", label: "Tavern", point: [119, 86], enterPoint: [10, 86], obstacle: false },
            h0000ff: { cmd: "enter", room: "TavernBasement", label: "Mouse Hole", point: [67, 92], enterPoint: [27, 72], obstacle: false },
        },
        things: {
            //lyre
            //lyre: { file: "TheFilthyLyre.png", frames: 2, frameDelay: 40, position: [21, 72], depthAdjust:3, visible: true },
        },
    },

    MouseTunnelC3: {
        bg: "MouseTunnel.png",
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
            //h00ffff: { cmd: "enter", room: "TPCATavern", label: "Tavern", point: [119, 86], enterPoint: [10, 86], obstacle: false },
            h0000ff: { cmd: "enter", room: "TavernBasement", label: "Mouse Hole", point: [67, 92], enterPoint: [27, 72], obstacle: false },
        },
        things: {
            //lyre
            //lyre: { file: "TheFilthyLyre.png", frames: 2, frameDelay: 40, position: [21, 72], depthAdjust:3, visible: true },
        },
    },

    MouseTunnelC4: {
        bg: "MouseTunnel.png",
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
            //h00ffff: { cmd: "enter", room: "TPCATavern", label: "Tavern", point: [119, 86], enterPoint: [10, 86], obstacle: false },
            h0000ff: { cmd: "enter", room: "TavernBasement", label: "Mouse Hole", point: [67, 92], enterPoint: [27, 72], obstacle: false },
        },
        things: {
            //lyre
            //lyre: { file: "TheFilthyLyre.png", frames: 2, frameDelay: 40, position: [21, 72], depthAdjust:3, visible: true },
        },
    },

    MouseTunnelC5: {
        bg: "MouseTunnel.png",
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
            //h00ffff: { cmd: "enter", room: "TPCATavern", label: "Tavern", point: [119, 86], enterPoint: [10, 86], obstacle: false },
            h0000ff: { cmd: "enter", room: "TavernBasement", label: "Mouse Hole", point: [67, 92], enterPoint: [27, 72], obstacle: false },
        },
        things: {
            //lyre
            //lyre: { file: "TheFilthyLyre.png", frames: 2, frameDelay: 40, position: [21, 72], depthAdjust:3, visible: true },
        },
    },

    MouseTunnelC6: {
        bg: "MouseTunnel.png",
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
            //h00ffff: { cmd: "enter", room: "TPCATavern", label: "Tavern", point: [119, 86], enterPoint: [10, 86], obstacle: false },
            h0000ff: { cmd: "enter", room: "TavernBasement", label: "Mouse Hole", point: [67, 92], enterPoint: [27, 72], obstacle: false },
        },
        things: {
            //lyre
            //lyre: { file: "TheFilthyLyre.png", frames: 2, frameDelay: 40, position: [21, 72], depthAdjust:3, visible: true },
        },
    },

    MouseTunnelC7: {
        bg: "MouseTunnel.png",
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
            //h00ffff: { cmd: "enter", room: "TPCATavern", label: "Tavern", point: [119, 86], enterPoint: [10, 86], obstacle: false },
            h0000ff: { cmd: "enter", room: "TavernBasement", label: "Mouse Hole", point: [67, 92], enterPoint: [27, 72], obstacle: false },
        },
        things: {
            //lyre
            //lyre: { file: "TheFilthyLyre.png", frames: 2, frameDelay: 40, position: [21, 72], depthAdjust:3, visible: true },
        },
    },

    MouseTunnelC8: {
        bg: "MouseTunnel.png",
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
            //h00ffff: { cmd: "enter", room: "TPCATavern", label: "Tavern", point: [119, 86], enterPoint: [10, 86], obstacle: false },
            h0000ff: { cmd: "enter", room: "TavernBasement", label: "Mouse Hole", point: [67, 92], enterPoint: [27, 72], obstacle: false },
        },
        things: {
            //lyre
            //lyre: { file: "TheFilthyLyre.png", frames: 2, frameDelay: 40, position: [21, 72], depthAdjust:3, visible: true },
        },
    },

    MouseTunnelC9: {
        bg: "MouseTunnel.png",
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
            //h00ffff: { cmd: "enter", room: "TPCATavern", label: "Tavern", point: [119, 86], enterPoint: [10, 86], obstacle: false },
            h0000ff: { cmd: "enter", room: "TavernBasement", label: "Mouse Hole", point: [67, 92], enterPoint: [27, 72], obstacle: false },
        },
        things: {
            //lyre
            //lyre: { file: "TheFilthyLyre.png", frames: 2, frameDelay: 40, position: [21, 72], depthAdjust:3, visible: true },
        },
    },

    MouseTunnelC10: {
        bg: "MouseTunnel.png",
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
            //h00ffff: { cmd: "enter", room: "TPCATavern", label: "Tavern", point: [119, 86], enterPoint: [10, 86], obstacle: false },
            h0000ff: { cmd: "enter", room: "TavernBasement", label: "Mouse Hole", point: [67, 92], enterPoint: [27, 72], obstacle: false },
        },
        things: {
            //lyre
            //lyre: { file: "TheFilthyLyre.png", frames: 2, frameDelay: 40, position: [21, 72], depthAdjust:3, visible: true },
        },
    },





}