function ConstPratice() {
    this.firstNum = 2;
    this.secondNum = 2;
    this.value = function(userNum) {
        return userNum+this.firstNum+this.secondNum;
    }
}

let newVar = new ConstPratice();
console.log(newVar.value(2));