import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Companies from './containers/companies/Companies';
import Employees from './containers/employees/Employees';
import MoveToCompany from './containers/moveToCompany/MoveToCompany';
import Home from './containers/home/Home';
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/companies' component={Companies} />
        <Route exact path='/employees' component={Employees} />
        <Route exact path='/move' component={MoveToCompany} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
