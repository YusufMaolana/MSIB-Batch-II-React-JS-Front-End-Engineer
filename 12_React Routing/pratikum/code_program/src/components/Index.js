import './Index.css';

function Index(){
        return (
            <body>
            <div class="wrapper">
               <input type="checkbox" id="btn" hidden/>
               <label for="btn" class="menu-btn">
               <i class="fas fa-bars"></i>
               <i class="fas fa-times"></i>
               </label>
               <nav id="sidebar">
                  <ul class="list-items">
                     <li><a href="#">Home</a></li>
                     <li><a>About</a></li> 
                  </ul>
               </nav>
            </div>
         </body>
        );
    }

export default Index;