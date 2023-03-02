function depositCalculator(array) {
    let [depositValue, term, annualInterestRate] = array
    let interest = Number(depositValue) * (Number(annualInterestRate) / 100)
    let interestForOneMonth = interest / 12
    let totalDeposit = Number(depositValue) + Number(term) * interestForOneMonth

    console.log(totalDeposit)
}

depositCalculator(["200 ",
"3 ",
"5.7 "]
)

