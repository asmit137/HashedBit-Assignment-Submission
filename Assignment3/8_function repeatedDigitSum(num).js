function repeatedDigitSum(num) {
   
    function sumDigits(n) {
        return n.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    
    
    while (num >= 10) {
        num = sumDigits(num);
    }
    
    return num;
}


let num = 456;
console.log(repeatedDigitSum(num));
