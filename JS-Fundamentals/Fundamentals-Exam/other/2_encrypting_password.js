function validateAndEncryptPasswords(input) {
    const n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        const password = input[i];
        const pattern = /^(.+)>([0-9]{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3})<\1$/;
        const match = password.match(pattern);

        if (match) {
            const encryptedPassword = match.slice(2, 6).join('');
            console.log(`Password: ${encryptedPassword}`);
        } else {
            console.log("Try another password!");
        }
    }
}


validateAndEncryptPasswords(["5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"])