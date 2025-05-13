import React from 'react';

class ToDoList extends React.Component {
   render() {
    // const staticToDList = [ "Learn React", "Build a project", "Read documentation"];
        return (
           <div className ="todo-container" >
           <h1>
            List:
           </h1>
               <ul className="to-do-list">
                <li>Learn React</li>
                <li>Build a project</li>
                <li>Read documentation</li>
               </ul>
           </div>
       );
   }
}
export default ToDoList;