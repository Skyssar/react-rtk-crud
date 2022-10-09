import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom"
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";

function Routes() {
   return (
      <Router>
         <Switch>
            <Route path="/" index element={ <TaskList /> } />
            <Route path="/create-task" element={ <TaskForm /> } />
            <Route path="/edit-task/:id" element={ <TaskForm /> } />
         </Switch>
      </Router>
   )
}

export default Routes