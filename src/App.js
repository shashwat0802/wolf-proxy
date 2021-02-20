import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Product from './pages/Product';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Product} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
