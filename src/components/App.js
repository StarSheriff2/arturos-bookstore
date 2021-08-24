import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './header';
import Bookstore from './bookstore';
import Categories from '../pages/Categories';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Bookstore />
            </Route>
            <Route path="/Categories">
              <Categories />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
