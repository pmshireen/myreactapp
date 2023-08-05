
const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Engineer',
  };
  
  printKeyValuePairs(person);
  
function printKeyValuePairs(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${obj[key]}`);
      }
    }
  }
  