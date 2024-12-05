import { configureStore } from "@reduxjs/toolkit";
import todosReduser from './ToDoSlice'


const store = configureStore({
    reducer :{
        todos:todosReduser,
    }
})

export default store;
