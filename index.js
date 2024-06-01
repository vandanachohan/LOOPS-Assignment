//   ^ TATS: 1^  
//                ******* Using FOR LOOP: ********
var myWork = [];
for (var i = 1; i <= 10; i++) {
    var lesson = {
        name: "lesson ".concat(i),
        status: i % 2 === 0 ? false : true
    };
    myWork.push(lesson);
}
console.log(myWork);
