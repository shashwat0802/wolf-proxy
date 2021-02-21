import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Product from './pages/Product';
import Home from './pages/Home';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/product" component={Product} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
