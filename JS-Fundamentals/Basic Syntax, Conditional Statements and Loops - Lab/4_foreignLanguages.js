function foreignLanguages(language) {
    const spanish =  'Spain, Argentina, Mexico'
    const english =  'England USA'
    let output = 'unknown'
    if (english.includes(language)) output = 'English'
    else if (spanish.includes(language)) output = 'Spanish'
    console.log(output)
}

foreignLanguages('USA')