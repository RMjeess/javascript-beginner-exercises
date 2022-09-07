var total = prompt('How many km are left to go?');

// Your code below:
function check(a) {
  if (a <= 50) {
    return "I'm parking. I'll see you right now";
  } else if (a <= 100) {
    return "We'll be there in 5 minutes";   
  } else {
    return "We still have a bit of driving left to go";
  }
}

console.log(check(total));