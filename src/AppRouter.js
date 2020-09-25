import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import App from './App';
import ListComponent from './ListComponent';
import ListItem from './ListItem';
import Learn from './braft-editor/learn';
import Screen from './Screen';
import ReactIndex from './react/ReactIndex';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux-learn/usageWithReact/reducers'
import TodoList from './TodoList';
import TodoIndex from './TodoIndex';
import Example from './hooks/Example';
import Counter from './hooks/Counter';
import Ex01 from "./redux-learn/ex01/ex01";
import Folme1 from "./Folmejs/Folme1";
import FolmeBall from "./Folmejs/FolmeBall";
import FolReact from "./Folmejs/FolReact";

const store = createStore(rootReducer)

const dataList = [
  {cid: 123, title: '技术胖的个人博客-1'},
  {cid: 456, title: '技术胖的个人博客-2'},
  {cid: 789, title: '技术胖的个人博客-3'}
];

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route path='/index'>
          <ReactIndex/>
        </Route>
        <Route path='/inHtml'>
          <Learn/>
        </Route>
        {/*<Provider store={}>*/}
        {/*  <Route path='/todoList'>*/}
        {/*    <TodoIndex/>*/}
        {/*  </Route>*/}
        {/*</Provider>*/}
        <Route path='/hooks'>
          <Example/>
          <Counter/>
        </Route>
        <Route path='/redux'>
          <Ex01/>
        </Route>
        <Route path='/folme'>
          <Folme1/>
          <FolmeBall/>
          <FolReact/>
        </Route>
        <Route path='/'>
          <Provider store={store}>
            <App/>
          </Provider>
        </Route>
      </Switch>
      <Route path="/list/:id" component={ListComponent}/>
    </BrowserRouter>
  );
}

function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/inHtml/'>Braft Editor</Link>
          </li>
          <li>
            <Link to='/hooks/'>Hooks Learn</Link>
          </li>
          <li>
            <Link to='/redux/'>Redux Learn</Link>
          </li>
          <li>
            <Link to='/folme/'>Folmejs</Link>
          </li>
          {/*<ListLink />*/}
        </ul>
      </nav>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        <li>
          {/*<Link to='/users/user'>User</Link>*/}
        </li>
      </ul>
    </div>
  );
}

// function ListLink(dataList) {
//
//   return (
//     dataList.map((item, index) => {
//         return (
//           <li key={index}>
//             <Link to={'/list/' + item.cid}> {item.title}</Link>
//           </li>
//         );
//       }
//     )
//   );
// }


