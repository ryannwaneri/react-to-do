import React from "react";
import Header from "./header";
import AddNewItem from "./addNewItem";
import ToDoItemList from "./toDoItemList";
import './App.css';

const App = () => {
    return(
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
    )
}

export default App;