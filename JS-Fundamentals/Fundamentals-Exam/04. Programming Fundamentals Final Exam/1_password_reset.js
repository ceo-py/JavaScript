function passwordReset(input) {
    let [mainString, command] = [input.shift(), input.shift()];

    while (command !== "Done") {
        let nothingToReplace = false;

        if (command.includes("TakeOdd")) {
            mainString = mainString.split('').filter((_, index) => index % 2 !== 0).join('');
        } else {
            const [, indexOrSubstring, lengthOrSubstitute] = command.split(' ').map(x => isNaN(x) ? x : parseInt(x));

            if (command.includes("Cut")) {
                mainString = mainString.slice(0, indexOrSubstring) + mainString.slice(indexOrSubstring + lengthOrSubstitute);
            } else if (command.includes("Substitute")) {
                if (mainString.includes(indexOrSubstring)) {
                    mainString = mainString.split(indexOrSubstring).join(lengthOrSubstitute);
                } else {
                    console.log("Nothing to replace!");
                    nothingToReplace = true;
                }
            }
        }

        if (!nothingToReplace) {
            console.log(mainString);
        }

        command = input.shift();
    }

    console.log(`Your password is: ${mainString}`);

}