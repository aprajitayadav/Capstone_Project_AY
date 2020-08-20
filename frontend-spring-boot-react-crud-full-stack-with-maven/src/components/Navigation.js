import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
      //  <div className="navlinks">
      //     <NavLink to="/">Home</NavLink>  
          
      //     <NavLink to="/leaderboard">Leaderboard</NavLink>  
          
      //     <NavLink to="/quiz">Quiz</NavLink>
      //  </div>
   
      <nav class="navbar navbar-expand-lg">
  
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="nav navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"><b>Home </b><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><b>Leaderboard</b></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><b>Quiz</b></a>
      </li>
      
    </ul>
  </div>
</nav>

    );

}
 
export default Navigation;