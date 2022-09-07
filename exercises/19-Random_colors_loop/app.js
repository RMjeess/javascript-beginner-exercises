function getColor(colorNumber=0)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		case 5: return "purple"; 
				break;
		case 6: return "orange"; 
				break;
		case 7: return "indigo"; 
				break;
		case 8: return "violet"; 
				break;
		case 9: return "purple"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getRandomInt(){
	let min = Math.ceil(1);
	let max = Math.floor(5);
	let randomNumber = Math.floor(Math.random() * (max - min) + min);
	return randomNumber;
}

function getAllStudentColors(num){
	for (let i=0; i<num; i++){
  	let randomNum = getRandomInt();
		let exampleColor = getColor(randomNum);
		console.log(exampleColor);
	}

}

//call the function below with the number of students in the class and print on the console
getAllStudentColors(10);
