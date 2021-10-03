
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import News from './Component/News/News';

function App() {
  return (
    <div className="App">
         <Router>
           <Route exact path="/" component={News}/>
         </Router>
    </div>
  );
}

export default App;
