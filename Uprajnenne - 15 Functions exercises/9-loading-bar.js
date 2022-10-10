function loadingBar(number){

    let percentSign = '%'.repeat(number / 10);
    let dotSign = '.'.repeat( 10 - percentSign.length);

    

    if( number === 100 ){
        console.log(`100% Complete!`);
    } else if (number < 100){
        console.log(`${number}% [${percentSign}${dotSign}]`);
        console.log(`Still loading...`);


    }


}
loadingBar(30);
