function extractFail(input){
    let failArray = input.split('\\');
    let failName = failArray.pop().split('.');
    let failExtantion = failName.pop();

    


    console.log(`File name: ${(failName[0])}`);
    console.log(`File extension: ${failExtantion}`);

}
extractFail('C:\\Internal\\training-internal\\Template.pptx');
