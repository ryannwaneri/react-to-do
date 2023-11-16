
const AddNewItem = () => {
    return(
        <>
            <p className="add-new-item-header">Add new to-do list item</p>
            <div className="add-new-item-entry-box">
                <input className="add-new-item-description" placeholder="ADD TO-DO DESCRIPTION"/>
                <button className="add-new-item-button">
                    Add
                </button>
            </div>
        </>
    )
}

export default AddNewItem;