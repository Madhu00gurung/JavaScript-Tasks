// point a Define an empty object named student
let student = {};

student.name = "Madhu";
student.email = "madhugmail@.com";
student.age = 25;
console.log("Student name:", student.name);


// point b Update the age
student.age = 10;
console.log("Update age :", student.age);


// point c 
student.greet = function() {
    console.log(`Hello, ${this.name}!`);
};
student.greet();
  
// new object
student.address = {
    country: "India",
    city: "Bangalore",
    pin_code: "560038"
}
console.log("Country:", student.address.country);
  
// Update the pin_code
student.address.pin_code = "5600096";
// new pincode
console.log("Updated address:", student.address);


// point d  Create and Populate the friend Object
let friend = {
    name: "jerry",
    email: "jerry@gmail.com",
    age: 27,
    address: {
      country: "India",
      city: "Bangalore",
      pin_code: "1001"
    },
    greet: function() {
      console.log(`Hello, ${this.name}!`);
    }
};
friend.greet();
console.log("Friend object:", friend);


// point e Create and Populate the topper Object
let topper = {
    name: "mahi",
    email: "mahi@gmail.com",
    age: 23,
    address: {
      country: "India",
      city: "Banlore",
      pin_code: "2001"
    },
    greet: function() {
      console.log(`Hello, ${this.name}!`);
    }
};
topper.greet();
console.log("Topper object:", topper);


// point f Define and Use the Student Class:
// Define a class called Student
class Student {
    constructor(name, email, age, country, city, pin_code) {
      this.name = name;
      this.email = email;
      this.age = age;
      this.address = {
        country: country,
        city: city,
        pin_code: pin_code
      };
    }
    greet() {
      console.log(`Hello, ${this.name}!`);
    }
  
    getFullAddress() {
      return `${this.address.country}, ${this.address.city} - ${this.address.pin_code}`;
    };
};

  
// point g Create objects of the Student class
let myself = new Student("Madhu", "madhugmail@.com", 25, "India", "Bangalore", "560038");
let myFriend = new Student("Jerry", "jerry@gmail.com", 25, "India", "Bangalore", "200031");
let anotherStudent = new Student("Mahi", "a@example.com", 25, "India", "Bangalore", "200031");
console.log("My self:",myself);
console.log("My friend:",myFriend);
console.log("Another student:",anotherStudent);


// point h Call the greet method on each student object and log the result
myself.greet();
myFriend.greet();
anotherStudent.greet();

// Call the getFullAddress method on each Student object and log the result
console.log("full address student1:",myself.getFullAddress());
console.log("full address student2:",myFriend.getFullAddress());
console.log("full address student3:",anotherStudent.getFullAddress());




  

