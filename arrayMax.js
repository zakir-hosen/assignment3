
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