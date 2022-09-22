
//Javascript bir dış fonksiyonun içine iç fonksiyon yazmaya izin verir.İstediğimiz kadar iç fonksiyon yazabiliriz.İç fonksiyon dış fonksiyonun değişkenlerine  erişiyorsa closure denir.
/*
function outerFunction() {
    let count=0;
    function innerFunction() {
        count++;
        return count;
    }
    return innerFunction;
}

let result=outerFunction();
console.log(result());
console.log(result());
console.log(result());
*/
/*
function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
*/

/*
function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
       plusOne:plusOne(),minusOne:minusOne(),count
    }
}

let innerFuncs=outerFunction();
console.log(innerFuncs.plusOne);
console.log(innerFuncs.minusOne);
console.log(innerFuncs.plusOne);
console.log(innerFuncs.plusOne);
console.log(`Count:${innerFuncs.count}`)
*/

/*
function counterGenerator() {
    let counter=0;
    let counterFunc=function() {
        return counter +=1;
    }
    return counterFunc;
}

let counter=counterGenerator();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
*/

function customerFactory() {
    let customerId=0;
    return function(firstName,lastName) {
        customerId++;
        return{
            "CustomerId":customerId,
            "Name":firstName,
            "Surname":lastName

        }
    }
}

let customer=customerFactory();
console.log(customer("Emir Batıkan","UÇAR"));
console.log(customer("Çağdaş","UÇAR"));
