const removeFromArray = function(array,...args) {
    const newArray =[]
    array.forEach((item)=> {
        if (!args.includes(item)){
            newArray.push(item);
        }
    })
    return newArray;
    }




console.log(removeFromArray([1, 2, 2, 3], 2))


// Do not edit below this line
module.exports = removeFromArray;
