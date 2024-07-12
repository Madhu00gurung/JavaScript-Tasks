// piont a Define the Employee class
class Employee {
    constructor(name, email, age, department, position, salary) {
      this.name = name;
      this.email = email;
      this.age = age;
      this.department = department;
      this.position = position;
      this.salary = salary;
    }


    // point b 
    introduce() {
      console.log(`Hello, I am ${this.name}, ${this.position}`);
    }
  
    displaySalary() {
      console.log(`Salary: $${this.salary}`);
    }
};
  

// point c Create a new employee object
let newEmployee = new Employee("Mahi","mahi@gmail.com",20,"Engineering","Software Developer",30000);
console.log("New Employee:",newEmployee);
  
// Create a manager object
let manager = new Employee("Jerry","jerry@gmail.com",25,"Management","Manager",50000);
console.log("Manager:",manager);


// point d Call methods on newEmployee object
console.log("Calling methods on New Employee:");
newEmployee.introduce();
newEmployee.displaySalary();
  
// Call methods on manager object
console.log("Calling methods on Manager:");
manager.introduce();
manager.displaySalary();
  