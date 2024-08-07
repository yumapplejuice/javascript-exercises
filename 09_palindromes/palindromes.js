const palindromes = function(str) {

    function reverseString(s) {
        var splitString = s.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        return joinArray;
    }
    var punctuation = /[\.,?!'\s]/g;
    new_str = str.replace(punctuation,"");
    middle_string = Math.ceil(new_str.length/2)
    if(new_str.length%2===0){
        back_middle = new_str.substring(middle_string,new_str.length).toLowerCase();
    } else {
        back_middle = new_str.substring(middle_string-1,new_str.length).toLowerCase();
    }
    
    back_middle_reverse = reverseString(back_middle)
    front_middle = new_str.substring(0,middle_string).toLowerCase();
    console.log(back_middle_reverse, front_middle)
    if(front_middle === back_middle_reverse){
        return true;
    } else {
        return false;
    }

};

console.log(palindromes('racecar'))

// Do not edit below this line
module.exports = palindromes;
