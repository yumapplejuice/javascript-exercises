const reverseString = function(word) {
    let newString = "";
    for (let i = (word.length - 1); i > -1; --i){
        newString += word.charAt(i);
    }
    return newString
};

// Do not edit below this line
module.exports = reverseString;
