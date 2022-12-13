function messageDecryper(array){
    let num = array.shift();

    for ( let i = 0; i < num ; i++){
        let line = array[i]
        
        console.log(line);
    }

    let pattern = /\B(\$|%)(?<tag>[A-Z][a-z]{2,})\1:\s(?<first>\[\d{1,}\])\|(?<second>\[\d{1,}\])\|(?<third>\[\d{1,}\])\|/g;

    let matches = array.matchAll(pattern);

    for (const match of matches) {
        console.log(match);
        
    }


}
messageDecryper(["4",
"$Request$: [73]|[115]|[105]|",
"%Taggy$: [73]|[73]|[73]|",
"%Taggy%: [118]|[97]|[108]|",
"$Request$: [73]|[115]|[105]|[32]|[75]|"]);
