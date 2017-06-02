const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//THIS FIX THE MOD PROBLEM
Number.prototype.mod = function(n) {
  return ((this%n)+n)%n;
}

class Cipher{
  encode(m,b){ // CIFRADO   C = (Mi + b) mod 27
    const c = ( letters.indexOf(m) + b).mod(27);
    return letters[c];
  }
  decoded(c,b){ // DESCIFRADO   M = (Ci - b) mod 27
    const m = ( letters.indexOf(c) - b).mod(27);
    return m == -1 ? letters[letters.length-1] : letters[m]; 
  }
  encodeWord(word,b){
    let cipheWord = "";
    for (var i = 0, len = word.length; i < len; i++) {
      if(word[i] == " "){
        cipheWord += word[i];
      }else{
        cipheWord += this.encode(word[i],b);
      }
    }
    console.log( "Original: " + word + " encode: " + cipheWord);
    return cipheWord;
  }
  decodeWord(word,b){
    let cipheWord = "";
    for (var i = 0, len = word.length; i < len; i++) {
      if(word[i] == " "){
        cipheWord += word[i];
      }else{
        cipheWord += this.decoded(word[i],b);
      }
    }
    console.log( "Original: " + word + " decode: " + cipheWord);
    return cipheWord;
  }
}
let cipher = new Cipher();