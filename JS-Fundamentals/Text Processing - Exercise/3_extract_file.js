function extractFile(fileLocation) {
    const file = fileLocation.split('\\')[fileLocation.split('\\').length - 1].split('.')
    const [fileExtention, fileName] =[file.pop(), file.join('.')]
    console.log(`File name: ${fileName}\nFile extension: ${fileExtention}`)
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')