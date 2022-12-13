function cutAndReverse(text){
    let middel = text.length/2;

    let firstPart = text
    .substring(0, middel)
    .split('')
    .reverse()
    .join('');



    let secondPart = text
    .substring(middel)
    .split('')
    .reverse()
    .join('');




    console.log(firstPart);
    console.log(secondPart);


}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
