function fromJSONToHTMLTable(input) {

    function escapeHtml(text) {
        let map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.toString().replace(/[&<>"']/g, function (m) {
            return map[m];
        });
    }

    let arr = JSON.parse(input);
    let html = '<table>\n';
    html += '  <tr>';
    for (let key of Object.keys(arr[0])) {
        html += `<th>${escapeHtml(key)}</th>`;
    }
    html += '</tr>\n';
    for (let obj of arr) {
        html += '  <tr>';
        for (let key of Object.keys(obj)) {
            html += `<td>${escapeHtml(obj[key])}</td>`;
        }
        html += '</tr>\n';
    }
    html += '</table>';
    return html;
}

