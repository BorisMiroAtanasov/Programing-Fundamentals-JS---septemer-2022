function furniture(input){
    let text = input.join(',')

    let pattern = /[>]{2}(?<furnitureName>[A-Za-z]+)[<]{2}(?<price>[\d]+[\.]*[\d]*)!(?<count>[\d]+)/g


    let matches = text.matchAll(pattern);
  



     for (const match of matches) {
       console.log(match);
        
     }

    

}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']);
