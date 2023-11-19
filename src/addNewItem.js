import { useContext } from "react";
import { ToDoListContext } from "./App";
import Item from "./item";

const AddNewItem = () => {

    const {ToDoList,setToDoList,ItemDescription,setItemDescription} = useContext(ToDoListContext);

    const addToDoItem = (item) => {
        setItemDescription("");
        const newArray = ToDoList.slice();
        newArray.push(item);
        setToDoList(newArray);
    }

    const handleKeyDown = (e) => {
        if(e.key==="Enter"){
            addToDoItem(new Item(ItemDescription,false,"----"))
        }
    }
    return(
        <>
            <p className="add-new-item-header">Add new to-do list item</p>
            <div className="add-new-item-entry-box">
                <input 
                    className="add-new-item-description" 
                    placeholder="ADD TO-DO DESCRIPTION"
                    value={ItemDescription}
                    onChange={(e)=>{setItemDescription(e.target.value)}}
                    onKeyDown={handleKeyDown}
                />
                <button 
                    className="add-new-item-button" 
                    onClick={()=>{addToDoItem(new Item(ItemDescription,false,"----"))}}
                >
                    ADD
                </button>
            </div>
        </>
    )
}

export default AddNewItem;