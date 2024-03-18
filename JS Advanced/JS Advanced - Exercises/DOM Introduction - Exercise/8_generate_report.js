function generateReport() {
    const selectedColumns = Array.from(document.querySelectorAll('thead > tr > th > input'));
    const tableContent = Array.from(document.querySelectorAll('tbody > tr'));
    const output = document.querySelector('#output');
    const fieldsToDisplay = {};

    output.value = '';

    function addFields() {
        for (const key in fieldsToDisplay) {
            tableContent.forEach((row, index) => {
                resultOutput[index][key] = row.querySelectorAll('td')[fieldsToDisplay[key]].textContent;
            });
        }
    }

    selectedColumns.forEach((checkbox, index) => {
        if (checkbox.checked) {
            fieldsToDisplay[checkbox.name] = index;
        }
    });

    const resultOutput = tableContent.map(() => ({}));
    addFields();
    output.value = Object.values(resultOutput[0]).length > 0 ? JSON.stringify(resultOutput) : '';
}
