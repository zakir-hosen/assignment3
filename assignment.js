// https://github.com/zakir-hosen/assignment3

//kilometerToMeter
function kilometerToMeter (kiloMeter) {
    var input = kiloMeter;
    var result = input * 1000;
    var errorMessage = "Negetive value is not allowed";
    if ( input < 0) {
        return  errorMessage;
    }
    return result;
}
 kilometerToMeter();

//budgetCalculator
function budgetCalculator (wQuantity, mQuantity, lQuantity ) {
    var  watch_price = 50;
    var  mobile_price = 100;
    var  laptop_price = 200;
    var watchValue = watch_price * wQuantity;
    var mobileValue = mobile_price * mQuantity;
    var laptopValue = laptop_price * lQuantity;
    var  result = watchValue + mobileValue +  laptopValue;
    return result;
}
 budgetCalculator(3,3,3);
 

//hotelCost
function hotelCost (dayCount) 
{
    var totalCost = 0;
    var errorMessage = "Negetive value is not allowed";
    if (dayCount <= 10) {
        totalCost = dayCount * 100;
    } else if ( dayCount <= 20) {
        var firstPart=   10 * 100;
        var remaining =  dayCount - 10;
        var secondPart = remaining * 80;
        totalCost = firstPart + secondPart; 
    }else  {
        var firstPart= 10 * 100;
        var secondPart = 10 * 80;
        var remaining = dayCount - 20;
        var thirdPart = remaining * 50;
        totalCost =  firstPart + secondPart + thirdPart;
    }

    if (dayCount < 0 ) {
        return  errorMessage;
    }

    return totalCost;
}

 hotelCost();

//megaFriends

function megaFriends (friends = ["akash", "hasibul hasan" ,"salman", "shanto", "roni", "sabbir"] )
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

megaFriends();


