import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GitHub from "./Components/GitHub";
import Header from "./Components/Header";

class App extends Component
{
    render(){
        return(
            <Router>
                <div className="home">
                    <Header/>
                    <GitHub/>
                </div>
            </Router>       
        )
    }
}

export default App;