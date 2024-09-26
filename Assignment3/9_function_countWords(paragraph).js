function countWords(paragraph) {
  
  const trimmedParagraph = paragraph.trim();
  
  
  const words = trimmedParagraph.split(/\s+/);
  
  
  return words.length;
}


const paragraph = "This is an example paragraph to count the number of words.";
console.log(countWords(paragraph)); 