function passwordGenerator(array){
    let password = (array[0] + array[1]).toLowerCase();

    let vowelLetters = ['a','e','i','o','u'];
    let key = array[2].toUpperCase();
    let currentKeyIndex = 0;

    for (const char of password) {
        if(vowelLetters.includes(char)){
            password = password.replace(char, key[currentKeyIndex++]);
            if( key[currentKeyIndex] === undefined){
                currentKeyIndex = 0;

            }

        }

        
    }
    let finalPassord = password.split('').reverse().join('');
    console.log(`Your generated password is ${finalPassord}`);


  



}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]);
