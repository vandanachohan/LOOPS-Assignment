//   ^ TATS: 1^  

//                ******* Using FOR LOOP: ********


 let myWork: { name: string, status: boolean }[] = [];

 for (let i= 1; i<=10;i++){
    let lesson = {
        name: `lesson ${i}`,
        status:i % 2 === 0 ? false : true
    };
    myWork.push(lesson);
 }
 console.log(myWork);