import { Component } from "react";
import "./ThisTodos.css";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: "",
      data: [
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
      ],
    };
  }

  todoTambah(newTodo) {
    this.setState({
      data: [...this.state.data, newTodo],
    });
  }

  todoHapus(id) {
    const todos = [...this.state.data];
    const DataTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      data: [...DataTodo],
    });
  }

  todoChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  todoSumbit = (e) => {
    e.preventDefault();
    const newData = {
      id: this.state.data.length + 1,
      title: this.state.todo,
      completed: false,
    };

    // console.log(newData);
    this.todoTambah(newData);
    this.setState({
      todoList: "",
    });
  };


  todoRubah(id) {
    const todos = [...this.state.data];
    todos[id - 1].completed = !todos[id - 1].completed;
    this.setState({
      data: [...todos],
    });

    console.log(todos);
  }

  render() {
    const data = this.state.data;
    const todo = this.state.todo;
    return (
      <body>
    <div className="judul-todos">todos</div>

    <div className="todo-masukan">
      <input type="text" placeholder="Add todo..."
            name="todo"
            value={this.state.todo}
            onChange={this.todoChange}
             />
      <button onClick={this.todoSumbit}>Submit</button>
    </div>
    {data.map(x =>(
  
        <div className="todos">
      <div className="hasil">
        <input type="checkbox"
                checked={x.completed}
                onChange={() => this.todoRubah(x.id)} />
                {x.completed ? (<div className="judul garis-coret"> {x.title}{" "}</div>):(
                  <div className="judul"> {x.title}{" "}</div>
                )}
        
      </div>
      <div className="btn-hapus">
      <button onClick={() => this.todoHapus(x.id)}>Delete</button>
      </div>
    </div>
    
  
    ))}
  </body>
    );
  }
}

export default Todos;