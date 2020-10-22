import React, {Component} from 'react';
import AddTodo from './container/AddTodo'
import VisibleTodoList from './container/VisibleTodoList'
import Footer from './components/Footer'
class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
