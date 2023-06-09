import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    useEffect(()=> {
        console.log("count 2 changed!!")
    },[count2])

    return (
        <div>
            {count1} {count2} {count3}
            <br/>
            <button onClick={()=>{setCount1(count1 + 1)}}>count1 up</button>
            <button onClick={()=>{setCount2(count2 + 1)}}>count2 up</button>
            <button onClick={()=>{setCount3(count3 + 1)}}>count3 up</button>
        </div>
    )
}

export default UseEffect
