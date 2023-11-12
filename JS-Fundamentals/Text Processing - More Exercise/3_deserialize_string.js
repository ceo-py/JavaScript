function deserializeString(input) {
    input.pop()
    const result = {}
    input.forEach(x => {
        const [letter, indexes] = x.split(':')
        indexes.split('/').forEach(i => result[i] = letter        )
    })
    console.log(Object.values(result).join(''))
}

deserializeString(['a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end']
)