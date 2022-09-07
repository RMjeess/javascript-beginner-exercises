/*Exercise closely resembles 11 - consider introducing another concept here? */

function getRandomInt()
{
	min = Math.ceil(1);
  max = Math.floor(10);
	
	var randomNumber = Math.floor(Math.random() * (max - min) + min);

	return randomNumber;
}


console.log(getRandomInt());