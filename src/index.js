import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< Updated upstream
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {router} from './router/router';
import {RouterProvider} from 'react-router-dom';
=======
import { router } from './routes/router';
>>>>>>> Stashed changes

import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import ViewContract from './Components/Module/contracts/ViewContract';
import CreateContract from './Components/Module/contracts/CreateContract';
import List from './Components/Module/contracts/List';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
<<<<<<< Updated upstream
    <RouterProvider router={router}></RouterProvider>
=======
    {/* <RouterProvider router={router}/>
     */}
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={ViewContract} />
          <Route path="/view1" component={CreateContract} />
          <Route path="/view2" component={List} />
        </Switch>
      </Layout>
    </Router>
>>>>>>> Stashed changes
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
