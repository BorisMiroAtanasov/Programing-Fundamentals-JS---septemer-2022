function gladiatorExpenses(lostFightCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalHelmetExpenses = Math.trunc(lostFightCount/ 2 ) * helmetPrice;
    let totalSwordPrice = Math.trunc(lostFightCount/ 3 ) * swordPrice;
    let toalShielPrice = Math.trunc(lostFightCount/ 6 ) * shieldPrice;
    let totalArmorPrice = Math.trunc(lostFightCount/ 12 ) * armorPrice;

    let result = totalHelmetExpenses + totalSwordPrice + toalShielPrice + totalArmorPrice


    console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`);

}
gladiatorExpenses(7,2,3,4,5);
gladiatorExpenses(23,12.50,21.50,40,200);