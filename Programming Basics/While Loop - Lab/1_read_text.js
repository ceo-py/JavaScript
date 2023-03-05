function readWords(array) {

    let i = 0;

    while (array[i] && array[i] !== 'Stop') {
        console.log(array[i])
        i += 1
    }

}

readWords(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])