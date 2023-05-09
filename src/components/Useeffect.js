import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const[count, setCount]=useState(0);
    const[clicked, updateData]=useState(5);
    useEffect(()=>{
      
    })
  return (
    <div>
        <button onClick={()=>setCount(count + 1 )}>Click Me to Add {count}</button>
        <button onClick={()=>updateData(clicked + 1)}>click here {clicked}</button>

    </div>
  )
}
export default Useeffect