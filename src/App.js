import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from "./components/auth/login/SignIn";
import SignUp1 from "./components/auth/signUp/SignUp1";
import SignUp3 from "./components/auth/signUp/SignUp3";
import SignUp5 from "./components/auth/signUp/SignUp5";
function App() {

  console.log("mimmi")
  return (
    //   <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/users">Users</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    //     <Switch>
    //       <Route path="/about">
    //         {/* <About /> */}
    //       </Route>
    //       <Route path="/users">
    //         {/* <Users /> */}
    //       </Route>
    //       <Route path="/">
    //         {/* <Home /> */}
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  // <SignIn/>
  <SignUp5/>
  );
}

export default App;
