function valueOfAString(input) {
    console.log(`The total sum is: ${input[1] === 'LOWERCASE'? eval(input[0].match(/[a-zA-Z]/g).filter(x => x === x.toLowerCase()).map(x => x.charCodeAt(0)).join('+')): 
        eval(input[0].match(/[a-zA-Z]/g).filter(x => x === x.toUpperCase()).map(x => x.charCodeAt(0)).join('+'))}`)
}

valueOfAString(['HelloFromMyAwesomePROGRAM ', 'LOWERCASE'])