import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Questions from './pages/Questions';
import New from './pages/New';
function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Questions</Link>
            </li>
            <li>
              <Link to="/new">New</Link>
            </li>
          
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Questions}/>
          <Route path="/new" component={New}/>
        
         
          
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
