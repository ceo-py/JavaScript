function colorizeTable() {
    [...document.querySelectorAll('tr')].map((x , i) => i % 2 !== 0 ? x.style.backgroundColor = 'Teal': '')
}