module.exports = {
    //Fire Rooms    
    
    TPCAFireRoom: {
        bg: "FireExit.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [15, 94, 5, 77],
        area: "FireExit-areas.png",
        areaColors: {
            // exits
            hf000ff: { cmd: "enter", room: "TPCAHallway", label: "Hall", point: [7, 83], enterPoint: [96, 22], obstacle: false },
            hffff00: { cmd: "enter", room: "ForestPathShallow", label: "Forest", point: [113, 60], enterPoint: [12, 83], obstacle: false },
            h0000ff: { cmd: "text", label: "Sign", txt: "Forest Loop Trail", align: "center", lines: 1, point: [78, 67] },
        },
        things: {
            //scenery
            bush: { file: "FireExit-bush.png", frames: 1, position: [0, 0], depthAdjust:3 },
            trees: { file: "FireExit-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },
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
            hf000ff: { cmd: "enter", room: "TPCAFireRoom", label: "Civilization", point: [4, 86], enterPoint: [113, 60], obstacle: false },
            h0000ff: { cmd: "enter", room: "ForestPathFork", label: "Forest Loop", point: [24, 69], enterPoint: [125, 87], obstacle: false },
            hffff00: { cmd: "enter", room: "ForestPathLoop", label: "Forest Loop", point: [101, 67], enterPoint: [3, 80], obstacle: false },
             h00fff0: { cmd: "enter", room: "ForestPathLakefront", label: "Lake", point: [125, 88], enterPoint: [125, 93], obstacle: false },
            hff0000: { cmd: "text", label: "Sign", txt: "Loop Trail North", align: "center", lines: 1, point: [41, 75] },
            h000fff: { cmd: "text", label: "Sign", txt: "Loop Trail East", align: "center", lines: 1, point: [107, 70] },
        },
        things: {
            //scenery
            trees: { file: "ForestPath-Shallow-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },
        },
    },

    ForestPathLakefront: {
        bg: "ForestPath-Lakefront.png",
        frames: 4,
        frameDelay: 40,
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [125, 93, 110, 80],
        area: "ForestPath-Lakefront-areas.png",
        areaColors: {
            // exits
            hf000ff: { cmd: "enter", room: "ForestPathFork", label: "Forest", point: [6, 87],  enterPoint: [4, 88], obstacle: false },
            h0000ff: { cmd: "enter", room: "ForestPathShallow", label: "Forest", point: [125, 86],  enterPoint: [125, 93], obstacle: false },
        },
        things: {
            //scenery
            trees: { file: "ForestPath-Lakefront-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },
        },
    },
    
    ForestPathFork: {
        bg: "ForestPath-Fork-smoke.png",
        frames: 3,
        frameDelay: 50,
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [127, 88, 108, 80],
        area: "ForestPath-Fork-areas.png",
        areaColors: {
            // exits
            h00ff00: { cmd: "enter", room: "ForestPathLakefront", label: "Lake", point: [4, 88],  enterPoint: [6, 87], obstacle: false },
            h0000ff: { cmd: "enter", room: "Bonfire", label: "Bonfire Pit", point: [25, 63],  enterPoint: [62, 96], obstacle: false },
            hfff000: { cmd: "enter", room: "ForestPathRest", label: "Forest Trail Loop", point: [93, 64],  enterPoint: [48, 60], obstacle: false },
            hf000ff: { cmd: "enter", room: "ForestPathShallow", label: "Forest Entrance", point: [125, 87],  enterPoint: [24, 69], obstacle: false },       
        },
        things: {
            //scenery
            copse: { file: "ForestPath-Fork-copse.png", frames: 1, position: [0, 0], depthAdjust:-25 },
            trees: { file: "ForestPath-Fork-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },
        },
    },

    ForestPathRest: {
        bg: "ForestPath-Rest.png",
        avatarScale: 2,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [107, 89, 76, 77],
        area: "ForestPath-Rest-areas.png",
        areaColors: {
            // exits
            hf000ff: { cmd: "enter", room: "ForestPathFork", label: "Forest Loop North", point: [51, 59],  enterPoint: [93, 64], obstacle: false },
            h0000ff: { cmd: "enter", room: "ForestPathLoop", label: "Forest Loop South", point: [124, 89],  enterPoint: [77, 55], obstacle: false },
        },
        things: {
            //scenery
            copse: { file: "ForestPath-Rest-outhouse.png", frames: 1, position: [0, 0], depthAdjust:-10 },
            trees: { file: "ForestPath-Rest-trees.png", frames: 1, position: [0, 0], depthAdjust:126 },
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
            hf000ff: { cmd: "enter", room: "ForestPathShallow", label: "Forest Entrance", point: [3, 80],  enterPoint: [101, 67], obstacle: false },       
            h0000ff: { cmd: "enter", room: "ForestPathRest", label: "Forest Loop", point: [77, 55],  enterPoint: [124, 89], obstacle: false },
            hffff00: { cmd: "enter", room: "ForestPathFountain", label: "??", point: [123, 92],  enterPoint: [8, 58], obstacle: false },
            h00ff00: { cmd: "text", label: "Sign", txt: "Rest Area Ahead", align: "center", lines: 1, point: [71, 84] },
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
            hf000ff: { cmd: "text", label: "Fountain", txt: "You toss in a coin. \nMake a wish!", align: "center", lines: 2, point: [75, 89], obstacle: false },
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
            log1: { file: "ForestPath-Bonfire-Log1.png", position: [39, 88], depthAdjust:1 },
            log2: { file: "ForestPath-Bonfire-Log2.png", position: [30, 71], depthAdjust:-2 },
            log3: { file: "ForestPath-Bonfire-Log3.png", position: [75, 89], depthAdjust:1 },
            log4: { file: "ForestPath-Bonfire-Log4.png", position: [95, 82], depthAdjust:1 },
        },
    }, 
    
    
    //End Kay Added January 2021
}