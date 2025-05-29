function validateFile(FileName){
  if(FileName.endsWith('.jpg')) return true;
  return false;
}

async function compressFile(){
  // .....
  // ...
  // return data;
}

async function uploadFile(data){
  // ..
  // ...

  // fetch(){

  // }

  // return true/false;
}

function logFileStatus(){
  console.log("File Status uploaded");
}


const isValidataed = validateFile(file);
if(isValidataed){
  const compressFile = compressFile(file);
  const isUpload = uploadFile(compressFile);
  if(isUpload){
    logFileStatus;
  }
  else{
    console.log("False");
  }
}