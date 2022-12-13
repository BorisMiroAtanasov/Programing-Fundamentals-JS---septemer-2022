function softUniReception(array) {
    let firtsEmploy = Number(array[0]);
    let secondEmploy = Number(array[1]);
    let thirdEmploy = Number(array[2]);
    let studenst = Number(array[3]);
    let aditionlhours = 0;

    let totalStudensPerHour = firtsEmploy + secondEmploy + thirdEmploy;
    let allHour = Math.ceil(studenst / totalStudensPerHour);

    if (allHour <= 3 && allHour >0) {
        console.log(`Time needed: ${allHour}h.`);
    } else {
        aditionlhours = Math.floor(allHour / 3);
        console.log(`Time needed: ${allHour + aditionlhours}h.`);
    }


}
softUniReception(['5','6','4','20']) // Time needed: 2h.
softUniReception(['1','2','3','45']) // Time needed: 10h.
softUniReception(['3','2','5','40']) // Time needed: 5h.