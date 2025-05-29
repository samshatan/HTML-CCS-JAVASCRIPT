const fileSystem = require('fs');

function callback(err, data){
  if(err==null){
    console.log('file conetent',data);
  }
  else{
    console.error("Error reading file", err);
  }
}

const data = fileSystem.readFile('sample.txt','utf8',callback);
console.log(data);
console.log('File read initiates, waitiing for callback');