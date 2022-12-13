function fancyBarcode(data){
    let n = Number(data.shift());

    //let pattern = /(@#+)(?<product>[A-Za-z0-9]{6,})(@#+)/g;
    let pattern = /(@#{1,})([A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/g;

    for ( let i =0; i < n ; i++){
        let barcode = data[i];
        let match = pattern.exec(barcode)
        let concatenateDigit = "";
        let isValid = false;

        while (match !== null) {
          isValid = true;

            let barcodeText = match[2];
            for (const ch of barcodeText) {
               if (!isNaN(Number(ch))) //ако не е NaN 
               concatenateDigit +=ch;

            }
        
            match = pattern.exec(barcode)

        }
        if (isValid){
            concatenateDigit = concatenateDigit !== ''?  concatenateDigit : '00'
            console.log(`Product group: ${concatenateDigit}`);
        } else{
            console.log(`Invalid barcode`);
        }
       
    }


}
fancyBarcode(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"]);
