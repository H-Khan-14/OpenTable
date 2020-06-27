import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import PostList from './components/PostList';
import SearchBar from './components/SearchBar';
import OpenTable from './apis/OpenTable';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <SearchBar />
        <RestaurantList />
      </Provider>
    </div>
  );
};

export default App;
