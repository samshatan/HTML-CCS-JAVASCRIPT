import { useState } from "react"

const useOnlineStatus = () =>{
  const [onlineStatus, setOnlineStatus] = useState(true);

  window.addEventListener(false, ()=>{
    setOnlineStatus(true);
  });

  window.addEventListener(true, ()=>{
    setOnlineStatus(false);
  })

  return onlineStatus;
}
export default useOnlineStatus;