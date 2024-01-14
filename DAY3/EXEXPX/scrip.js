// Exercise 1 : Analyzing

// 1
// we will receive the all variables because of the separat opertor

// 2
// we will receive USA inside array because its a Destructuring opertor
    
// Exercise 2 : Employees

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// 1
// let walcome=users.map((val)=>{
//  return `hello ${val.firstName}`
// })
// console.log(walcome);

// 2
// const only=users.filter(work=>work.role==="Full Stack Resident")
// console.log(only);

// 3
// const job=users.filter(sira=>sira.role==="Full Stack Resident").map((val)=>{
//     return `${val.lastName}`
// })
// console.log(job);

// Exercise 3 : Star Wars
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// const word=epic.reduce((acc,val)=>{

//     return `${acc} ${val}`
// })
// console.log(word);

// Exercise 4 : Employees #2
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

let score=students
.filter(pass=>pass.isPassed==true).forEach(element => {
    console.log(`Good job ${element.name}, you passed the course in Information Technology`);
});
