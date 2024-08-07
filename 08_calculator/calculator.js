const add = function(x,i) {
  return x + i

};

const subtract = function(x,i) {
  return x - i

	
};

const sum = function(nums) {
  total = 0
  for (let i = 0; i < nums.length; i++){
    total += nums[i]
  }
  return total
};

const multiply = function(nums) {
  total = nums[0]
  for (let i = 1; i < nums.length; i++){
    total *= nums[i]
  }
  return total
};

const power = function(x, i) {
  return x**i
	
};

const factorial = function(n) {
  let running_total = 1
  if (n===0){
    return 1
  }else {
    for (let i =2; i <= n; i++){
      running_total *= i
  }

  }
	return running_total
};

console.log(factorial(1))
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
