function theImitationGame(array){
    let code = array.shift();
    let line = array.shift();

     while (line !== 'Decode') {
        let currentLine = line.split('|')
        // let [command , indexLetter, char] = line.split('|');
        let command = currentLine[0];
        let indexLetter = currentLine[1];
        let char = currentLine[2];
        let newCode = ''

         switch (command) {
             case 'Move':
                let substring = code.substring(0, Number(indexLetter));
                code = code.replace(substring, '')
                code = code.concat(substring)
               // console.log(code);

                 break;
                case 'Insert':
                    let codeArray = code.split('');
                    codeArray.splice(Number(indexLetter) , 0 , char);
                    code = codeArray.join('')
                   
                    //console.log(code);


                break;

                case 'ChangeAll':
                    while (code.includes(indexLetter)) {
                        code = code.replace(indexLetter,char )
                       // console.log(code);
                        
                    }

                break;

         }


        line = array.shift();

    
    }
    console.log(`The decrypted message is: ${code}`);
   

}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
  ]);
