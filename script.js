// begin 
// this is a more enhanced version of BMI calculator, we use the idea of object and method 

// declare the method 

var Mark = {
    firstName: 'Mark',
    lastName: 'Cambal',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        return this.BMI = (this.mass)/(this.height)**2;
    }
};



var John = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        return this.BMI = (this.mass)/(this.height)**2;
    }
};


function higherBMI (JohnBMI, MarkBMI){
    var Msg;
    if (JohnBMI > MarkBMI){
        Msg = 'John has a higher BMI at: ' + John.BMI;
    }else if(JohnBMI === MarkBMI){
        Msg = 'Same BMI';
    }else{
        Msg = 'Mark has a higher BMI at: ' + Mark.BMI;     
    }
    return Msg;
}

//Mark.calcBMI();
//John.calcBMI();
console.log('Mark \'s BMI is: ' + Mark.calcBMI());
console.log('John \'s BMI is: ' + John.calcBMI());

var result = higherBMI(John.BMI,Mark.BMI);

console.log(result);

// end
