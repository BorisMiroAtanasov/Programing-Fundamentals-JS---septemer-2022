function rounding(num, preception){

    if (preception > 15){
        preception = 15;
    }

    console.log(parseFloat(num.toFixed(preception)))
}
rounding(10.5,3);
