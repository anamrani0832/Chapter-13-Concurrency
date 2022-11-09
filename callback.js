// // Concurrency means doing tasks simultaneously
// function doFlexibleStuff(executeStuff){
//     executeStuff();
//     console.log("hello callback!");

// }
// const function1 = () => console.log("HELLO FROM function");

// doFlexibleStuff(function1);
// Example #01
// function doSomething(callback) {
//   callback();
// }
// const sayHi = () => console.log("hi from callback fucntion");
// doSomething(sayHi);

// //  Example # 02

// function judge(grade) {
//   switch (grade) {
//     case "A":
//       console.log(`you got an ${grade} :  amazing!`);
//       break;
//     case "B":
//       console.log(`you got a ${grade} : well done!`);
//       break;
//     case "C":
//       console.log(`you got a ${grade} : alright!`);
//       break;
//     case "D":
//       console.log(`you got a ${grade} : hmmm....`);
//       break;
//     default:
//       console.log("A", grade, "! What?!");
//       break;
//   }
// }

// function getGrade(score, callback) {
//   let k
//   grade;
//   switch (true) {
//     case score >= 90:
//       grade = "A";
//       break;
//     case score >= 80:
//       grade = "B";
//       break;
//     case score >= 70:
//       grade = "C";
//       break;
//     case score >= 60:
//       grade = "D";
//       break;
//     default:
//       grade = "F";
//       break;
//   }
//   callback(grade);
// }
// getGrade(85, judge);

// // Practice exercise 13.1

function greet(fullName) {
  fullName.forEach(e => console.log(`hello doing welcome ${e}`));
}

function getGreeting(str, callback) {
 const strArray = str.split("");
 callback(strArray);
}
getGreeting("Anam" , greet);

