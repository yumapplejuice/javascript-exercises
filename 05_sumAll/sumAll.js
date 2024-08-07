const sumAll = function(i, j) {
    var numbers = 0
    if (Number.isInteger(i) == true && Number.isInteger(j) == true){
        if (i > 0 && j > 0){
            for (var n = Math.min(i,j); n <= Math.max(i,j); n++){
                numbers += n
        }

        } else {
            return 'ERROR'
        }
        return numbers
        
    } else{
        return 'ERROR'
    }

};




console.log(sumAll(-10,4))

// Do not edit below this line
module.exports = sumAll;

