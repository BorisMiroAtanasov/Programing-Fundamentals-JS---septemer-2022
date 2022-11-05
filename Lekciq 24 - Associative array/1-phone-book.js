function phoneBook(input){
    let printPhoneBook= {};

    for (const entry of input) {
        let entryArr = entry.split(' ');

        let name = entryArr[0];
        let phone = entryArr[1];
        printPhoneBook[name] = phone; 
        
    }
   

    for (const key in printPhoneBook) {
        console.log(`${key} -> ${printPhoneBook[key]}`);
        
    }

}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);
