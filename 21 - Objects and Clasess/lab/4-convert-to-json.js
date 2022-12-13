function convertToJson(firstName, lastName, Color){

    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: Color

    };
    console.log(JSON.stringify(person));

}
convertToJson('George', 'Jones', 'Brown');
