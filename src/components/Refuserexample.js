import React, { useState } from 'react'
import { useRef } from 'react';

const Refuserexample = () => {
    const[Inputvalue, setValue]=useState("");

    const inputRef = useRef();
  function handleClick() {
    setValue(inputRef.current.value)
    console.log(inputRef.current.value);
  }
  return (
    <div>
        <div>
      <input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
      />
      <button onClick={handleClick}>Log message</button>
      {/* {Inputvalue} */}
    </div>
    </div>
  )
}

export default Refuserexample