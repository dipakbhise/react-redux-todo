import { ADD_TODO } from "./Constants"

export const addToDO = (data)=>{
    return{
        type:ADD_TODO,
        payload : data
    }
}

export const DELETE_TODO = (id)=>{
    return{
        type:DELETE_TODO,
        payload : id
    }
}