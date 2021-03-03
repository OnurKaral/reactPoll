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
    <div className="App"  className="center">
      <Router>
      <div className="demo">
          <div className="demo-nav" >
              <Link to="/">Questions</Link>
              <Link to="/new">New</Link>
            </div>

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
