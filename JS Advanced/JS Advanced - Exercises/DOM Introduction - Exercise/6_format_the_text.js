function formatTheText() {
    const text = document.getElementById("input").value.split(".").filter(Boolean);
    const output = [];

    for (let i = 0; i < text.length; i++) {
        const sentence = text[i];
        const isLastSentence = i === text.length - 1;

        let formattedSentence = sentence + ".";
        if (i % 3 === 0) {
            formattedSentence = `<p>${formattedSentence}`;
        } else if (i % 3 === 2 || isLastSentence) {
            formattedSentence += "</p>";
        }
        output.push(formattedSentence);
    }
    document.getElementById("output").innerHTML = output.join(" ");
}