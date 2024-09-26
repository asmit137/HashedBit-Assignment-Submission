let string = "JavaScript programming is fun!"; 
let vowels = 'aeiouAEIOU'; 
let consonantCount = 0;
let vowelCount = 0;

for (let char of string) {
  if (vowels.includes(char)) {
    vowelCount++;
  } else if (/[a-zA-Z]/.test(char)) { // Check if it's a consonant (alphabetic but not a vowel)
    consonantCount++;
  }
}

console.log(`Number of vowels: ${vowelCount}`);
console.log(`Number of consonants: ${consonantCount}`);
