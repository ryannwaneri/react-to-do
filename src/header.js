import { useContext} from "react";
import { ToDoListContext } from "./App";

const Header = () => {

    const {percentageDone} = useContext(ToDoListContext);
    return(
        <>
            <div className="logo">
                <p>TO-DO LIST...</p>
            </div>

            <div className="percentage-done">
                <p className="percentage-done-label">PERCENTAGE DONE :</p>
                <p className="percentage-done-text">{percentageDone}</p>
            </div>
        </>
    )
}

export default Header;