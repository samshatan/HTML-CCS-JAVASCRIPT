// function promiseFunc(resolve, reject){
//   console.log("I am trying to learn promise");
// }

// let promise = new Promise(promiseFunc);

// console.log(promise);

// function getData(resolve, reject){
//   console.log("I am trying to learn promise");

//   setTimeout(() =>{
//     resolve({name: "Sam", age: 20, salary: 200000, pincode: 229001});
//   },5000);
// }

// function myFetch(url){
//   return new Promise((resolve, reject)=>{
//   console.log("I am trying to learn promise",url);
//     // const data = [
//     //   {name: "Sam", age: 20, salary: 200000, pincode: 229001},
//     //   {name: "Sana", age: 20, salary: 200000, pincode: 229001}
//     // ];
//     const data = null;
//     setTimeout(() =>{
//       if(data==null){
//         reject(new Error("Failed to fetch data from given URL=",url));
//       }
//       resolve(data);
//     },5000);
//   });
// }

// let promise = myFetch("https://fake-json-api.mock.beeceptor.com/users");

// promise
// .then(response => printResponse(response))
// .catch(err => console.log(err));

// setTimeout(()=>{
//   console.log(promise);
// },7000);

function enrichResponse(data){
  return new Promise((resolve, reject) => {
    if(data== null){
      reject({response: null, errormsg:"Failes to fetch data"});
    }
    resolve(({
      response: data,
      message: "User data fetch succesfully"
    }))
  })
  console.log(data);
}

let promise  = fetch("https://fake-json-api.mock.beeceptor.com/companies")

// nested promise chanining
// promise.then(response => {
//   response.json()
//     .then(res=> enrichResponse(res)
//       .then(enrichedResponse => console.log(enrichedResponse)));
// });


// // promise chaining  use this one
promise
  .then(response => response.json())
  .then(res => enrichResponse(res))
  .then(enrichpromise => console.log(enrichpromise))