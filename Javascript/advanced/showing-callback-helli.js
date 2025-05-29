function validateFile(filename, compressFileCallBack){
  if(filename.endsWith('.jpg')){
    setTimeout(() => {
      if(!filename.endsWith('.jpg')){
        return compressFileCallBack(new Error("Invalid"),false);
      }
      console.log("Compressing Validates");
      compressFileCallBack(null,true,uploadFile);
  },2000);
}
}


async function compressFile(error, isValidataed, uploadFileCallBack){
  setTimeout(()=>{
    if(error){
      console.error(error.message);
      return;
    }
    else{
      const compressedData = 'Compressed Data';
      console.log("Compressed SuccesfUliiy");
      uploadFileCallBack(compressFile,logFileStatus)
    }
  },3000);
}


function uploadFile(compressedData, logFileStatus){
  setTimeout(()=>{
    if(compressedData.length!=0){
      console.log("File is Loadaed")
      const isUploaded = true;
      logFileStatus(null,isUploaded);
    }
  },2000);
}

function logFileStatus(error, isUploaded){
  setTimeout(()=>{
    if(error){
      console.log(error.message);
      return;
    }
    else{
      console.log('File Succesfully Uploaded');
    }
  },1000);
}

validateFile('hello.jpg',compressFile);