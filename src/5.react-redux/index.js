import React from 'react';
import store from '../store';
import { Parent } from './Cpt.js';
import { Provider} from 'react-redux';

const App = () => (
  <Provider store={store}>
    <Parent />
  </Provider>
)

export default App;
