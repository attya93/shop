import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Shop from './Pages/Shop';

import Layout from './hoc/Layout';
import './index.scss';

function App() {


  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Shop} />
        <Route path="/prod/categ" />
        <Route path="/auth" />
        <Route path="/user/cart" />

      </Switch>
    </Layout>
  );
}

export default App;
