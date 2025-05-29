const fileSystem = require('fs');

function meraPehlaKaam(){
  console.log("pehla Kaam");
}

function meraDoorsaKaam(err, data){
  if(err==null){
    console.log('Mera doosra Kaam',data);
  }
  else{
    console.error("Error reading file", err);
  }
}

setTimeout(meraPehlaKaam,3000);

fileSystem.readFile('sample.txt','utf8',meraDoorsaKaam);

console.log("File reade");