import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Home from './home.jsx';
import TodoPage from './TodoPage.jsx';
import ContextProvider from '../Context.jsx';


export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <ContextProvider>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/todo/:index">
                        <TodoPage />
                    </Route>
                </ContextProvider>
            </Switch>
        </BrowserRouter>
    )
}