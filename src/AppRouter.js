import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import App from './App';
import ListComponent from './ListComponent';
import Learn from './braft-editor/learn';
import ReactIndex from './react/ReactIndex';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux-learn/usageWithReact/reducers'
import Example from './hooks/Example';
import Counter from './hooks/Counter';
import Ex01 from "./redux-learn/ex01/ex01";
import Folme1 from "./Folmejs/Folme1";
import FolmeBall from "./Folmejs/FolmeBall";
import FolReact from "./Folmejs/FolReact";
import {counter} from './@guigu/redux-todo/redux/reducers';
import GuiGuReduxTodo from './@guigu/redux-todo'
import HongBao from './zijie/ex01hongbao/hongBao'
import FirstStart from "./antv-learn/start/firstStart";

const store = createStore(rootReducer)
const storeGuiGu1 = createStore(counter)
storeGuiGu1.subscribe(()=>{

})
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
          <GuiGuReduxTodo store = {storeGuiGu1} />
          {/*<CopyMain />*/}
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
        <Route path='/zijie'>
          <HongBao />
        </Route>
        <Route path='/x6'>
          <FirstStart/>
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
          <li>
            <Link to='/x6/'>x6</Link>
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


