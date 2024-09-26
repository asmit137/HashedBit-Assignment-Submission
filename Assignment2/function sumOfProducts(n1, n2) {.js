function sumOfProducts(n1, n2) {
    // Convert both numbers to strings
    let num1 = n1.toString();
    let num2 = n2.toString();

    // Pad the shorter number with leading zeros
    while (num1.length < num2.length) {
        num1 = '0' + num1;
    }
    while (num2.length < num1.length) {
        num2 = '0' + num2;
    }

    // Initialize the sum
    let sum = 0;

    // Loop through the digits of both numbers
    for (let i = 0; i < num1.length; i++) {
        let digit1 = parseInt(num1[i]);
        let digit2 = parseInt(num2[i]);
        sum += digit1 * digit2;
    }

    return sum;
}

// Example usage:
console.log(sumOfProducts(6, 34)); // Output: 24
