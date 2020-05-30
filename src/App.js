import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Shop from './Pages/Shop';
import ProductList from './components/PloductList/ProductList';
import ProductView from './components/ProductVew/ProductView';
import Layout from './hoc/Layout';
import './index.scss';

function App() {


  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Shop} />
        <Route path="/product/:cat" component={ProductList} />
        <Route path="/product/" component={ProductList} />
        <Route path="/:cat/:id" extact component={ProductView} />
        <Route path="/user/cart" />

      </Switch>
    </Layout>
  );
}

export default App;
