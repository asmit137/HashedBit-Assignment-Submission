let string = 'INDIA';
let array = string.split('');

array.splice(3, 2, 'ONESIA'); 

let output = array.join(''); // Convert array back to string

console.log(output);
