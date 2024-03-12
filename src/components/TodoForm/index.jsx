import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { useState } from "react";
import { addItem } from "../../redux/features/todoSlice";

function TodoForm() {
    const counter = useSelector(state => state.todos.value)
    const dispatch = useDispatch();
    const [todo, setTodo] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todo);
        const data = {
            id: counter.length + 1,
            text: todo,
            completed: false
        }
        console.log(data);
        if (todo.trim() != "") {
            dispatch(addItem(data));
            setTodo("");
        } else {
            alert("Todo Boş Girilemez!")
        }
    }
    return (
        <>
            <form className="add-todo-form" onSubmit={handleSubmit}>
                <input className='add-todo-input' type="text" placeholder='Add Todo' value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button className='add-todo-button'>Add</button>
            </form>
        </>
    )
}

export default TodoForm