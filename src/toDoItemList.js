import { useContext } from 'react';
import { ToDoListContext } from './App';
import ToDoItem from './toDoItem';

const ToDoItemList = () => {
    const {ToDoList,setToDoItemList} = useContext(ToDoListContext);
    return(
        <>
            <div className="to-do-list-header">
                <p className="to-do-list-header-done">Done</p>
                <p className="to-do-list-header-description">To-do description</p>
                <p className="to-do-list-header-time">Time completed</p>
                <div className="to-do-list-header-delete"></div>
            </div>
            <div className="to-do-list">
               {
                    ToDoList.map((item,index) => (
                        <ToDoItem item={item} key={index} itemKey={index}/>
                    ))
               }
            </div>
        </>
    )
}

export default ToDoItemList;