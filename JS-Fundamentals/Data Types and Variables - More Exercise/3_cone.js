function cone(n1, n2) {
    const pi = Math.PI;

    const volume = (1 / 3) * pi * Math.pow(n1, 2) * n2;
    const surfaceArea = pi * n1 * (n1 + Math.sqrt(Math.pow(n1, 2) + Math.pow(n2, 2)));

    console.log(`volume = ${volume.toFixed(4)}`)
    console.log(`area = ${surfaceArea.toFixed(4)}`)
}

cone(3, 5)