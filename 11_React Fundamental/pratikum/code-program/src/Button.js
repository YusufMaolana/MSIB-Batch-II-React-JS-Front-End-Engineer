import './App.css';

function  Button(props) {
    console.log(props.data);
    return(
        <div>
        {
            props.data.map(x =>{
              if(x.completed){
               return <button key={x.id} className="tombol-coret">{x.title}</button>
              }else{
                return <button key={x.id} className="tombol">{x.title}</button>
              }
             })
           }
        </div>
    );
}

export default Button;