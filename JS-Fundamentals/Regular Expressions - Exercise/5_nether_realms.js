function netherRealms(participants) {
    const [lines, demons] = [participants.split(/[\s,]+/), {}];

    lines.forEach(line => {
        const health = line.match(/[^0-9+-/*.]/g)?.reduce((a, char) => a + char.charCodeAt(0), 0) || 0;
        const dmg = (line.match(/[+-]?\d+(\.\d+)?/g) || []).reduce((a, number) => a + Number(number), 0);
        const altering = line.match(/[*/]/g);

        demons[line] = { health, dmg };

        if (altering) altering.forEach(alter => {demons[line].dmg *= alter === '*' ? 2 : 0.5});

    });

    const filteredByName = Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, obj] of filteredByName) {
        console.log(`${name} - ${obj.health} health, ${obj.dmg.toFixed(2)} damage`);
    }
}


netherRealms()