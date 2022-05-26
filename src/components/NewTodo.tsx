import React, { useContext, useRef } from "react"
import { TodosContext } from "../store/todo-context2";
import classes from './NewTodo.module.css';

const NewTodoItem:React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const todoCtx = useContext(TodosContext);

    const onSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();

        const inputRefTxt = inputRef.current!.value;

        todoCtx.addTodo(inputRefTxt);
        
    }

    return <form className={classes.form} onSubmit={onSubmitHandler}>
        <label htmlFor="txtTodo">Todo</label>
        <input type='text' id="txtTodo" ref={inputRef} />
        <button>Create</button>
    </form>
}

export default NewTodoItem