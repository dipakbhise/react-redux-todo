import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addToDO } from '../Actions';
import Button from '@material-ui/core/Button';

import './home.css'




const Home = () => {

    const [id, setId] = useState(1)
    const [todo, setTodo] = useState("")
    const [desc, setDesc] = useState("")
    const [date, setDate] = useState("")
    

    const dispatch = useDispatch();

    const submitToDO = (e)=>{
        e.preventDefault();

        let defaultdate = new Date();

        defaultdate.setDate(defaultdate.getDate()-1);

   let tododate = new Date(date)

   setId(id+1)

        const data = {todo, desc, date, id}

    if (tododate < defaultdate){
        alert("wrong") 

    }else{
        dispatch(addToDO(data));
    }


        

        
            

        setDate("")
        setDesc("")
        setTodo("")

       

    

    }


    return (
        <>

        <form onSubmit={(e)=>submitToDO(e)}>

    
        Add To Do: <input required type="text" onChange={ e => setTodo(e.target.value) } value={todo}  />

        Add Description: <input type="text" required onChange={ e => setDesc(e.target.value) } value={desc} />

        Date : <input type="date" placeholder="Enter" required onChange={ e => setDate(e.target.value) } value={date}  />


        <Button type="submit" variant="contained" color="primary" >Submit</Button>



        </form>
            
        </>
    )
}

export default Home
