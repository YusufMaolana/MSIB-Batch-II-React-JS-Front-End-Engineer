import { useState } from "react";
import "./Todos.css";

function Todos (){
    const [valueTodo, setValueTodo] = useState(" ");
    const [todos, setTodos] = useState([
                     {
                    
                      id: 1,
                      title: "Mengerjakan Exercise",
                      completed: true,
                    },
                    {
                      id: 2,
                      title: "Mengerjakan Assignment",
                      completed: false,
                    },
                    {
                      id: 3,
                      title: "Mengerjakan Soal",
                      completed: true,
                    },
                ]);

    const todoTambah = (newTodo) => {
    const TodoBaru= [...todos, newTodo]
    setTodos(TodoBaru);
    }
  
  const todoHapus = (id) => {
    const thisTodo = [...todos];
    const dataTodo = thisTodo.filter((x) => {
      return x.id !== id;
    });
    setTodos(dataTodo);
  }

  const todoSumbit = (e) => {
    e.preventDefault();
    if (valueTodo == "" || valueTodo == " "){
     return alert ("Tolong Masukan Data Colum Tidak Boleh Kosong");
    } else {
    const dataBaru = {
      id: todos.length + 1,
      title: valueTodo,
      completed: false,
    }
    todoTambah(dataBaru);
    setValueTodo(" ");
}

  }
  

  const todoRubah = (index) => {
    const thisTodo = [...todos];
    thisTodo[index].completed = !thisTodo[index].completed;
    setTodos([...thisTodo]);

    console.log(todos);
  }
    return (
      <body>
    <div className="judul-todos">todos</div>

    <div className="todo-masukan">
      <input type="text" placeholder="Add todo..."
            name="todo"
            value={valueTodo}
            onChange={ (e) => setValueTodo(e.target.value) }
             />
      <button onClick={todoSumbit}>Submit</button>
    </div>

    {todos.map((todo, index) =>(
  
        <div key={index} className="todos">
      <div className="hasil">
        <input type="checkbox"
                checked={todo.completed}
                onChange={() => todoRubah(index)} 
                />
                {todo.completed ? (<div className="judul garis-coret"> {todo.title}</div>
                ):(
                  <div className="judul"> {todo.title}{" "}</div>
                )}
        
      </div>
      <div className="btn-hapus">
      <button onClick={() => todoHapus(todo.id)}>Delete</button>
      </div>
    </div>
    
  
    ))}
  </body>
    );
  }


export default Todos;