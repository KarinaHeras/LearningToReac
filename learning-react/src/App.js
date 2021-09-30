import './App.css';
import Header from './Header';


import Mycomponent  from './componets/MyComponent';
import Home from './Home';
import Footer from './Footer';
import{ BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contact from './Contact';

function App() {
  return (
    <div className="App">
       <Header/>
      <Router>
        <Switch>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/">
          <Home/>
         </Route>
        </Switch>
      </Router>
     
      
      <Footer/>
        <div className="componet">
        
     

      </div>
  
      
    </div>
  );
}

export default App;
