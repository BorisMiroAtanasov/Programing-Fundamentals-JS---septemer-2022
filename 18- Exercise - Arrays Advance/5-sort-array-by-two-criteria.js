function sortArrayByTwoCriteria(array){

    let sortedArray = array.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    })

    console.log(sortedArray.join('\n'));


}
sortArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
