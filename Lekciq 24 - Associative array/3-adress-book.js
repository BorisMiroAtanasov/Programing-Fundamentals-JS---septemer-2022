function adressBook(input){

    let adressBookObjekt = {}

    for (let line of input) {
        let curentLine = line.split(':');
        let name = curentLine[0];
        let adress = curentLine[1];

        adressBookObjekt[name] = adress;
        
    }
    let sortedAdressBook = Object.entries(adressBookObjekt);
    sortedAdressBook.sort((a,b) => a[0].localeCompare(b[0]));

   for (let entry of sortedAdressBook) {
    let name = entry[0];
    let adress = entry[1];


    
        console.log(`${name} -> ${adress}`);
        
   }
 // console.log(sortedAdressBook);
}
adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);
