module.exports = {
    TPCAFireRoom: {
        bg: "ForestPath-Exit.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [15, 94, 5, 77],
        area: "ForestPath-Exit-areas.png",
        areaColors: {
            // exits
            hf000ff: { cmd: "enter", room: "TPCAHallway2", label: "Hall", point: [7, 83], enterPoint: [96, 22], obstacle: false },
            hffff00: { cmd: "enter", room: "ForestPathShallow", label: "Forest", point: [113, 60], enterPoint: [12, 83], obstacle: false },
            h0000ff: { cmd: "text", label: "Sign", txt: "Forest Loop Trail", align: "center", lines: 1, point: [78, 67] },
        },
        things: {
            //scenery
            bush: { file: "ForestPath-Exit-bush.png", frames: 1, position: [0, 0], depthAdjust:3 },
            trees: { file: "ForestPath-Exit-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },
        },
    },
    
    ForestPathShallow: {
        bg: "ForestPath-Shallow.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [10, 80, 25, 85],
        area: "ForestPath-Shallow-areas.png",
        areaColors: {
            // exits
            hf000ff: { cmd: "enter", room: "TPCAFireRoom", label: "Back towards \"Civilization\"", point: [4, 86], enterPoint: [113, 60], obstacle: false },
            h0000ff: { cmd: "enter", room: "ForestPathFork", label: "Northwest", point: [30, 72], enterPoint: [125, 87], obstacle: false },
            hffff00: { cmd: "enter", room: "ForestPathLoop", label: "Northeast", point: [101, 67], enterPoint: [6, 87], obstacle: false },
             h00fff0: { cmd: "enter", room: "ForestPathLakefront", label: "Towards the Lake", point: [125, 88], enterPoint: [6, 88], obstacle: false },
            hff0000: { cmd: "text", label: "Sign", txt: "Loop Trail Northwest", align: "center", lines: 1, point: [41, 75] },
            h000fff: { cmd: "text", label: "Sign", txt: "Loop Trail Northeast", align: "center", lines: 1, point: [107, 70] },
        },
        things: {
            //scenery
            trees: { file: "ForestPath-Shallow-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },
        },
    },

    ForestPathFork: {        bg: "ForestPath-Fork-smoke.png",        frames: 3,        frameDelay: 50,        avatarScale: 2,        tint: "#ffffff",        pageBg: "#292929",        bubblesY: 50,        spawn: [127, 88, 108, 80],        area: "ForestPath-Fork-areas.png",        areaColors: {            // exits            h00ff00: { cmd: "enter", room: "ForestPathLakeWest", label: "West", point: [12, 86],  enterPoint: [112, 87], obstacle: false },            h0000ff: { cmd: "enter", room: "Bonfire", label: "Northwest", point: [25, 63],  enterPoint: [62, 96], obstacle: false },            hfff000: { cmd: "enter", room: "ForestPathRest", label: "Northeast", point: [93, 64],  enterPoint: [17, 80], obstacle: false },            hf000ff: { cmd: "enter", room: "ForestPathShallow", label: "Southeast", point: [118, 87],  enterPoint: [24, 69], obstacle: false },               },        things: {            //scenery            copse: { file: "ForestPath-Fork-copse.png", frames: 1, position: [0, 0], depthAdjust:-25 },            trees: { file: "ForestPath-Fork-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },        },    },

    ForestPathLakefront: {
        bg: "ForestPath-Lakefront.png",
        frames: 4,
        frameDelay: 40,
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [75, 75, 63, 68],
        area: "ForestPath-Lakefront-areas.png",
        areaColors: {
            // exits
           h0000ff: { cmd: "enter", room: "ForestPathLakeBridge", label: "Bridge", point: [125, 86],  enterPoint: [4, 88], obstacle: false },
           hf000ff: { cmd: "enter", room: "ForestPathShallow", label: "Forest", point: [6, 87], enterPoint: [125, 93], obstacle: false },
           hffff00: { cmd: "text", label: "Lake Pixel", txt: "", align: "center", lines: 1, point: [69, 64], obstacle: false},
        },
        things: {
            //scenery
            trees: { file: "ForestPath-Lakefront-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },
        },
    },

    ForestPathLakeBridge: {
        bg: "ForestPath-Lakebridge.png",
        frames: 3,
        frameDelay: 40,
        avatarScale: 2.25,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [30, 83, 7, 80],
        area: "ForestPath-Lakebridge-areas.png",
        areaColors: {
            // exits
           hffff00: { cmd: "enter", room: "ForestPathLakefront", label: "Lake Path Entrance", point: [6, 84],  enterPoint: [125, 86], obstacle: false },
           hff00ff: { cmd: "enter", room: "ForestPathSwamp", label: "North", point: [85, 48], enterPoint: [89, 89], obstacle: false },
           h00ffff: { cmd: "enter", room: "ForestPathPeek", label: "Lake Pixel", point: [17, 78], enterPoint: [112, 22], obstacle: false },
           hff0000: { cmd: "text", label: "Lake Pixel", txt: "The water sparkles in the moonlight", align: "center", lines: 1, point: [43, 71], obstacle: false},
           h0000ff: { cmd: "text", label: "Lake Pixel", txt: "It looks deep and muddy over here.", align: "center", lines: 1, point: [25, 88], obstacle: false},
           h00ff00: { cmd: "text", label: "Warning Sign", txt: "The sign reads: \nSwim at Your Own Risk.", align: "center", lines: 2, point: [37, 77], obstacle: false},
        },
        things: {
            //scenery
            frontbarrier: { file: "ForestPath-LakeBridge-frontbarrier.png", frames: 1, position: [60, 60], depthAdjust:126 },
            backbarrier: { file: "ForestPath-LakeBridge-backbarrier.png", frames: 1, position: [44, 44], depthAdjust:1 },
        },
    },

    ForestPathSwamp: {
        bg: "ForestPath-Swamp.png",
        frames: 1,
        frameDelay: 40,
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [92, 92, 73, 77],
        area: "ForestPath-Swamp-areas.png",
        areaColors: {
            // exits
           h00ffcc: { cmd: "enter", room: "ForestPathLakeBridge", label: "South", point: [90, 92],  enterPoint: [85, 48], obstacle: false },
           h0000ff: { cmd: "enter", room: "ForestPathLakeNortheast", label: "Forest", point: [60, 48],  enterPoint: [90, 92], obstacle: false },
           hff0000: { cmd: "enter", room: "ForestPathWaterfall", label: "East", point: [118, 71],  enterPoint: [8, 60], obstacle: false },
           h00ffff: { cmd: "text", label: "Sign", txt: "Lake Loop Trail North", align: "center", lines: 1, point: [81, 64], obstacle: false},
           hffff00: { cmd: "text", label: "Sign", txt: "Lake Pixel", align: "center", lines: 1, point: [81, 64], obstacle: false},
           h00ff00: { cmd: "text", label: "Sign", txt: "Pixel Falls", align: "center", lines: 1, point: [81, 64], obstacle: false},
           hff00ff: { cmd: "text", label: "Wetlands", txt: "Digiskunk Cabbage Swamp", align: "center", lines: 1, point: [65, 70], obstacle: false},
        },
        things: {
            //scenery
            marshbarrierfront: { file: "ForestPath-Swamp-leftBarrier.png", frames: 1, position: [53, 41], depthAdjust:126 },
            marshbarrierback: { file: "ForestPath-Swamp-rightBarrier.png", frames: 1, position: [91, 66], depthAdjust:-7 },
        },
    },

   ForestPathWaterfall: {
        bg: "ForestPath-Waterfall.png",
        frames: 6,
        frameDelay: 60,
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [14, 60, 5, 55],
        area: "ForestPath-Waterfall-areas.png",
        areaColors: {
            // exits
            h00ff00: { cmd: "enter", room: "ForestPathSwamp", label: "Swamp", point: [7, 57],  enterPoint: [118, 71], obstacle: false },
            hffff00: { cmd: "enter", room: "ForestWaterfallCave", label: "", txt: "You see something between the boulders...", align: "center", lines: 2, point: [75, 50], enterPoint: [7, 46], obstacle: false}, 
            hff00ff: { cmd: "enter", room: "ForestPathWaterfall2", label: "Lilypads", txt: "", align: "center", lines: 2, obstacle: false},     
            h00ffff: { cmd: "enter", room: "ForestPathWaterfall2", label: "Lilypads", txt: "", align: "center", lines: 2, obstacle: false},
            hff0000: { cmd: "text", label: "Waterfall", txt: "", align: "center", lines: 2, obstacle: false},  
            h0000ff: { cmd: "text", label: "", txt: "You jump down onto \nthe slippery rock.", align: "center", lines: 2, point: [43, 65], obstacle: false}, 
        },
        things: {
            //scenery
            copse: { file: "ForestPath-Waterfall-barrier.png", frames: 1, position: [0, 51], depthAdjust:6 },
            trees: { file: "ForestPath-Waterfall-waterfall.png", frames: 6, frameDelay: 10, position: [77, 0], depthAdjust:-5 },
        },
    },

   ForestPathWaterfall2: {
        bg: "ForestPath-Waterfall.png",
        frames: 6,
        frameDelay: 60,
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [14, 60, 5, 55],
        area: "ForestPath-Waterfall-areas.png",
        areaColors: {
                       // exits
            h00ff00: { cmd: "enter", room: "ForestPathSwamp", label: "Swamp", point: [7, 57],  enterPoint: [118, 71], obstacle: false },
            hffff00: { cmd: "enter", room: "ForestWaterfallCave", label: "", txt: "You see something between the boulders...", align: "center", lines: 2, point: [75, 50], enterPoint: [7, 46], obstacle: false}, 
            hff00ff: { cmd: "enter", room: "ForestPathWaterfall2", label: "Lilypads", txt: "", align: "center", lines: 2, obstacle: false},     
            h00ffff: { cmd: "enter", room: "ForestPathWaterfall2", label: "Lilypads", txt: "", align: "center", lines: 2, obstacle: false},
            hff0000: { cmd: "text", label: "Waterfall", txt: "", align: "center", lines: 2, obstacle: false},  
            h0000ff: { cmd: "text", label: "", txt: "You jump down onto \nthe slippery rock.", align: "center", lines: 2, point: [43, 65], obstacle: false}, 
        },
        things: {
            //scenery
            copse: { file: "ForestPath-Waterfall-barrier.png", frames: 1, position: [0, 51], depthAdjust:6 },
            trees: { file: "ForestPath-Waterfall-waterfall.png", frames: 6, frameDelay: 10, position: [77, 0], depthAdjust:-5 },
        },
    },


    ForestWaterfallCave: {
        bg: "ForestWaterfall-Cave.png",
        frames: 32,
        frameDelay: 40,
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        secret: true,
        spawn: [23, 50, 11, 46],
        area: "ForestWaterfall-Cave-areas.png",
        areaColors: {
            // exits
            hff00ff: { cmd: "enter", room: "ForestPathWaterfall", label: "Outside", point: [8, 46],  enterPoint: [75, 50], obstacle: false },
            h0000ff: { cmd: "text", label: "MSL Interpreter", txt: "You watch the interpreter. \nMermaid Sign Language seems \nto use a lot of sharp gestures\n and simple hand signs.", align: "center", lines: 4, point: [38, 46], obstacle: false},
            h00ffff: { cmd: "text", label: "Siren's Call, Season Finale", txt: "Live with Closed Captions", align: "center", lines: 1, point: [38, 46], obstacle: false},      
        },
        things: {
            //scenery
            copse: { file: "ForestWaterfall-Cave-waterfall.png", frames: 12, frameDelay: 30, position: [0, 0], depthAdjust:126 },
        },
    },


    ForestPathPeek: {
        bg: "ForestPath-Peek.png",
        frames: 3,
        frameDelay: 40,
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        secret: true,
        spawn: [110, 30, 105, 15],
        area: "ForestPath-Peek-areas.png",
        areaColors: {
            // exits
           hff0000: { cmd: "enter", room: "ForestPathLakeBridge", label: "Back Up", point: [110, 30],  enterPoint: [17, 78], obstacle: false },
           hff00ff: { cmd: "enter", room: "ForestLakeLitter", label: "??", point: [110, 31],  enterPoint: [110, 30], obstacle: false },
	 },
	things: {
            //scenery
            underwater: { file: "ForestPath-Peek.png", frames: 3, frameDelay: 40, position: [0, 0], depthAdjust:126 },       
	 },
    },


    ForestLakeLitter: {
        bg: "ForestLakeLitter.png",
        frames: 3,
        frameDelay: 40,
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        secret: true,
        spawn: [110, 30, 105, 15],
        area: "ForestLakeLitter-areas.png",
        areaColors: {
            // exits
           hff0000: { cmd: "enter", room: "ForestPathPeek", label: "Back Up", point: [110, 30],  enterPoint: [110, 30], obstacle: false },
	 },
	things: {
            //scenery
            litter: { file: "ForestLakeLitter.png", frames: 1, position: [0, 0], depthAdjust:126 },       
	 },
    },

    ForestPathLakeNortheast: {
        bg: "ForestPath-LakeLoop-Northeast.png",
        frames: 3,
        frameDelay: 50,
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [89, 92, 77, 79],
        area: "ForestPath-LakeLoop-Northeast-areas.png",
        areaColors: {
            // exits
            h00ffff: { cmd: "enter", room: "ForestPathLakeNorthFork", label: "West", point: [12, 82],  enterPoint: [119, 82], obstacle: false },
            hff00ff: { cmd: "enter", room: "ForestPathSwamp", label: "South", point: [96, 93],  enterPoint: [60, 48], obstacle: false },
            h00ff00: { cmd: "text", label: "Sign", txt: "Lake Loop Trail West", align: "center", lines: 1, point: [86, 79] },
            hff0000: { cmd: "text", label: "Sign", txt: "Lake Loop Trail East \nLake Pixel 500 M", align: "center", lines: 2, point: [86, 79] },

        },
	things: {
            //scenery
            litter: { file: "ForestPath-LakeLoop-Northeast-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },       
	 },
    }, 

ForestPathLakeNorthFork: {
        bg: "ForestPath-LakeLoop-NorthFork.png",
        frames: 1,
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [77, 86, 61, 81],
        area: "ForestPath-LakeLoop-NorthFork-areas.png",
        areaColors: {
            // exits
            hf000ff: { cmd: "enter", room: "ForestPathNorthwest", label: "West", point: [11, 88],  enterPoint: [117, 82], obstacle: false },
            h0000ff: { cmd: "enter", room: "ForestPathLakeNortheast", label: "East", point: [119, 82],  enterPoint: [12, 82], obstacle: false },
            h00ff00: { cmd: "enter", room: "ForestPathRest", label: "South", point: [70, 90],  enterPoint: [50, 60], obstacle: false },
            hff0000: { cmd: "text", label: "Sign", txt: "Lake Loop Trail West", point: [73, 83], obstacle: false },
            h00ffff: { cmd: "text", label: "Sign", txt: "Rest Area \nForest Loop Trail", lines: 2, point: [73, 83], obstacle: false },
            hffff00: { cmd: "text", label: "Sign", txt: "Lake Loop Trail East \nLake Pixel 1KM", lines: 2, point: [73, 83], obstacle: false },
        },
        things: {
            //scenery,
            trees: { file: "ForestPath-LakeLoop-Northfork-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },
        },
    },

    ForestPathNorthwest: {
        bg: "ForestPath-LakeLoop-Northwest.png",
        frames: 1,
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [89, 92, 77, 79],
        area: "ForestPath-LakeLoop-Northwest-areas.png",
        areaColors: {
            // exits
            h00ffff: { cmd: "enter", room: "ForestPathLakeNorthFork", label: "East", point: [117, 82],  enterPoint: [11, 88], obstacle: false },
            hff00ff: { cmd: "enter", room: "ForestPathLakeWest", label: "South", point: [40, 90],  enterPoint: [55, 61], obstacle: false },
            h00ff00: { cmd: "text", label: "Sign", txt: "Lake Loop Trail East", align: "center", lines: 1, point: [60, 79] },
            hff0000: { cmd: "text", label: "Sign", txt: "Lake Loop Trail South", align: "center", lines: 1, point: [60, 79] },
        },
        things: {
            //scenery,
            trees: { file: "ForestPath-LakeLoop-Northwest-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },
        },
    },

    ForestPathLakeWest: {
        bg: "ForestPath-LakeLoop-West.png",
        frames: 1,
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [70, 86, 47, 70],
        area: "ForestPath-LakeLoop-West-areas.png",
        areaColors: {
            // exits
            h00ffff: { cmd: "enter", room: "ForestPathFork", label: "East", point: [116, 83],  enterPoint: [20, 86], obstacle: false },
            hff00ff: { cmd: "enter", room: "ForestPathNorthwest", label: "North", point: [55, 61],  enterPoint: [40, 90], obstacle: false },
            h00ff00: { cmd: "text", label: "Sign", txt: "Forest Loop Trail", align: "center", lines: 1, point: [44, 78] },
            hff0000: { cmd: "text", label: "Sign", txt: "Lake Loop Trail", align: "center", lines: 1, point: [44, 79] },
        },
        things: {
            //scenery
            sign: { file: "ForestPath-LakeLoop-West-sign.png", frames: 1, position: [31, 58], depthAdjust:1 },
            trees: { file: "ForestPath-LakeLoop-West-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },
            birds: { file: "ForestPath-LakeLoop-West-birds.png", frames: 100, frameDelay: 15, position: [39, 21], depthAdjust:-7 },
        },
    },

    ForestPathRest: {
        bg: "ForestPath-Rest.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [107, 85, 76, 77],
        area: "ForestPath-Rest-areas.png",
        areaColors: {
            // exits
            h00ff00: { cmd: "enter", room: "ForestPathFork", label: "West", point: [11, 80],  enterPoint: [93, 64], obstacle: false },
            h0000ff: { cmd: "enter", room: "ForestPathLoop", label: "South", point: [124, 89],  enterPoint: [77, 55], obstacle: false },
            hf000ff: { cmd: "enter", room: "ForestPathLakeNorthFork", label: "North", point: [50, 60],  enterPoint: [71, 93], obstacle: false },
            hffff00: { cmd: "text", label: "Sign", txt: "Forest Loop Trail West", lines: 1, point: [35, 76], obstacle: false },
            hff0000: { cmd: "text", label: "Sign", txt: "Forest Loop Trail South", lines: 1, point: [35, 76], obstacle: false },
            h00ffff: { cmd: "text", label: "Sign", txt: "Lake Loop Trail", lines: 1, point: [35, 76], obstacle: false },
        },
        things: {
            //scenery
            copse: { file: "ForestPath-Rest-outhouse.png", frames: 1, position: [0, 0], depthAdjust:-10 },
            trees: { file: "ForestPath-Rest-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },
            sign: { file: "ForestPath-Rest-sign.png", frames: 1, position: [19, 49], depthAdjust:-7 },
        },
    }, 

    ForestPathLoop: {
        bg: "ForestPath-Loop.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [15, 90, 5, 77],
        area: "ForestPath-Loop-areas.png",
        areaColors: {
            // exits
            hf000ff: { cmd: "enter", room: "ForestPathShallow", label: "Southwest", point: [3, 80],  enterPoint: [101, 67], obstacle: false },       
            h0000ff: { cmd: "enter", room: "ForestPathRest", label: "North", point: [77, 55],  enterPoint: [124, 89], obstacle: false },
            hffff00: { cmd: "enter", room: "ForestPathFountain", label: "??", point: [123, 92],  enterPoint: [8, 58], obstacle: false },
            h00ff00: { cmd: "text", label: "Sign", txt: "Rest Area Ahead \nForest Loop Trail", align: "center", lines: 2, point: [71, 84] },
        },
        things: {
            //scenery
            trees: { file: "ForestPath-Loop-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },
        },
    }, 
    
    ForestPathFountain: {
        bg: "ForestPath-Fountain.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [65, 92, 32, 75],
        area: "ForestPath-Fountain-areas.png",
        secret: true,
        areaColors: {
            // exits
            hffff00: { cmd: "enter", room: "ForestPathLoop", label: "Forest Loop", point: [8, 58],  enterPoint: [92, 72], obstacle: false },
            h0ffff0: { cmd: "text", label: "Berries", txt: "The ripest berries are  \ntoo far back for you to  \npick them.", align: "center", lines: 3, point: [110, 89], obstacle: false },
            h0000ff: { cmd: "text", label: "Berries", txt: "These berries aren't ripe.", align: "center", lines: 1, point: [61, 75], obstacle: false },
            hff7d00: { cmd: "text", label: "Berries", txt: "You think these might \nbe blackberries?", align: "center", lines: 2, point: [111, 80], obstacle: false },
            hff000f: { cmd: "text", label: "Berries", txt: "These bushes shudder as you \napproach and then become suddenly still. \nHuh, weird.", align: "center", lines: 4, point: [119, 80], obstacle: false },
            h007d4b: { cmd: "text", label: "Berries", txt: "These berries are just right. \nYou swallow a fistful.", align: "center", lines: 2, point: [26, 86], obstacle: false },
            hccff00: { cmd: "text", label: "Berries", txt: "These snozzberries taste \nlike snozzberries.", align: "center", lines: 2, point: [34, 92], obstacle: false },
            h00ff00: { cmd: "text", label: "Fountain", txt: "There are coins in this fountain.", align: "center", lines: 1, point: [75, 89], obstacle: true },
            hf000ff: { cmd: "textRandom", label: "Fountain", txt: "You toss in a coin. \nMake a wish!|You see various coins, \n at the bottom of the fountain.|Your wish will come true! \nWell done!.|\"You are worthy of love\", \nthe fountain whispers back to you.|Your lucky numbers are \n3, 8, 38, 88|That wish is kinda weird, \nbut that's cool.|You like like that was \na waste of money.|You decide to \nkeep the coin.", align: "center", lines: 2, point: [75, 89], obstacle: false },
        },
        things: {
            //scenery
            bush: { file: "ForestPath-Fountain-bush.png", frames: 1, position: [0, 0], depthAdjust:3 },
            fountain: { file: "ForestPath-Fountain-waterfeature.png", frames: 5, frameDelay: 5, position: [77, 60], depthAdjust: -2, visible:true },
            berryBush: { file: "ForestPath-Fountain-berries.png", frames: 1, position: [0, 0], depthAdjust:125 },
            trees: { file: "ForestPath-Fountain-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },
        },
    },    
    
    Bonfire: {
        bg: "ForestPath-Bonfire.png",
        frames: 10,
        frameDelay: 90,
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [111, 93, 83, 71],
        area: "ForestPath-Bonfire-areas.png",
        areaColors: {
            // exits
            hf000ff: { cmd: "enter", room: "ForestPathFork", label: "Forest Path", point: [62, 96],  enterPoint: [25, 63], obstacle: false },      
        },
        things: {
             //scenery
            fire: { file: "ForestPath-Bonfire-fire.png", frames: 9, frameDelay: 15, position: [55, 3], depthAdjust:20 },
            smoke: { file: "ForestPath-Bonfire-smoke.png", frames: 11, frameDelay: 100, position: [52, 0], depthAdjust:-2 },
            marshmallow: { file: "marshmallow-100.png", frames: 100, frameDelay: 35, position: [36, 72], depthAdjust:1 },
            crossedLeg: { file: "crossed-leg-44.png", frames: 44, frameDelay: 60, position: [28, 65], depthAdjust:-2 },
            smoker: { file: "smoker-48.png", frames: 48, frameDelay:10, position: [85, 55], depthAdjust:1 },
            serviceAnimal: { file: "service-animal.png", frames: 189, frameDelay: 35, position: [75, 79], depthAdjust:1 },
        },
    }, 
    
    TPCAGreenRoom: {
        bg: "greenroom.png",
        avatarScale: 2,
	frames: 2,
	frameDelay: 40,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 160,
        spawn: [120, 90, 110, 80],
        area: "greenroom-map.png",
        areaColors: {
            // exits
	      h00ff00: { cmd: "enter", room: "Bonfire", label: "Bonfire", point: [9, 84], enterPoint: [119, 86], obstacle: false },
            //h00ffff: { cmd: "enter", room: "TPCATavern", label: "Tavern", point: [119, 86], enterPoint: [10, 86], obstacle: false },
            //hffff00: { cmd: "text", label: "The Filthy Lyre", txt: "Pffft!", align: "center", lines: 1, point: [45, 90], obstacle: true },
            //hff29ff: { cmd: "textRandom", label: "The Filthy Lyre", txt: "Hey! Paws off, y'animal!|Bugger!|That tickles!", align: "center", lines: 1, point: [45, 90], obstacle: false },
        },
    },


}