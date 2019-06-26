import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//Páginas
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/index';

function estAutenticado() {
    if (localStorage.getItem('TOKEN')) {
        return true
    } else {
        return false
    }
}

class PrivateRoute extends React.Component {
    render() {
        const Component = this.props.component
        if (estAutenticado()) {
            // componente rota tweet
            return <Route render={() => <Component {...this.props}></Component>}></Route>

        } else {
            // componente rota login
            return <Redirect to="/login"></Redirect>
        }
    }
}

const Roteamento = () => {
    return (
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    )
}

export default Roteamento;