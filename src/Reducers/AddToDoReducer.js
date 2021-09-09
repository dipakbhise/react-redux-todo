const initialState = {
    todo:[
        {
            todo:"",
            desc:"",
            date:""
        }
    ]
}

export const AddToDoReducer = (state = initialState, action)=>{

    switch (action.type) {


        case "ADD_TODO": return {todo:[action.payload, ...state.todo]}
            
        
        default: return state;
           
    }

}