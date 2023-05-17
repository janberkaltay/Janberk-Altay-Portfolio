import React from "react";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./component/About/About";
import Projects from "./component/Projects/Projects";
import Home from "./component/Homepage/Home";
import Contact from "./component/Contact/Contact";

const App = () => {
    return (
        <>
        <Router>
        <Navbar />
            <Switch >
                <Route path='/' component={Home} exact> <Home/>  </Route>
                <Route path='/about' component={About} exact> <About/> </Route>
                <Route path='/projects' component={Projects} exact><Projects /></Route>
                <Route path='/contact' component={Contact} exact><Contact /></Route>
            </Switch>
        </Router>
        </>
    )
}

export default App