let promise = await fetch("http://localhost:8080/movieSection");
if(promise.ok){
  let json = await promise.json();
  console.log(json);
}
else{
  console.log("helloo");
}