import { createSlice } from "@reduxjs/toolkit";



const todosSlice = createSlice({
    name :"todos",
    initialState:[],
    // id,text(action)
    reducers:{
        addtodo:(state,action)=>{
            state.push({id:Date.now(),text:action.payload});
        },
        removetodo:(state,action)=>{
            return state.filter((todo)=>todo.id !== action.payload);
        }
    }
})

export const {addtodo,removetodo}=todosSlice.actions;
export default todosSlice.reducer;