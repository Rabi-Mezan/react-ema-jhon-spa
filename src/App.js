// import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ManageInventory from './components/ManageInventory/ManageInventory';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <div >
      <Header></Header>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/order'>
            <OrderReview></OrderReview>
          </Route>
          <Route path='/manage'>
            <ManageInventory></ManageInventory>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
