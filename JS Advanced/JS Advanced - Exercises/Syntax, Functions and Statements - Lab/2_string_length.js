function stringLength(...input) {
    const totalLen = eval(input.map(x => x.length).join('+'))
    console.log(`${totalLen}\n${parseInt(totalLen / input.length)}`)

}