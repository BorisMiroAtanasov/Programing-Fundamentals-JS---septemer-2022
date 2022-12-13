function extractFail(input){
    let dirs = input.split('\\');

    let file = dirs.pop();
    let lastComa = file.lastIndexOf('.');
    const name = file.substring(0, lastComa);
    const extention = file.substring(lastComa + 1);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extention}`)

}
extractFail('C:\\Internal\\training-internal\\Template.pptx');
