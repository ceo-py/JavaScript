function pieceOfPie(pieFlavors, startFlavor, endFlavor) {
    let startIndex = pieFlavors.indexOf(startFlavor);
    let endIndex = pieFlavors.indexOf(endFlavor);
    if (startIndex === -1 || endIndex === -1) {
        return [];
    }
    return pieFlavors.slice(startIndex, endIndex + 1);
}