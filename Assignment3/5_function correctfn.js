function correctfn(sentence, wrong, correct) {
    
    return sentence.replace(wrong, correct);
}


const sentence = "I have a wrond word in this sentance.";
const wrong = "wrond";
const correct = "wrong";

const result = correctfn(sentence, wrong, correct);
console.log(result); 
