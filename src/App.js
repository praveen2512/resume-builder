import { Form } from "./components/form/Form";
import Template from './components/templates/template1/Template';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './util.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Template}/>
        <Route exact path="/form" component={Form}/>
      </Switch>
    </Router>
  );
}

export default App;
