
    //Spoiler: нашёл решение проще, поэтому закомментировал свои не очень успешные попытки перебора массива и вычисление его минимума/максимума. 
    //Массив хранит значение биткоина

    let bitcoin = [10, 18, 33, 7, 31, 3, 8, 22, 29, 7, 8, 20, 30, 23, 17, 15, 12, 23, 25]; //предположим это в USD
    let buy = Math.min(...bitcoin); //покупаем по минимальной цене
    let sell = Math.max(...bitcoin); //продаём по максимальной цене
    let profit = sell - buy; // фиксируем прибыль исходя из цифр выше


    console.log("Min price of BTC is: " + buy + " USD"); //выводим в консоль минимум
    console.log("Max price of BTC is: " + sell + " USD"); //выводим в консоль максимум 
    console.log("Probable profit = " + profit + " USD"); //выводим в консоль прибыль





    // for (let item of bitcoin) {
    //     if (buy <= item) {

    //     } {
    //             item < sell 
    //         }
    //     // for (item < sell)
    //     console.log(`Buy is: ${buy}`);
        
    //     console.log(Math.min(item));

    // }