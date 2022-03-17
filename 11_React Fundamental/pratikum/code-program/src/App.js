import logo from './logo.svg';
import './App.css';
import Button from './Button';


function App() {
  const contents = [
    {
      id: 1,
      title: "Membuat Komponen",
      completed: true,
    },
    {
      id: 2,
      title: "Unit Testing",
      completed: false,

    },
    {
      id: 3,
      title: "Setup Development Enviroment",
      completed: true,

    },
    {
      id: 4,
      title: "Deploy ke server",
      completed: false,

    },
  ];
  return (
   <div className="App">
     <h2>To Do App</h2>
     <hr/>
     <Button data={contents}/>
    </div>
  );
}

export default App;
