// Group and Rank Data

// Group employees by department and find the highest-paid employee in each department.
// const employees = [
//   { name: "A", dept: "IT", salary: 50000 },
//   { name: "B", dept: "HR", salary: 40000 },
//   { name: "C", dept: "IT", salary: 70000 },
//   { name: "D", dept: "HR", salary: 45000 }
// ];

 // Expected:
 // IT: C, 70000
 // HR: D, 45000



 const employees = [
    { name: "A", dept: "IT", salary: 50000 },
    { name: "B", dept: "HR", salary: 40000 },
    { name: "C", dept: "IT", salary: 70000 },
    { name: "D", dept: "HR", salary: 45000 }
];




// External libraries
const _ = require("lodash");
let grouped = _.groupBy(employees, "dept")
let result = _.mapValues(grouped, (employees) => {
    return _.maxBy(employees, "salary");
})
console.log(result);





// reduce methods
let result1 = employees.reduce((accum, employee) => {
    let dept = employee.dept;
    if(!accum[dept] || employee.salary>accum[dept].salary){
        accum[dept]=employee
    }
    return accum
}, {})

for (const dept in result1) {
    console.log(`${dept}: ${result[dept].name}, ${result[dept].salary}`);
}




// for...of loop
const highestPaid = {};
for(let employee of employees){
    let dept = employee.dept;
    if(!highestPaid[dept] || employee.salary>highestPaid[dept].salary){
        highestPaid[dept] = employee;
    }
}
console.log(highestPaid.IT.name, highestPaid.IT.salary);
console.log(highestPaid.HR.name, highestPaid.HR.salary);