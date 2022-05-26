import React, { useContext } from "react";
import Todo from "../models/todo";
import { TodosContext } from "../store/todo-context2";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';

const Todos:React.FC = () => {

    const contextTodo = useContext(TodosContext)

    return (
    <ul className={classes.todos}>
        {contextTodo.items.map(item => <TodoItem key={item.id} id={item.id}  title={item.title} onDeleteItem={contextTodo.removeTodo}/>)}
       
    </ul>

    
    )
}


export default Todos;