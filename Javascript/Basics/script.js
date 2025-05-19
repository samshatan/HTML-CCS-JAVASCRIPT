// console.log("Hello World");

// Variables in javascript

// var a = 10;
// var b = 20;
// var c = a+b;
// console.log(a+b);

// var a = 10;
// var b = a;
// a = 20;
// console.log(a);
// console.log(b);

// boookname = "The great";
// console.log(boookname);

// var a = 10;
// let b = 20;
// const c = 30;
// b = 25;
// a = 15;
// // c = 40; // Not allowed in javascript throw error
// console.log(a);
// console.log(b);
// console.log(c);

// var  num = 10;
// var num2  = num;
// num = 20;
// console.log(num);
// console.log(num2);

// quick overview of functions

// function add(a,b){
//   return a+b;
// }
// console.log(add(5,6));
// var sum = add(10,15);
// console.log(sum);

// function printMyName(name){
//   console.log("My name is " + name);
// }
// printMyName("John");
// printMyName("Doe");

// function isEven(num){
//   if(num%2==0){
//     return true;
//   }
//   return false;
// }
// console.log(isEven(10));
// console.log(isEven(11));

// var fruitname = "Mango";
// function printFruitName(){
//   console.log("Fruit name is " + fruitname);
// }
// printFruitName();
// fruitname = "Apple";
// console.log(fruitname);
// printFruitName();

// function dummy(){
//   if(true){
//     var x =30;
//   }
//   console.log(x);
// }
// // console.log(x); This will throw an error because x is not defined outside the function
// dummy();

// function dummy2(){
//   console.log("Inside dummy2");
//   console.log(x);
//   if(true){
//     if(true){
//       var x = 30;
//       console.log(x);
//     }
//     console.log(x);
//   }
//   console.log(x);
// }
// dummy2();

// var a = 1000;
// a++;
// console.log(a);

// In Java
// int a = 10; // primitive data type
// Intger a = new Intger(10); // creating a object using wrapper class

// In javascript
// var a = 10; // primitive data type
// var b = new Number(10); // creating a object using wrapper class

// var myCollegeName = "Abes Enginerring college";
// var myCompanyName = new String("Microsifr");
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof myCollegeName);
// console.log(typeof myCompanyName);
//1 2 4
//6 10 12 highly 14 15 16 17 18

// var obj = {};
// console.log(typeof obj);

// var person = { name: "Same", id: "hi",adress: {city: "Raebareli", State: "UP"}};
// console.log(person)
// console.log(person.name);
// console.log(person.adress);
// console.log(person["adress"]);

// var student = {
//   name: "Sameer",
//   age: "20",
//   isActive: true,
//   marks:{
//     sem1 : [20,30,40],
//     sem2 : [30,4,5]
//   }
// };
// console.log(student.marks.sem1);

// Array, For loop, Functions--> Arrow Function--> forEach, filter, map, reduce and oops.

// let arr = [1,2,3,4,5,6,7,8,9];
// for(let i=0;i<arr.length;i++){
//   console.log(arr[i]);
// }

// let arrr = new Array(1,2,3,4,5);
// for(let i=0;i<arrr.length;i++){
//   console.log(arrr[i]);
// }
// console.log(typeof arrr);

// let arr = [1,2,3,4,6,5,7];
// arr.forEach(ele => console.log(ele));

// function add(a,b,v){
//   return a+b+v;
// }
// let sum = add(2,4,9);
// console.log(sum);


// Arrow Functions

// Normal function
// function printHello(){
//   console.log("Hello World");
// }
// printHello();

// Asiigning a function into a variable
// let some = function printHello(){
//   console.log("Hello World");
//   return "Hello";
// }
// console.log(some());
// let somefunc = function add(a,b){
//   return a+b;
// }
// console.log(somefunc(4,9));

// Arrow Function
// let some = function printHello(){
//   console.log("Hello");
// }
// some();

// let somee = () => {
//   console.log("Hello");
// }
// somee();

// let someFunc = (a,b) => {
//   return a+b;
// }
// console.log(typeof someFunc);
// console.log(someFunc(4,6));

// let some = () => console.log("Hello");
// some();

// let someFunc = (a,b) => a+b;
// console.log(someFunc(4,6));

