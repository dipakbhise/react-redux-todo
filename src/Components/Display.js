import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DELETE_TODO } from '../Actions'


const Display = () => {

    const dispatch = useDispatch()

    const state = useSelector((state)=> state.AddToDoReducer.todos)

    return (
        <>

        {state.map((item, index, array)=>

        <div key={index}>

        

     <h1 >To Do : {item.todo}</h1>
     <h1>Due Date is: {item.date}</h1>
     <h1>Description: {item.desc}</h1>
     {/* <button onClick={()=>dispatch(DELETE_TODO(item.id))}>Delete</button> */}

     


         </div>
        
        )}
        
            
        </>
    )
}

export default Display
