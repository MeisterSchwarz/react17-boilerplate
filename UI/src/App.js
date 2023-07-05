import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GitHub from "./Components/GitHub";

class App extends Component
{

    render(){
        return(
            <Router>
                <div className="home">
                    <h2>Hello React!</h2>
                    <GitHub/>
                </div>
            </Router>       
        )
    }
}

export default App;