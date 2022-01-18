import React, { useState } from "react";
import { Button } from "antd";

const UseReducer = ()=>{
  const [count,setCount] = useState(0);
  return(
    <>
    <p>{count}</p>
    <div>
      <Button type="primary" onClick={() => setCount(count+1)}>inc</Button>
      <Button type="primary" onClick={() => setCount(count-1)}>dec</Button>
    </div>
    </>
  )
}
export default UseReducer