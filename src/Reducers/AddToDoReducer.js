

const initialState = {
    todos:[
        
        
    ]
}



export const AddToDoReducer = (state = initialState, action)=>{

    switch (action.type) {


        case "ADD_TODO": return {todos:[action.payload, ...state.todos]};

        case "DELETE_TODO": return{

            ...state.todos,

           todos:state.todos.filter((item)=>action.payload),
        };
            
        
        default: return state;
           
    }

}