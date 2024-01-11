function diamond(param) {
    const n = parseInt(param);
    let lines = Math.ceil((n - 1) / 2);
    let mid = 0;
    let z = 0;

    if (n % 2 === 0) {
        lines = lines - 1;
        z = 1;
    }

    for (let i = 1; i < lines + 2; i++) {
        if (i === 1) {
            if (n % 2 === 0) {
                lines = Math.floor(Math.abs(2 - n) / 2);
                const stars = 2;
                console.log("-".repeat(lines) + "*".repeat(stars) + "-".repeat(lines));
            } else {
                lines = Math.floor(Math.abs(n - 1) / 2);
                const stars = 1;
                console.log("-".repeat(lines) + "*".repeat(stars) + "-".repeat(lines));
            }
        }

        if (i > 1) {
            if (n % 2 === 0) {
                mid += 2;
            } else {
                if (mid === 0) {
                    mid += 1;
                } else {
                    mid += 2;
                }
            }

            lines = lines - 1;
            console.log("-".repeat(lines) + "*" + "-".repeat(mid) + "*" + "-".repeat(lines));
        }
    }
     console.log('*' + "-".repeat(n - 2) +'*');

    for (let b = 0; b < Math.floor(n / 2) - z; b++) {
        if (n % 2 !== 0) {
            if (b === Math.floor(n / 2) - 1) {
                lines = b + 1;
                console.log("-".repeat(lines) + "*" + "-".repeat(lines));
            } else {
                lines = b + 1;
                mid = b === 0 ? mid: mid - 2;
                console.log("-".repeat(lines) + "*" + "-".repeat(mid) + "*" + "-".repeat(lines));
            }
        } else {
            if (b === Math.floor(n / 2) - 1) {
                lines = b + 1;
                console.log("-".repeat(lines) + "**" + "-".repeat(lines));
            } else {
                lines = b + 1;
                mid = b ===0 ? mid: mid - 2;
                console.log("-".repeat(lines) + "*" + "-".repeat(mid) + "*" + "-".repeat(lines));
            }
        }
    }


}

diamond(9)