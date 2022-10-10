function charactersInRange(firstSing , seconSign){

    let startPoint = Math.min(firstSing.charCodeAt(), seconSign.charCodeAt());
    let endPoint = Math.max(firstSing.charCodeAt(), seconSign.charCodeAt());
    let result = '';

    for ( let curentChar = startPoint+ 1 ; curentChar < endPoint; curentChar++ ){

        let sigleChar = String.fromCharCode(curentChar);
        result += `${sigleChar} `;
         

    }
    console.log(result);


}
charactersInRange('#',':')