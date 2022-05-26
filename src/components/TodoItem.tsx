import React from "react";
import classes from './TodoItem.module.css'

const TodoItem:React.FC<{title:string, id:string, onDeleteItem:(todoId:string) => void}> = (props) => {

    const test = props.id;
 

    return (
     <li className={classes.item} onClick={() => props.onDeleteItem(test)}>{props.title}</li>
    )

}

export default TodoItem;