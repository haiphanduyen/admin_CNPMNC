import logo from "./logo.svg"

import "./App.css"

import Routes from "./routes"

import { Suspense } from "react"

import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom"

import NotFound from "./components/Common/NotFound"

function App() {
    return (
        <div>
            <Suspense fallback={() => <h1>Loading...</h1>}>
                <Router>
                    <Switch>
                        <Redirect exact from="/" to="/admin" />

                        <Route path="/admin" component={Routes} />

                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </Suspense>
        </div>
    )
}

export default App
