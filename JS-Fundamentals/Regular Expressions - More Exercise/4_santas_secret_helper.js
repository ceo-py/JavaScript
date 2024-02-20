function santaSecretHelper(input) {
    const [key, goodChildren] = [input.shift(), []]

    function GetDecodedInput(input, key) {
        return input.split('').map(x => String.fromCharCode(x.charCodeAt(0) - key)).join('')
    }

    for (const info of input) {
        if (info === 'end') break

        const data = GetDecodedInput(info, key);
        let [regex, matchInfo] = [/[@](?<name>[A-Za-z]+)[^@!:>-]+[!](?<behaviour>[G|N])[!]/g, '']

        while ((matchInfo = regex.exec(data)) !== null) {
            const { name: childName, behaviour: childBehaviour } = matchInfo.groups
            // const [childName, childBehaviour] = [matchInfo.groups.name, matchInfo.groups.behaviour]
            if (childBehaviour === 'G') goodChildren.push(childName)
        }
    }
    console.log(goodChildren.join('\n'))
}


santaSecretHelper(['3', 'CNdwhamigyenumje$J$', 'CEreelh-nmguuejnW$J$', 'CVwdq&gnmjkvng$Q$', 'end'])