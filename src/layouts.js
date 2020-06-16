import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './views/home';
import NotFound from './views/notfound';
import About from './views/about';
import Contact from './views/contact';

const Layout = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/contact/category/:category" component={Contact} />
                    <Route path="/contact/groups/:group" component={Contact} />
                    <Route path="/contact" component={Contact} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Layout;