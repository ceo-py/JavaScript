function processString(mainString) {
    mainString = mainString[0]
    let current_result = "";
    let result_show = "";
    let number = "";

    for (let index = 0; index < mainString.length; index++) {
        const symbols = mainString[index];
        if (!isNaN(parseInt(symbols))) {
            number += symbols;
            if (index + 1 < mainString.length) {
                if (!isNaN(parseInt(mainString[index + 1]))) {
                    continue;
                }
            }
            result_show += current_result.repeat(parseInt(number));
            current_result = "";
            number = "";
        } else {
            current_result += symbols;
        }
    }

    result_show = result_show.toUpperCase();
    console.log(`Unique symbols used: ${[...new Set(result_show)].length}`);
    console.log(result_show);
}

processString(['e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\\Iz.17*W:\\mwV`z-15g@hUYE{_$~}+X%*nytkW15']);
// processString(['a3sdfsdhfjdsf7#$%$#%@@#$1']);

