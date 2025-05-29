const fileSystem = require('fs');

function readeFileWalaKaam(){
  console.log("Mera Pehla Kaam");
  fileSystem.readFile('sample.txt','utf8',meraDoorsaKaam);
}

function meraDoorsaKaam(err, data){
  if(err==null){
    console.log('Mera doosra Kaam',data);
  }
  else{
    console.error("Error reading file", err);
  }
}

setTimeout(readeFileWalaKaam,3000);
console.log("Hello")