class RBIBank {
    name;
    #PanCardNo;
    constructor(name, PanCardNo) {
        this.name = name;
        this.#PanCardNo = PanCardNo;
    }

    display() {
        console.log("Name : " + this.name);
        console.log("Pan Card Number : " + this.#PanCardNo);
    }

    get PanCardNo(){
        return this.#PanCardNo;
    }

    set PanCardNo(num){
        this.#PanCardNo = num;
    }
}

let ramji = new RBIBank("Ramji", "QWER1234");
ramji.PanCardNo = "ABCD1234"; //calling setter function
console.log(ramji.PanCardNo); //calling getter function

class AxisBank extends RBIBank { //inheritance
    AxisBankID;
    constructor(name,PanCardNo,AxisBankID){
        super(name,PanCardNo); //parent class is a super class
        this.AxisBankID = AxisBankID;
    }
    display() {
        console.log(this.name + " " + " " + this.PanCardNo + " " + this.AxisBankID);
    }
}

let balaji = new AxisBank("Balaji", "POIU5678", 19);
console.log(balaji.PanCardNo); //by using getting function we got the value