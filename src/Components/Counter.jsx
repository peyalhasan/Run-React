import { useState } from "react";


function Counter(){
    const[count, setCount] = useState(0)

    const handleClick = clicks =>{
        if(clicks === 'increase'){
            setCount(click => click + 1)
        }
        else if(clicks === 'reset'){
            setCount(0)
        }
        else if(clicks === 'decrease'){
            setCount(click => click -1)
        }
    }

    return(
        <div className="flex flex-col  justify-center items-center bg-blue-400 pb-8 ">
            <div className=" text-center 
             shadow-xl p-5 md:m-10 m-4 w-50 h-50 bg-white rounded-lg">
                <h1 className="text-4xl text-center font-bold" >🖥️</h1>
                <span className="text-4xl text-center font-bold">Count</span>
                <p className='text-6xl  mt-4'>{count}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                <button onClick={() => handleClick('increase')} className=" btn btn-primary text-white" > ➕ Increase</button>
                <button onClick={() => handleClick('reset')} className="btn btn-error text-white" > 🔄️Reset</button>
                <button onClick={() => handleClick('decrease')} className="btn btn-secondary text-white"> ➖ Decrease</button>
            </div>
        </div>
            
    )
}

export default Counter;