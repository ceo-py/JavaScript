function extractEmails(text) {
    const emailRegex = /(^|(?<=\s))([A-Za-z0-9])+([\.\-\_][A-Za-z0-9]+)*@([A-Za-z-]+)\.([A-Za-z-]+)([\.A-Za-z-])*(\b|(?=\s))/g;
    const matches = text.match(emailRegex);

    if (matches) {
        matches.forEach(email => console.log(email.trim()));
    }
}