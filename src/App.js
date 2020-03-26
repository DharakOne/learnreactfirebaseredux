import React from 'react'
import { BrowserRouter ,Switch,Route} from 'react-router-dom'
import Navbar from './componets/layout/Navbar'
import Dashboard from './componets/dashboard/Dashboard'
import ProjecDetail from './componets/projects/ProjectDetails'
import SignIn from './componets/auth/SignIn'
import SignUp from './componets/auth/SignUp'
import CreateProject from './componets/projects/CreateProject'


export default function App() {
    return (
        <BrowserRouter>
            <div className="App">
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/login' component={SignIn} />
                <Route exact path='/signUp' component={SignUp} />
                <Route exact path='/project/:id' component={ProjecDetail} />
                <Route exact path='/signUp' component={SignUp} />
                <Route exact path='/createproject' component={CreateProject} />
            </Switch>
            </div>
        </BrowserRouter>
    )
}