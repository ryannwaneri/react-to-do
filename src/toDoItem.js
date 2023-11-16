import { useState } from "react";

let ToDoItem = ({item}) => {
    const [checked,setChecked] = useState(false);
    console.log(item);
    return(
        <div>
            <input type="checkbox" onChange={() => checked === false ? setChecked(true) : setChecked(false)}/>
            <p>{item.description}</p>
            <p>{item.time}</p>
            <button>
                delete
            </button>
        </div>
    )
}

export default ToDoItem;