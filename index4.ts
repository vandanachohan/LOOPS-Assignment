// TAST: 4 //

//************Object whit  for...in LOOP ****************//
// Step 1: Create a simple object with three items

let myObject = {
    item1: "Value 1",
    item2: "Value 2",
    item3: "Value 3"
  };
  
  // Step 2: Use a for...in loop to get properties' names and values from the object
  for (let key in myObject) {
    console.log(`Key: ${key}, Value: ${myObject[key]}`);
  }
  
  

