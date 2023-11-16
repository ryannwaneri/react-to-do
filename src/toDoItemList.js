import Item from './item';
import ToDoItem from './toDoItem';

const ToDoItemList = () => {
    return(
        <>
            <div className="to-do-list-header">
                <p>Done</p>
                <p>To-do description</p>
                <p>Time completed</p>
            </div>
            <div className="to-do-list">
               {Item.items.map((item) => (
                <ToDoItem item={item}/>
               ))}
            </div>
        </>
    )
}

export default ToDoItemList;