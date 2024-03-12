import './style.css';
import { FaTrash, FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { completeItem, editItem, removeItem } from '../../redux/features/todoSlice';

const ListTodo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.value);

    const handleComplete = (id) => {
        dispatch(completeItem({ id }))
    }

    const handleEdit = (id) => {
        var editedText = window.prompt("Yeni Değeri Giriniz.");
        dispatch(editItem({ id, editedText }));
    };

    const handleDelete = (id) => {
        dispatch(removeItem({ id }));
    };

    return (
        <>
            <div className='list-todo'>
                <h1>Todo List</h1>
                <ul className="todo-list">
                    {todos.map(todo => (
                        <li key={todo.id} className={todo.completed ? "completed" : ""}  >
                            <div className='item-group'>
                                <div className='toggleComplete' onClick={() => handleComplete(todo.id)}>
                                    {todo.text}
                                </div>
                                <div>
                                    <FaEdit size={24} style={{ marginRight: "5px", color: "#2b29be", cursor: "pointer" }} onClick={() => handleEdit(todo.id)} />
                                    <FaTrash size={24} style={{ marginRight: "5px", color: "#2b29be", cursor: "pointer" }} onClick={() => handleDelete(todo.id)} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div >
        </>

    );
};

export default ListTodo;
