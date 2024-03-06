function cityTaxes(...list) {
    return {
        name: list.shift(), population: list.shift(), treasury: list.shift(), taxRate: 10,

        collectTaxes: function () {
            this.treasury += this.population * this.taxRate
        },

        applyGrowth: function (percentage) {
            this.population *= 1 + (percentage / 100)
        },

        applyRecession: function (percentage) {
            this.treasury *= 1 - (percentage / 100)
        }
    }
}