function matchPhoneNumber(phonesString) {
    console.log(phonesString[0].match(/\+359([ -])2\1([0-9]{3})\1([0-9]{4})\b/g).join(', '))
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])
