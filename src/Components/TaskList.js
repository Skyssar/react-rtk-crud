import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

function TaskList() {

   const tasks = useSelector(state => state.tasks);
   const dispatch = useDispatch();

   const handleDelete = ( id ) =>{
      dispatch( deleteTask( id ) );
   }

   return (
      <div className="w-4/6">
         <header className="flex justify-between items-center py-4">
            <h2>TaskList { tasks.length }</h2>
            <Link to='/create-task' className="bg-indigo-600 px-2 py-1 rounded-sm">
               Create Task
            </Link>
         </header>
         <div className="grid grid-cols-3 gap-4">
         {
            tasks.map(task =>(
               <div key={ task.id } className="bg-neutral-800 p-4 rounded-md">
                  <h4>{ task.title }</h4>
                  <p>{ task.description }</p>
                  <Link to={ `/edit-task/${ task.id }` }>Edit</Link>
                  <button onClick={ () => handleDelete( task.id ) }>
                     Delete
                  </button>
               </div>
            ))
         }
         </div>
      </div>
   )
}

export default TaskList