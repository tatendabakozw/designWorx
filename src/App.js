import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Cooperate from './Pages/Cooperate';
import Personal from './Pages/Personal';
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/about' component={About}/>
        <Route path='/cooperate' component={Cooperate}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/personal' component={Personal}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/services' component={Services}/>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
