function calculateStudy(numbers) {
    const length = Number(numbers.shift());
    const width = Number(numbers.shift());

    const corridor = 100;
    const deskWidth = 70;
    const deskLength = 120;

    const widthDesks = Math.floor(((width * 100) - corridor) / deskWidth);
    const lengthDesks = Math.floor((length * 100) / deskLength);
    const otherSpace = 3;

    const totalSpace = widthDesks * lengthDesks - otherSpace;
    console.log(totalSpace);

}

calculateStudy(['15', '8.9'])