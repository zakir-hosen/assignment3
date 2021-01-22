//kilometerToMeter

function kilometerToMeter (kiloMeter) {
    let input = kiloMeter;
    let result = input * 1000;
    return result;
}
var conversion = kilometerToMeter(10);
console.log(conversion);
//budgetCalculator

function budgetCalculator (wQuantity, mQuantity, lQuantity ) {
    let  watch_price = 50;
    let  mobile_price = 100;
    let  laptop_price = 200;
    let a = watch_price * wQuantity;
    let b = mobile_price * mQuantity;
    let c = laptop_price * lQuantity;

    var  result = a + b + c;
    return result;
}
var akash = budgetCalculator(1,1,2);
console.log(akash);


//hotelCost
function hotelCost (dayCount) {


    var vara = 0;
    if (dayCount <= 10) {
        vara = dayCount * 100;
    } else if ( dayCount <= 20) {
        var firstPart=   10 * 100;
        var remaining =  dayCount - 10;
        var secondPart = remaining * 80;
        vara = firstPart + secondPart; 
    }
     else if (dayCount.match(/^-\d+$/) {
        // var firstPart=   10 * 100;
        // var secondPart = remaining * 80;
        // var remaining = dayCount - 20;
        // var thirdPart = remaining * 50;
        // vara =  firstPart + secondPart + thirdPart;
       
        console.log("nothing");
    }
    return vara;

}
var totalCost = hotelCost(30);
console.log(totalCost);
 
//mgFriends

function megaFriends (friends = ["akash", "ajsdflkasdjfalsdjfasldkjfldk" ,"salman", "shantoPakna", "ronibolod", "sabbirbuka"] )
 {
    var max = friends[0];
    for (var i = 0; i < friends.length; i++)
     {
        var element  = friends[i];
        if ( element.length > max.length ) {
            max =  element;
        }
    }
    return max;
}
var largestName = megaFriends();
console.log(largestName)

