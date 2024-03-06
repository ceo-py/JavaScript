function sortAnArrayByTwoCriteria(input) {
    input.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }

        a = a.toLowerCase();
        b = b.toLowerCase();
        return a < b ? -1 : a > b ? 1 : 0;

    });

    input.forEach(element => console.log(element));
}