function getRandomInt(){
	let min = Math.ceil(1);
  let max = Math.floor(6);
	var randomNumber = Math.floor(Math.random() * (max - min) + min);
	
	return randomNumber;
}
console.log(getRandomInt());


	
	