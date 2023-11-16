import { useState } from "react";
import deleteIcon from "./delete.svg"

let ToDoItem = ({item}) => {
    const [checked,setChecked] = useState(false);
    return(
        <div className="to-do-item">
            <div className="to-do-item-done">
                <input 
                    type="checkbox" 
                    onChange={() => checked === false ? setChecked(true) : setChecked(false)} 
                />
            </div>

            <p className="to-do-item-description">{item.description}</p>

            <p className="to-do-item-time">{item.time}</p>

            <div  className="to-do-item-delete">
                <img src={deleteIcon} alt="delete item" />
            </div>
        </div>
    )
}

export default ToDoItem;