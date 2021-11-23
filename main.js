//Arrow function
sayHello = () => "hellooo!!!";
greeting = (name) => "Good Morning " + name;
console.log(sayHello());
console.log(greeting("Mukit"));

// high order array methods
const students = [
  { name: "Mukit", ID: "180224", discipline: "CSE", age: 23 },
  { name: "Sayeedi", ID: "180227", discipline: "CSE", age: 23 },
  { name: "Sajid", ID: "180239", discipline: "CSE", age: 22 },
  { name: "Noor", ID: "182517", discipline: "HRM", age: 22 },
  { name: "Prapti", ID: "180802", discipline: "ECE", age: 21 },
];

const ages = [23, 34, 12, 45, 21, 36, 9, 11, 18, 7, 45, 30, 13, 24];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

//forEach
console.log("Using forEach");
students.forEach(function (student) {
  console.log(student);
});

//filter
const voter = ages.filter(function (age) {
  if (age >= 18) {
    return true;
  }
});

console.log(voter);

console.log("using arrow function...");
const voter1 = ages.filter((age) => age >= 18);

console.log(voter1);

const nonCSE = students.filter((student) => student.discipline != "CSE");

console.log(nonCSE);

//map
const studentNames = students.map((student) => student.name);
console.log(studentNames);

const stud_dis = students.map(
  (student) => `${student.name}--${student.discipline}`
);
console.log(stud_dis);

//Sort
const sortByAge = students.sort((a, b) => a.age - b.age);
console.log(sortByAge);

//This Keyword
const obj1 = {
  name: "Mukit",
  age: 23,
  name_age() {
    return this.name + " is " + this.age;
  },
};

console.log(obj1.name_age());

//object destructuring
const address = {
  street: "21B",
  city: "Gollamari",
  division: "Khulna",
};

const {street,city,division:bivag} = address;
console.log(`${street} ${city} ${bivag}`);

//spread operator
const arr1 = ['mukit','sajid','nayan'];
const arr2 = ['Dawod','shanto','rony'];
const combined_arr = [...arr1,'Imran','pronab',...arr2];
console.log(combined_arr);

//Class
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    walk(){
        console.log('Person Is Walking');
    }
}

class Teacher extends Person{
    constructor(name,age,degree){
        super(name,age);
        this.degree = degree;
    }
}

const person1 = new Person('Mukit', 23);
console.log(person1);
const teacher1 = new Teacher('Sayeedi', 23, 'MSC');
console.log(teacher1);
console.log(teacher1.walk());
