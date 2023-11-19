import React, { useEffect, useState } from "react";
import Header from "./header";
import AddNewItem from "./addNewItem";
import ToDoItemList from "./toDoItemList";
import './App.css';


// Warning!!! Refactor your context to be more generalised since it now holds multiple states.
const ToDoListContext = React.createContext();

const calculatePercentage = (ToDoList,setPercentageDone) => {
    let numberDone = 0;

    const newArray = ToDoList.slice();
    newArray.map((item)=>{
        if (item.done===true) {numberDone++}
    })

    let result = ((numberDone/newArray.length)*100).toFixed(2);

    if(result>0){
        setPercentageDone(result.toString());
    }else{
        setPercentageDone("----");
    }
}

const App = ({children}) => {

    const [ToDoList,setToDoList] = useState([]);
    const [ItemDescription,setItemDescription] = useState("");
    const [percentageDone,setPercentageDone] = useState("----");

    useEffect(()=>{
        calculatePercentage(ToDoList,setPercentageDone)
    })


    return(
            <ToDoListContext.Provider value={{ToDoList,setToDoList,ItemDescription,setItemDescription,percentageDone,setPercentageDone}}>
                <div className="App">
                    <header>
                        <Header/>
                    </header>

                    <div className="add-new-item">
                        <AddNewItem/>
                    </div>

                    <div className="to-do-item-list">
                        <ToDoItemList/>
                    </div>
                </div>
            </ToDoListContext.Provider>
    )
}

export default App;
export {ToDoListContext,calculatePercentage};