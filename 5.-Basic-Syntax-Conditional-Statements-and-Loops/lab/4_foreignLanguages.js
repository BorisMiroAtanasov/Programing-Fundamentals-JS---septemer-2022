function foreignLanguagages(country){
    let countryState = country;

    switch (countryState) {
        case ('England'): 
        case ( 'USA'): console.log('English');
            break;
        case ('Spain' ):
        case ('Argentina'):
        case ( 'Mexico'): console.log('Spanish');
            break;
        default: console.log('unknown');
            break;
    }
    

    
}
foreignLanguagages('Germany');


