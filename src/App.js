import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddElement from './Pages/AddElement/AddElement';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/addElement'>
              <AddElement></AddElement>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
