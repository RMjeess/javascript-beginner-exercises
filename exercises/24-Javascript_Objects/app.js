var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var person3 = {
    name: "Jimmy",
    lasttname: "Doe",
    age: 13,
    gender: "male",
    lucky_numbers: [1, 2, 3, 4],
    significant_other: null
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};

person.lucky_numbers[3] = 33;

family.members[2] = person3;

function addAllFamilyLuckyNumbers(arr){
  var sumOfAllLuckyNumbers = 0; 
    for (let i = 0; i < arr.members.length; i++){
        for (let x = 0; x < arr.members[i].lucky_numbers.length; x++){
            sumOfAllLuckyNumbers += arr.members[i].lucky_numbers[x];
        }
    }
    
    return sumOfAllLuckyNumbers;  
}

//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family)); 