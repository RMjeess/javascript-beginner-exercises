function sing(){
  return (
    letItBe(4)
    + "whisper words of wisdom, "
    + letItBe(5)
    + "there will be an answer, let it be"
  );
}

function letItBe(num){
  let str = '';
  for (let i=0; i<num; i++){
    str += "let it be, "; 
  } 
  return str;
}

console.log(sing());
