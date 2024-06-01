// tast :3 //

//********** using Do..While LOOP********//

// Step 1: Set the starting counter to "0"
let counter = 0;

//Step 2: Create a varable, step, to increase your counter by 
let step = 5;

// Step 3: Add do...while loop
do {
    console.log("counter:" + counter);
    counter += step;
} while (counter < 100);

console.log("final Counter:", +counter);
