let func = async function(){
  console.log("Hello");
}
// Async fucntion always return a promise
console.log(func());

let func2 = async () =>{
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
    const data =[
      {id:1, name: "Sameer", age: 25},
      {id:2, name: "John", age: 30},
      {id:3, name: "Jane", age: 28}
    ];
    resolve(data);
  },4000);
})
}

async function printData() {
//   // func2().then(res => console.log(res))
//   const res = await func2();
//   console.log(res);
// }
  const response = await fetch("https://fake-json-api.mock.beeceptor.com/companies");
  const jsonresponse = await response.json();
  console.log(jsonresponse);
}

printData();
