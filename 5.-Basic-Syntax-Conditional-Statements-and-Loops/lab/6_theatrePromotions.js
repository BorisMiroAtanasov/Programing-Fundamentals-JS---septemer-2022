function theatrePromotions(day, age){
    let ticketDay = day;
    let ageForTicket = Number(age);

    if (ageForTicket < 0 || ageForTicket > 122){
        console.log('Error!');
    } else if (ageForTicket <= 18){
        switch (ticketDay) {
            case ('Weekday'): console.log('12$'); break
            case ('Weekend'): console.log('15$'); break
            case ('Holiday'): console.log('5$'); break
            default:
                break;
        }
    } else if (ageForTicket <= 64){
        switch (ticketDay) {
            case ('Weekday'): console.log('18$'); break
            case ('Weekend'): console.log('20$'); break
            case ('Holiday'): console.log('12$'); break
            default:
                break;
        }
    } else if (ageForTicket <= 122){
            switch (ticketDay) {
                case ('Weekday'): console.log('12$'); break
                case ('Weekend'): console.log('15$'); break
                case ('Holiday'): console.log('10$'); break
                default:
                    break;
    
            }
        }



}
theatrePromotions('Holiday', 123)