function rightPlace(missingString, characterToFind, fullString) {
    const symbolPosition = missingString.indexOf('_')
    console.log(characterToFind === fullString[symbolPosition]? 'Matched': 'Not Matched')
}

rightPlace('Str_ng', 'i', 'String')