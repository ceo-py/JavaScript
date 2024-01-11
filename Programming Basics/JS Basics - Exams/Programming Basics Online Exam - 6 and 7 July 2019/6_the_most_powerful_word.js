function theMostPowerfullWord(param) {
    let endOfLastWorld = true;
    let mostPowerfulWord = "";
    let points = 0;
    let howLongIsTheWord = 0;
    while (endOfLastWorld) {
        const wordEnter = param.shift();
        let counter = 0;
        let totalWordPoints = 0;
        let bonusPoints = false;

        if (wordEnter === "End of words") {
            console.log(`The most powerful word is ${mostPowerfulWord} - ${points}`);
            endOfLastWorld = false;
        } else {
            howLongIsTheWord = wordEnter.length;

            for (const letter of wordEnter) {
                counter += 1;

                if (
                    (letter === "a" ||
                        letter === "e" ||
                        letter === "i" ||
                        letter === "o" ||
                        letter === "u" ||
                        letter === "y" ||
                        letter === "A" ||
                        letter === "E" ||
                        letter === "I" ||
                        letter === "O" ||
                        letter === "U" ||
                        letter === "Y") &&
                    counter === 1
                ) {
                    bonusPoints = true;
                }

                totalWordPoints += letter.charCodeAt(0);
            }

            if (bonusPoints) {
                totalWordPoints *= howLongIsTheWord;
            } else {
                totalWordPoints = Math.floor(totalWordPoints / howLongIsTheWord);
            }

            if (totalWordPoints > points) {
                points = totalWordPoints;
                mostPowerfulWord = wordEnter;
            }
        }
    }

}

theMostPowerfullWord([])