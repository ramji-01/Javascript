//assigning function to the variable divBy10
let divBy10 = (number) => {
    if(number%10 == 0)
        return "yes, it is divisible by 10";
    return "no, it is not divisible by 10";
}
console.log(divBy10(11));