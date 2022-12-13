function wordDeveloping(array){

    let string = '';
    let line = array.shift();

    while (line !== 'End') {
        let [command, char] = line.split(' ');

        switch (command) {
            case 'Add':
                string = string + char
                //console.log(string);
                break;
            case 'Upgrade':
                let oldChar = char
                let oldValue = char.charCodeAt();
                let newValue = char.charCodeAt() + 1;
                let newCar = String.fromCharCode(newValue)
                let pattern = new RegExp(oldChar, 'g');
                string = string.replace(pattern, newCar);
                
                    break;
            case 'Print':
                console.log(string);
                  break;
         case 'Index':
            let charForFound = char
            let stringArr = string.split('');
            let counter = '';
            //console.log(stringArr);
                if(string.includes(charForFound)){
                   
                for (let i = 0 ; i<stringArr.length ; i++ ){
                    let currentLetter = stringArr[i];
                    if(currentLetter ==charForFound){
                        counter += `${i} `
                    }
                    
                }
                console.log(counter);
                    
                    
                }else{
                    console.log(`None`);
                }
            break;
                  case 'Remove':
                    let length = char.length;
                   // console.log(length);
                   let startIndex = string.indexOf(char);
                   string = string.split('');
                   let newString = string.splice(startIndex, length)
                   string = string.join('')
                //    let newString = string.substring(startIndex,(startIndex+length))
                  //console.log(string);

                   
                        break;
            
        
    
    }
    line = array.shift();

    }
   
}
wordDeveloping(["Add University",
"Print",
"Upgrade n",
"Print",
"Index i",
"Remove sity",
"Print",
"End"]);
