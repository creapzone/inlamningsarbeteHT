import './App.css';
import React from 'react'
import {
    BrowserRouter as Router,
} from "react-router-dom"
import Nav from "./components/Nav";
import uwu2 from "./components/video/uwu2.mp4"


class App extends React.Component {



    render() {
        return (
            <Router>
                <div>
                    <Nav />
                </div>
                <div className="video">
                    <video autoPlay loop muted>
                        <source src={uwu2} type="video/mp4" />
                    </video>
                </div>
                <div className="fancy">
                    <p>Användarnamn</p>
                    <input id="username" type="text" name="username"/>
                    <p>Lösenord</p>
                    <input id="password" type="text" name="password"/><br/>
                    <button>Logga in</button>
                </div>
            </Router>
        );
    }
}


export default App;
