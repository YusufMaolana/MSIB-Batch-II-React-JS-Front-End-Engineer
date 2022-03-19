# 12_React Routing

## Resume
Pada materi ini pembahasan adalah mengenai :

1. Apa itu React Routing
2. Komponen yang Ada Pada React Routing
3. Cara Menggunakan React Routing

### 1. Apa itu React Routing
React Router adalah sebuah modul yang tedapat dalam sebuah react yang dimana modul ini sendiri terpisah dari pada react sehingga ketika akan menggunakan nya harus mengisntal modul tersebut terlebih dahulu fungsi dari react routing ini adalah untuk mengabungkan multipe page dalam sebuah website sehingga menjadi single page tentu react routing ini sangat berguna karena fungsinya untuk menggubakn dan mengarhkan banyak page menjadi satu page.
>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application.(https://www.javatpoint.com/react-router)

### 2.Komponen Yang Ada Pada React Routing 
1. BrowserRouter digunakan sebagai router yang menggunakan API history dari HTML5, sehingga dapat menggunakan location untuk mensingkronasi UI dengan url. Di dalam object location sendiri merepresentasikan dimana lokasi aplikasi sekarang.

2. Switch digunakan untuk membungkus node Route, yang mana hanya akan merender satu Route saat pathnya cocok dengan URL.

3. Route digunakan untuk merender UI saat path cocok dengan URL saat ini. Di dalam Component Route ini kita menggunakan exact, yang mana bertugas untuk memastikan Route hanya merender component yang memiliki path dan location.pathname yang cocok. Jika tidak ada yang cocok, maka Route yang akan dirender yaitu Route terakhir dengan component Notfound.


### 3. Cara Menggunakan React Routing 
Berikut adalah cara menggunakan React Routing Dalam React JS :

a. Buka folder project “isikan-nama folder yang ada buat” menggunakan editor kesukaan anda(Sublime, VS Code, dll)
b. Buat folder “components” di dalam folder “src”
c. Di dalam folder “components“, buatlah beberapa file di bawah ini:

> `import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
   state = {};
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contacts</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Header;`

Home.js

>`import React, { Component } from 'react';
import Header from "./Header";
class Home extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Header />
                <h1>Home</h1>
                <p>Ini adalah halaman home</p>
            </div>
        );
    }
}
export default Home;`

About.js

>`import React, { Component } from 'react';
import Header from "./Header";
class About extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Header />
                <h1>About</h1>
                <p>Ini adalah halaman About</p>
            </div>
        );
    }
}
export default About;`

Contact.js

> `import React, { Component } from 'react';
import Header from "./Header";
class Contact extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Header />
                <h1>Kontak</h1>
                <p>Ini adalah halaman Kontak</p>
            </div>
        );
    }
}
export default Contact;`

d. Buat file di dalam folder “src”

routes.js

> `import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
function routes() {
    return(
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </div>
        </Router>
    );
}
export default routes;`

e. Edit file index.js di dalam folder “src”

>`import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Router />, document.getElementById('root'));
serviceWorker.unregister();`

d. Setelah semua selesai dan di save lihatlah browser yang telah dibuka dengan alamat http://localhost:3000.

#
#### Berikut contoh adalah sebuah project web sederhana menggunakan React Js & React Router :

><img src=".\screenshots\">