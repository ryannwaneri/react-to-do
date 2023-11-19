import { useContext, useState } from "react";
import { ToDoListContext,calculatePercentage } from "./App";
import deleteIcon from "./delete.svg"

let ToDoItem = ({item,itemKey}) => {
    const [checked,setChecked] = useState(false);
    const [timeCompleted,setTimeCompleted] = useState(item.time);
    const {ToDoList,setToDoList,setPercentageDone} = useContext(ToDoListContext);

    const toggleTask = () => {
        if(checked===false){
            setChecked(true)
            item.done = true;
            item.time = new Date().toLocaleTimeString();
        }else{
            setChecked(false)
            item.done = false;
            item.time = "----";
        }
        setTimeCompleted(item.time);
        calculatePercentage(ToDoList,setPercentageDone)
    }

    const deleteTask = () => {
        const newArray = ToDoList.slice();
        newArray.splice(itemKey,1);
        setToDoList(newArray);
        calculatePercentage(ToDoList,setPercentageDone)
        setTimeCompleted(item.time);
        setChecked(false)
        console.log(ToDoList)
    }
    return(
        <div className="to-do-item">
            <div className="to-do-item-done">
                <input 
                    type="checkbox" 
                    onChange={()=>{toggleTask()}}
                    checked={item.done} 
                />
            </div>

            <p className="to-do-item-description">{item.description}</p>

            <p className="to-do-item-time">{item.time}</p>

            <div  className="to-do-item-delete">
                <img src={deleteIcon} alt="delete item" onClick={()=>{deleteTask()}}/>
            </div>
        </div>
    )
}

export default ToDoItem;