import { useState } from "react";

class Item {
    constructor(description, done, time){
        this.id = this.items.length+1;
        this.description = description;
        this.done = done;
        this.time = time;
    }
    
    static items = [
        {
            id : 0,
            description : 'sand',
            done : true,
            time : '3pm'
        },
        {
            id : 3,
            description : 'water',
            done : true,
            time : '20pm'
        }
    ];

}

export default Item;