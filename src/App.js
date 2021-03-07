import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Questions from './pages/Questions';
import New from './pages/New';
import PollQuestion from './pages/PollQuestion/index';

function App() {
  return (
    <div className="App"  // eslint-disable-next-line
     className="center">
    
         <h1 style={{marginLeft: "15px"}}>reactPOLL</h1>    

      <Router>
      <div className="demo">
          <div className="demo-nav" >
              <Link to="/">Questions</Link>
              <Link to="/new">New</Link>
            </div>

        <Switch>
        <Route path="/" exact component={Questions} />
							<Route path="/q/:id" component={PollQuestion} />
							<Route path="/new" component={New} />
       
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