// let someNewFunc = (a,b) => console.log(a+b);
// console.log(someNewFunc(6,7)); // undefined
// console.log(someNewFunc(3,4));

// let someFunc = (a,b) => {
//   console.log("return sum of two numbers");
//   return a+b;
// }
// console.log(someFunc(4,5));

// function printNamers(name){
//   console.log("My Names id: "+name);
// }
// printNamers("Sameer");

// let fun = (name) => console.log("My name is: ", name);
// fun("Sam");

// let newFunc = name => {
//   console.log(name);
//   console.log("My name",name);
// }
// newFunc("name");


// Function as an Argumnets

// function salarySum(a,b){
//   console.log(a+b);
// }
// salarySum(2000,30000);

// let salarySum = (a,b) => {
//   console.log(a+b);
// };
// function util(emp1, emp2 , func){
//   console.log(emp1.name);
//   console.log(emp2.name);
//   func(emp1.salary,emp2.salary);
// };
// emp1 = {name: "Sameer", salary: 20000};
// emp2 = {name: "Sharad", salary: 30000};
// util(emp1,emp2,salarySum);

// function util(emp1, emp2 , func){
//   console.log(emp1.name);
//   console.log(emp2.name);
//   func(emp1.salary,emp2.salary);
// };
// emp1 = {name: "Sameer", salary: 20000};
// emp2 = {name: "Sharad", salary: 30000};
// util(emp1,emp2,(a,b) => console.log(a+b));

// arr = [1,2,3,4,5,6,7,8];
// arr.forEach((num, index, array) => console.log(num, index, array));

// 4 types to give value in foreach function
// arr = [2,3,4,5,7,8,8];
// function myfunc(num, ind, arr){
//   console.log(num,ind,arr);
// }
// arr.forEach(myfunc);

// arr = [2,3,4,5,7,8,8];
// let someNew = function myfunc(num, ind, arr){
//   console.log(num,ind,arr);
// }
// arr.forEach(someNew);

// arr = [2,3,4,5,7,8,8];
// let some = (num, ind, arr) => {
//   console.log(num,ind,arr);
// }
// arr.forEach(some);

// arr = [2,3,4,5,7,8,8];
// arr.forEach((num, ind, arr) => {
//   console.log(num,ind,arr);
// });

// let employee1 = {name: "Sameer", salary: 20000};
// let employee2 = {name: "Sharad", salary: 30000};
// let employee3 = {name: "Amit", salary: 40000};
// let arr = [employee1, employee2, employee3];
// arr.forEach(emplo => console.log(emplo.salary));

// Callback function -> giving function inside fucntion and under which is execute(while executing one function the other function get called inside a fucntion)
// function myfunc(func){
// ...
// ...
// func()
// }
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// What is a Higher Order Function?
// A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.
// that util we make up and forEach function
// myfunc is higher order and func is Callback

// (Callback function that return true and false) Predicate is the function that return boolean variable and it is used as an argumnet in some fucntion


// filter function
// let arr = [2,56,43,78,9,6,4,8,23,456,786,54];
// let newarr = arr.filter(num => num%2==0);
// console.log(newarr);

// let arr = [2,56,43,78,9,6,4,8,23,456,786,54]
// const predicate = num => num%2==0;
// let newarr = arr.filter(predicate);
// console.log(newarr);

// let arr = [2,56,43,78,9,6,4,8,23,456,786,54]
// arr.filter(num => num%2==0/*it takes argument as predicate*/).forEach(ele => console.log(ele)/*it takes argument callback function*/);

// Map and Reduce

// let arr = [1,2,3,4,5,6,7,8,9];
// let newArr = arr.map(num => num*2);
// console.log(newArr);

// let arr = [1,2,3,4,5,6,7,8,9];
// arr.map(num => num*2).forEach(num => console.log(num));

// let arr = [24,45,67,2,3,4,5,7,8,9]
// let arrr = arr.filter(num => num%2 === 0).map(num => num-1);
// console.log(arrr);

let arr = [24,45,67,2,3,4,5,7,8,9]
let sum = arr.filter(num => num%2 === 0).map(num => num-1).reduce((prev, curr)=> prev+curr);
console.log(sum);