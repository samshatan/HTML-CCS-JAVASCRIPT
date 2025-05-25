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

// class Employee{
//   static companyName = "Company Name";
//   constructor(name, salary, age, isManager, dateOfJoining){
//     this.name = name;
//     this.salary = salary;
//     this.age = age;
//     this.isManager = isManager;
//     this.dateOfJoining = dateOfJoining;
//   }

//   setName(name){
//     this.name = name;
//   }

//   getName(){
//     return this.name;
//   }

//   setSalary(salary){
//     this.salary = salary;
//   }

//   getSalary(){
//     return this.salary;
//   }

//   static calculateNewSalarayAfterBonus(employeeSalary, bonusPercentage){
//     return employeeSalary + (employeeSalary * bonusPercentage)/100
//   }
// }

// let employee1 = new Employee("Sameer",3000000,20,false,'January');
// // employee1.setName("Sha");
// // console.log(employee1);
// let newSalary = Employee.calculateNewSalarayAfterBonus(employee1.getSalary(), 10);
// console.log(newSalary);
// employee1.setSalary(newSalary);
// console.log(employee1.getSalary());
// console.log(Employee.companyName);


// Inheritance

// class car{
//   static wheel = 4;
//   constructor(color, wheelsColor, brand, engine){
//     this.color = color;
//     this.wheelsColor = wheelsColor;
//     this.brand = brand;
//     this.engine = engine;
//   }
// }

// class ElectricCar extends car{
//   constructor(color, wheelsColor, brand, engine, batteryBackup, chargingTime){
//     super(color,wheelsColor,brand,engine);
//     this.batteryBackup = batteryBackup;
//     this.chargingTime = chargingTime;
//   }
// }

// class PetrolCar extends car{
//   constructor(color, wheelsColor, brand, engine, milage){
//     super(color,wheelsColor,brand,engine);
//     this.milage = milage;
//   }
// }

// let electriccar = new ElectricCar("white", "black", "Audi", 3000, "400km", "4 Hour");
// let electriccar2 = new ElectricCar("white", "black", "BMW", 2000, "500km", "4 Hour");
// console.log(electriccar);
// console.log(electriccar2);

// class car{
//   constructor(){
//     console.log("Hello i m inside car");
//   }
// }

// class electricCar extends car{
//   constructor(){
//     super();
//     console.log("Hello i m inside electric car");
//   }
// }

// let electric = new electricCar();

// Javascript Object Notation (json)
/* json
{
  "Name" : "Sameer",
  "age" : 30,
  "salary" : 2000.0,
  "companyName" : "ABC"
}
*/
// let obj_json = '{ "Name" : "Sameer", "age" : 30, "salary" : 2000.0, "companyName" : "ABC"}'
// console.log(obj_json); // stringified version of json

// let object = JSON.parse(obj_json);
// console.log(object);

