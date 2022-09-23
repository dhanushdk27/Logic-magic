import logo from './logo.svg';
import './App.css';
import Category from './Components/Home/Category';
import { Container } from '@mui/material'; import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Alldetailpage from './Components/Home/Alldetailpage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Container style={{ marginTop: "5rem" }}>
            <Category />
          </Container>
        </Route>
        <Route path="/alldetailpage/:id" exact >
          <Alldetailpage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
