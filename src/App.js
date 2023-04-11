import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
 } from 'react-router-dom';

export default function App(){
  const posts = [
    {
      id: 1,
      title:'My First Post',
      date:'4-7-2023',
      content:'This is my first post!'
    },
    {
      id: 2,
      title:'Check In',
      date:'4-8-2023',
      content:'Yesterday I learned React\'s Best Practices!'
    },
    {
      id: 3,
      title:'Vacation Mode',
      date:'4-9-2023',
      content:'Almost done with Bootcamp!'
    }
  ];

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to= "/">Home</Link>
          </li>
          <li>
            <Link to= "/friends">Friends</Link>
          </li>
          <li>
            <Link to= "/posts">Posts</Link>
          </li>
        </ul>
         <Switch>
           <Route path = '/posts'>
              <Posts posts = {posts} />
           </Route>

           <Route path= '/friends'>
              <Friends names = {['Tom', 'Sally', 'Samantha']} />
           </Route>

           <Route path='/'>
              <Home/>
           </Route>

        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return <h2> Home </h2>
}

function Friends(props){
  const { names } = props;

  return (
    <div>
      <ul>
        {names.map((friend, index) => (
          <li key = {index}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}

function Posts({posts}){
  return <h2> Posts </h2>
}