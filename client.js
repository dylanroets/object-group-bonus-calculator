// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];


console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//



function calculateIndividualEmployeeBonus( employee ) {
  // let matches = []
  let obj = {}
  for (let person of employees) {
    if (person.reviewRating < 3) {
      return person.name;
    }
  }
}
console.log(calculateIndividualEmployeeBonus(employees));
//     //Checking to see if the rating is less then 3 
//       else if (person.reviewRating === 3) {
//         return (person.name + ' ' + person.annualSalary * .04);
//       }
//         else if (person.reviewRating === 4) {
//           return (person.name + 'Bonus ' + person.annualSalary * .06);
//       }
//     }
//   return 'No Bonus: ' + matches;
// }
//  console.log(calculateIndividualEmployeeBonus(employees));


//     let matches = [];
//   for (person of employees) {
//     if (employees.reviewRating < 3) {
//       matches.push(person);
//     }
//     return matches
//   }
// calculateIndividualEmployeeBonus(employees);
  // your logic here
  
  
  // return new object with bonus results

