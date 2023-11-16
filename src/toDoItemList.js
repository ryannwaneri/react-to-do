import Item from './item';
import ToDoItem from './toDoItem';

const ToDoItemList = () => {
    return(
        <>
            <div className="to-do-list-header">
                <p className="to-do-list-header-done">Done</p>
                <p className="to-do-list-header-description">To-do description</p>
                <p className="to-do-list-header-time">Time completed</p>
                <div className="to-do-list-header-delete"></div>
            </div>
            <div className="to-do-list">
               {Item.items.map((item) => (
                <ToDoItem item={item} key={item.id}/>
               ))}
            </div>
        </>
    )
}

export default ToDoItemList;