function numberConvertor() {
    const input = document.querySelector('#input');
    const output = document.querySelector('#result');
    const selectMenuTo = document.querySelector('#selectMenuTo');

    document.querySelector('button').addEventListener('click', () => {
        const number = Number(input.value);
        const selected = selectMenuTo.value;
        output.value = selected === 'hexadecimal' ? number.toString(16).toUpperCase() : number.toString(2);
    });

    selectMenuTo.innerHTML = `
        <option value="binary">Binary</option>
        <option value="hexadecimal">Hexadecimal</option>
    `;
}