import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoHapus, todoTambah, todoCoret } from '../store/TodosSlice';
import './Todos.css';

function TodosApp() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const [valueTodo, setValueTodo] = useState('');

  const todoSumbit = (e) => {
    e.preventDefault();
    if (valueTodo == false) {
      return alert('Coulom Data Tidak Boleh Kosong');
    } else {
      const dataBaru = {
        id: todos.length + 1,
        title: valueTodo,
        completed: false,
      };
      dispatch(todoTambah(dataBaru));
      setValueTodo(' ');
    }
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('enter');
      todoSumbit(e);
    }
  };

  console.log(todos);
  return (
    <div className="utama">
      <div className="judul-todos">todos</div>

      <div className="todo-masukan">
        <input
          type="text"
          placeholder="Add todo..."
          name="todo"
          value={valueTodo}
          onChange={(e) => setValueTodo(e.target.value)}
          onKeyPress={onKeyPress}
        />
        <button onClick={todoSumbit}>Submit</button>
      </div>

      {todos.map((todo, index) => (
        <div key={index} className="todos">
          {console.log(todo.completed)}
          <div className="hasil-todo">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(todoCoret(index))}
            />
            {todo.completed ? (
              <div className="title correct">{todo.title}</div>
            ) : (
              <div className="title ">{todo.title}</div>
            )}
          </div>
          <div
            className="btn-hapus"
            onClick={() => dispatch(todoHapus(todo.id))}
          >
            <span>Delete</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodosApp;
