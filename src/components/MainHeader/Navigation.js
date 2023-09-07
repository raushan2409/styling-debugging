import React, {useContext} from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

const Navigation = () => {
  const ctx =  useContext(AuthContext)
  return (
    // <AuthContext.Consumer>
    // {/* the consumers takes a child which actually should be a function and as a argument u'll get a context data */}
    // {(ctx)=>{
      // return (  
        <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    
      );
    };
  // }
   
    // </AuthContext.Consumer>
//   );
// };

export default Navigation;
