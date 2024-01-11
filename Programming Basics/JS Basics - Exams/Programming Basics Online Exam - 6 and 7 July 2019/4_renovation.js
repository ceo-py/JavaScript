function renovation(param) {
    const [heightWalls, widthWalls, surfaceNotToPaint] = [Number(param.shift()), Number(param.shift()), Number(param.shift())];

    const wallsTotalSurface = heightWalls * widthWalls * 4;
    let wallSurfaceToPaint = Math.ceil(wallsTotalSurface - (wallsTotalSurface * surfaceNotToPaint) / 100);
    let isWallNotPainted = true;

    while (isWallNotPainted) {
        const paintedSurface = param.shift();

        if (paintedSurface === "Tired!") {
            console.log(`${wallSurfaceToPaint} quadratic m left.`);
            isWallNotPainted = false;
        } else {
            const paintedSurfaceInt = parseInt(paintedSurface);
            wallSurfaceToPaint -= paintedSurfaceInt;

            if (wallSurfaceToPaint < 0) {
                console.log(`All walls are painted and you have ${Math.abs(wallSurfaceToPaint)} l paint left!`);
                isWallNotPainted = false;
            } else if (wallSurfaceToPaint === 0) {
                console.log("All walls are painted! Great job, Pesho!");
                isWallNotPainted = false;
            }
        }
    }
}

renovation([])