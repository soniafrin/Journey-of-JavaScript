function newPrice(currentPrice, discount){
    if(typeof currentPrice === "number" && !isNaN(currentPrice) && typeof discount === "number" && !isNaN(discount) && discount <= 100 && discount >= 0){
        return (currentPrice - (currentPrice * discount / 100)).toFixed(3);

    }
    else{
        return "Invalid";
    }
}
    
newPrice(500, "5");
// console.log(newPrice("200"));

// console.log(!isNaN(NaN));
// console.log(  typeof isNaN("2"), isNaN(2));
// console.log(  typeof !isNaN("2"), !isNaN(2));
