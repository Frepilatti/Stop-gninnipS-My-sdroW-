function spinWords(text){
  
    let newText = text.split(" ");
  
    for (let i = 0; i < newText.length; i++){
      if(newText[i].length >= 5){
        newText[i] = newText[i].split("").reverse().join("");
      } 
    }
    let result = newText.join(" ");
    return result;
  }