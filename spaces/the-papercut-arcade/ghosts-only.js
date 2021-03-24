module.exports = {
    TPCAGhostsOnlyRoom: {
        bg: "GhostsOnlyRoom.png",
        avatarScale: 1,
        tint: "#ffffff",
        pageBg: "#292929",
        bubblesY: 50,
        spawn: [17, 84, 60, 95],
        area: "GhostsOnlyRoom-areas.png",
        areaColors: {
            // exits
            hff0000: { cmd: "enter", room: "TPCAHallway", label: "out", point: [4, 15], enterPoint: [32, 16], obstacle: false },
        },
    },
}