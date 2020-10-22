import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducer'
import App from './App';

const store = createStore(rootReducer)

class CopyMain extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <App/>
        </div>
      </Provider>
    );
  }
}

export default CopyMain;
