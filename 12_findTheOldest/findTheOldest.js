const findTheOldest = function(arr) {
    oldest_age = 0
    oldest_name = ""
    for (let i = 0; i < arr.length; ++i){
        if (Object.hasOwn(arr[i],'yearOfDeath')==false){
            total_year = 2024 - arr[i]['yearOfBirth']
            if (total_year > oldest_age){
                oldest_age = total_year
                oldest_name = arr[i]['name']

            }

        } else {
            total_year = arr[i]['yearOfDeath'] - arr[i]['yearOfBirth']
            if (total_year > oldest_age){
                oldest_age = total_year;
                oldest_name = arr[i]['name'];
            }
        }
    }

    return oldest_name
};
people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;
