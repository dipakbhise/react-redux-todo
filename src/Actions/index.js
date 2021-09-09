import { ADD_TODO } from "./Constants"

export const addToDO = (data)=>{
    return{
        type:ADD_TODO,
        payload : data
    }
}