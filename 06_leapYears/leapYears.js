const leapYears = function(year_input) {


    ///Leap years are years divisible by four (like 1984 and 2004). 
    //Years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 

    if (year_input%4==0){
        if (year_input%100==0){
            if(year_input%400==0){
                return true;
            } else{
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
