import React from 'react'

const ChildComponent1 = ({setSelectedOption}) => {
  return (
    <div style={{backgroundColor: "orange", padding: "5px"}}>
        <p>Child Component 1</p>
        <button onClick={()=>setSelectedOption("Option 1")}>Option 1</button>
    </div>
  )
}

export default ChildComponent1