// l5 35min static
// class Node{
//   constructor(data){
//     this.data = data;
//     this.next = null;
//   }
// }

// const node = new Node(1);

// class Employee{
//   constructor(name, salary, age, isManager, dateOfJoining){
//     this.name = name;
//     this.salary = salary;
//     this.age = age;
//     this.isManager = isManager;
//     this.dateOfJoining = dateOfJoining;
//   }
// }
// let employee2 = new Employee("Sana",5000000,21,true,'June');
// const employee1 = new Employee("Sameer",3000000,20,false,'January');
// console.log(employee1);
// console.log(employee2);
// employee1.age = 18;
// console.log(employee1);

// Getter and Setter

class Employee{
  constructor(name, salary, age, isManager, dateOfJoining){
    this.name = name;
    this.salary = salary;
    this.age = age;
    this.isManager = isManager;
    this.dateOfJoining = dateOfJoining;
  }

  setName(name){
    this.name = name;
  }

  getName(){
    return this.name;
  }

  setSalary(salary){
    this.salary = salary;
  }

  getSalary(){
    return this.salary;
  }

  static calculateNewSalarayAfterBonus(employeeSalary, bonusPercentage){
    return employeeSalary + (employeeSalary * bonusPercentage)/100
  }
}

let employee1 = new Employee("Sameer",3000000,20,false,'January');
// employee1.setName("Sha");
// console.log(employee1);
let newSalary = Employee.calculateNewSalarayAfterBonus(employee1.getSalary(), 10);
console.log(newSalary);
employee1.setSalary(newSalary);
console.log(employee1.getSalary());