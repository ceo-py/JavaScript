function addAndRemoveElements(input) {
    let [num, result] = [1, []];
    for (let cmd of input) {
        if (cmd === 'add') {
            result.push(num);
        } else if (cmd === 'remove') {
            result.pop();
        }
        num++;
    }
    if (result.length === 0) {
        console.log('Empty');
    } else {
        for (let num of result) {
            console.log(num);
        }
    }
}