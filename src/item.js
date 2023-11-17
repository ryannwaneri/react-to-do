import { useState } from "react";

class Item {
    constructor(description, done, time){
        this.description = description;
        this.done = done;
        this.time = time;
    }
}

export default Item;