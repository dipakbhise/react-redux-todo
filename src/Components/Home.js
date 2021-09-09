import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addToDO } from '../Actions';




const Home = () => {

    const [todo, setTodo] = useState("")
    const [desc, setDesc] = useState("")
    const [date, setDate] = useState("")

    const dispatch = useDispatch();

    const submitToDO = (e)=>{
        e.preventDefault();

        const data = {todo, desc, date}

        
            dispatch(addToDO(data));

        

        

        setDate("")
        setDesc("")
        setTodo("")


    }


    return (
        <>

        <form onSubmit={(e)=>submitToDO(e)}>
        Add To Do: <input required type="text" onChange={ e => setTodo(e.target.value) } value={todo}  />

        Add Description: <input type="text" required onChange={ e => setDesc(e.target.value) } value={desc} />

        Date : <input type="date" required="true" onChange={ e => setDate(e.target.value) } value={date}  />

        <button type="submit" >Submit</button>

        </form>
            
        </>
    )
}

export default Home
