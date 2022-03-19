import './Index.css';
import notFound from "../assests/notfound.png"


function NotFound() {
  return (
      <>
        <div className='box'>
            <img src={notFound} alt="img" className='img-responsive'/>
        </div>
    </>
  );
}

export default NotFound;