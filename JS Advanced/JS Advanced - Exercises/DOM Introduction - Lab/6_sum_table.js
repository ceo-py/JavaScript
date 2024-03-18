function sumTable() {
    document.querySelector('#sum').textContent = ([...document.querySelectorAll('td')].slice(0, -2).filter((_, i) => i % 2 !== 0)
        .reduce((sum, x) => sum + parseFloat(x.textContent), 0)).toFixed(2)
}