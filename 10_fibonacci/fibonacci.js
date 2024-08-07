const fibonacci = function(n) {
    try {
        if(+n===0){
            return 0;
        } else if(+n===1){
            return 1;
        } else{
            return fibonacci(+n-1) + fibonacci(+n-2)
        }
    } catch(error){
        console.log(error);
        return 'OPPS';
    }
    


    
};

console.log(fibonacci(-25))

// Do not edit below this line
module.exports = fibonacci;
