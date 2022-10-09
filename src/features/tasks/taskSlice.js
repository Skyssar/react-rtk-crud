import { createSlice } from "@reduxjs/toolkit";
import { initialTasks } from "./initialState";

export const taskSlice = createSlice({
   name: 'tasks',
   initialState: initialTasks,
   reducers: {
      addTask: ( state, action ) => {
         state.push( action.payload );
         // return [ ...state, action.payload ]
      },
      editTask: ( state, action ) => {
         const taskFound = state.find( e => e.id === action.payload.id);
         if ( taskFound ){
            state.splice(state.indexOf(taskFound), 1, action.payload);
         }
      },
      deleteTask: ( state, action ) => {
         const taskFound = state.find( e => e.id === action.payload );
         if ( taskFound ){
            state.splice(state.indexOf(taskFound), 1);
         }
         // return [ ...state.filter(e => e.id !== action.payload) ]
      },
   }
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
