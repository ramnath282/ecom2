import { React } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import rootReducer from "./Reducer/rootReducer";
import Navbar from "./Navbar";
import Product from "./Product";
import Additem from "./Additem";
import Cart from "./Cart";
import { render } from '@testing-library/react';


function App() {
  // const persistConfig = {
  //   key: 'root',
  //   storage,
  // }
  // const persistedReducer = persistReducer(persistConfig, rootReducer)
  // const store = createStore(persistedReducer);
  // const persistor = persistStore(store)
  const store = createStore(rootReducer);
  return (
    <div className="App">
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <Router>
          <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Product}></Route>
            <Route path="/additem" exact render={(props) => <Additem {...props}/>}></Route>
            <Route path="/cart" exact component={Cart} ></Route>
          </Switch>
          </div>
        </Router>
        {/* </PersistGate> */}
      </Provider>
    </div>
  );
}
export default App;
