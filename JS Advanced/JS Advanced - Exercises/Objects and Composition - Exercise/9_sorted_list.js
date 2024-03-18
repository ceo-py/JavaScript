function createSortedList() {
    return {
        list: [],
        sort() {
            this.list.sort((a, b) => a - b);
        },
        correctIndex(index) {
            return (index >= 0 && index < this.list.length)
        },
        add(number) {
            this.list.push(number)
            this.sort()
        },
        remove(index) {
            if (this.correctIndex(index)) {
                this.list.splice(index, 1)
                this.sort()
            }
        },
        get(index) {
            if (this.correctIndex(index)) return this.list[index]
        },
        get size() {
            return this.list.length;
        }
    }
}
