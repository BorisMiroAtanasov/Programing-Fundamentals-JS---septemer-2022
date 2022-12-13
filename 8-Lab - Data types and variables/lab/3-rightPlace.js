function rightPlace(string, char, stringForCheck){
    let oldString = string;
    let newString = oldString.replace('_', char);

    if ( newString === stringForCheck){
        console.log('Matched')
    } else{
        console.log('Not Matched')
    }

    let output = newString === stringForCheck ? 'Matched':'Not Matched';
    console.log(output);
  


    
}
rightPlace('Str_ng', 'I', 'Strong')