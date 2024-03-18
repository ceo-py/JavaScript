function sumNumbers() {
    document.querySelector('#sum').value = eval([...document.querySelectorAll('input[type="text"]')]
        .slice(0, 2).map(x => parseFloat(x.value)).join('+'))
}