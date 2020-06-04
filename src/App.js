import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Shop from './Pages/Shop';
import NewProduct from './Pages/NewProduct';
import UpdateProduct from './components/NewProductItem/UpdateProduct/UpdateProduct';
import ProductList from './components/PloductList/ProductList';
import ProductView from './components/ProductVew/ProductView';
import Order from './Pages/Order';
import Layout from './hoc/Layout';
import './index.scss';

function App() {


  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Shop} />
        <Route path="/admin/New-product" exact component={NewProduct} />
        <Route path="/order/cart" exact component={Order} />
        <Route path="/admin/:cat/:prodId/edit" component={UpdateProduct} />
        <Route path="/product/:cat" component={ProductList} />
        <Route path="/product/" component={ProductList} />
        <Route path="/:cat/:id" extact component={ProductView} />
      </Switch>
    </Layout>
  );
}

export default App;
