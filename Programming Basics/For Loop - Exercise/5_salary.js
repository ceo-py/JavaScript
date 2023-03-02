function openBrowserTabs(array) {
    let [totalTabs, salary, ...tabs] = array.map(x => isNaN(x) ? x : Number(x))

    let output = ''

    for (let tab of tabs) {
        if (tab === 'Facebook') {
            salary -= 150
        } else if (tab === 'Instagram') {
            salary -= 100
        } else if (tab === 'Reddit') {
            salary -= 50
        }

        if (salary <= 0) {
            output = 'You have lost your salary.'
            break
        }
    }

    if (!output) {
        output = parseInt(salary)
    }
    console.log(output)

}

openBrowserTabs(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])
