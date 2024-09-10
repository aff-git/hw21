
    
    //Массив хранит значение биткоина

    let bitcoin = [10, 18, 33, 7, 31, 3, 8, 22, 29, 7, 8, 20, 30, 23, 17, 15, 12, 23, 25];
    let buy = Math.min(bitcoin);
    let sell = Math.max(bitcoin); 
    let profit = sell - buy; 
    
    console.log(buy);

    for (let item of bitcoin) {
        console.log(item);
        buy = item;
        if (item < buy) {
            buy = item;}
        // for (item < sell)
        console.log(buy);
        
        
    }