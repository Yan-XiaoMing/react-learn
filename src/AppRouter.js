import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import App from './App';
import ListComponent from './ListComponent';
import ListItem from './ListItem';
import Learn from './braft-editor/learn';
import Screen from './Screen';
import ReactIndex from './react/ReactIndex';

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
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/users'>
          <Users/>
        </Route>
        <Route path='/css'>
          <Screen/>
        </Route>
        <Route path='/'>
          <App/>
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
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users/">User</Link>
          </li>
          <li>
            <Link to='/inHtml/'>Braft Editor</Link>
          </li>
          <li>
            <Link to='/css/'>CSS Learn</Link>
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


