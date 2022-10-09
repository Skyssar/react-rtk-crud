import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {

   const [ task, setTask ] = useState({
      title: '',
      description: '',
   });

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const params = useParams();
   const taskState = useSelector(state => state.tasks);

   const handleChange = e => {
      setTask({
         ...task,
         [e.target.name]: e.target.value,
      });
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      if ( params.id ){
         dispatch(editTask(task));
      } else {
         dispatch(addTask({
            id: uuid(),
            ...task,
         }));
      }

      navigate('/');
   }


   useEffect(() => {
      if ( params.id ) {
         setTask( taskState.find(task => task.id === params.id) );
      }
   }, []);

   return (
      <form onSubmit={ handleSubmit }>
         <input
            name="title"
            type="text"
            placeholder="title"
            onChange={ handleChange }
            value={ task.title }
         />
         <textarea
            name="description"
            placeholder="description"
            onChange={ handleChange }
            value={ task.description }
         >
         </textarea>
         <button type="submit">Save</button>
      </form>
   )
}

export default TaskForm;