let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of name key from persons array
let peopleName = persons.map(person => person.name);
console.log(peopleName);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map(person => person.grade);
console.log(peopleGrade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map(person => person.sex);
console.log(peopleSex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
console.log(peopleName.filter(name => name.startsWith('J') || name.startsWith('P')));
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
console.log(peopleName.filter(name => name.startsWith('A') || name.startsWith('C')));
// Log all the filtered male ('M') in persons array
console.log(persons.filter(person => person.sex === 'M'));
// Log all the filtered female ('F') in persons array
let feMales = persons.filter(person => person.sex === 'F');
console.log(feMales);
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let cJ = feMales.filter(girl => girl.name.startsWith('C') || girl.name.startsWith('J'));
console.log(cJ);
// Log all the even numbers from peopleGrade array
console.log(peopleGrade.filter(grade => grade % 2 === 0));
// Find the first name that starts with 'J' in persons array and log the object
let jName = persons.filter(person => person.name.startsWith('J'));
console.log(jName[0]);
// Find the first name that starts with 'P' in persons array and log the object
let pName = persons.filter(person => person.name.startsWith('P'));
console.log(pName[0]);
// Find the first name that starts with 'J', grade is greater than 10 and is a female
let jFemales = feMales.filter(person => person.name.startsWith('J'));
console.log(jFemales.filter(girl => girl.grade > 10));
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter(person => person.sex === 'F');
console.log(femalePersons);
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter(person => person.sex === 'M');
console.log(malePersons);
// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc, cv) => acc + cv, 0);
console.log(gradeTotal);
// Find the average grade
console.log(`Average grade is: ${gradeTotal/peopleGrade.length}`)
// Find the average grade of male
let maleGrades = malePersons.map(male => male.grade);
let maleSum = maleGrades.reduce((acc, cv) => acc + cv, 0);
console.log(`Average grade amongst males is: ${maleSum/maleGrades.length}`);
// Find the average grade of female
let femaleGrades = femalePersons.map(female => female.grade);
let femaleSum = femaleGrades.reduce((acc, cv) => acc + cv, 0);
console.log(`Average grade amongst females is: ${femaleSum/femaleGrades.length}`);
// Find the highest grade
let hiGrd = [...peopleGrade].sort((a, b) => a - b).pop();
console.log(`Highest grade is ${hiGrd}.`);
// Find the highest grade in male
let mHiGrd = [...maleGrades].sort((a, b) => a - b).pop();
console.log(`Highest grade amongst males is ${mHiGrd}.`);
// Find the highest grade in female
let fHiGrd = [...femaleGrades].sort((a, b) => a - b).pop();
console.log(`Highest grade amongst females is ${fHiGrd}.`);
// Find the highest grade for people whose name starts with 'J' or 'P'
let jpNames = jName.concat(pName);
let jpGrades = jpNames.map(person => person.grade);
let jpHiGrd = [...jpGrades].sort((a, b) => a - b).pop();
console.log(`Highest grade amongst people with names starting from J or P is ${jpHiGrd}.`);
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a, b) => a - b);
console.log(peopleGrade);
// Sort the peopleGrade in descending order
peopleGrade.sort((a, b) => b - a);
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
[...peopleGrade].sort((a, b) => b - a);
// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort();
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopleName].sort();
