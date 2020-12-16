import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import AdminDashboard from './AdminDashboard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 

import CustomerDashboard from './CustomerDashboard' ;
import ViewNews from './ViewNews';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Logout from './Logout';

function App() {
 
  return (
    <Router>    
      
          <div className="container"> 

          <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="d-flex flex-grow-1">
        <span class="w-100 d-lg-none d-block"></span>
        <Link class="navbar-brand d-none d-lg-inline-block" to={'/ViewNews'}  >
            {/* <b>AK-Bank</b> */}
            <img class="stick" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlf4ceO0EJvlflmQ2JVD7tj8P1cEhrOqRyA&usqp=CAU"/>
        
        {/* <li class="navbar-brand d-none d-lg-inline-block" style={{display:"none"}} id="lout" href="#">
            <p style={{display:"none"}} id="lout" class="nav-link m-2 menu-item" disabled>Welcome, Admin</p>
        </li> */}
        {/* <h4 class="navbar-brand d-none d-lg-inline-block">
            <b style={{display:"none"}} id="lout" class="nav-link m-2 menu-item" disabled>Welcome, Admin</b>
            </h4> */}
            </Link>
        
    </div>
    <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
        <ul class="navbar-nav ml-auto flex-nowrap">
        <li class="nav-item">
            <Link to={'/Logout'} style={{display:"none"}} id="lout" class="nav-link m-2 menu-item"><b id="con7">Logout</b></Link>
            </li>
            <li class="nav-item" >
            <Link to={'/AboutUs'} id="lin2" style={{display:"block"}} class="nav-link m-2 menu-item "><p id="con7">AboutUs </p></Link>
            </li>
            <li class="nav-item">
            <Link to={'/ContactUs'} id="lin1" style={{display:"block"}} class="nav-link m-2 menu-item"><p id="con7">ContactUs </p></Link>
            </li>
            <li class="nav-item">
                <Link to={'/Home'} id="lin" style={{display:"block"}}  class="nav-link m-2 menu-item"><b id="con7">Login</b></Link>
            </li>
           
        </ul>
    </div>
</nav>


          {/* <nav class="navbar navbar-expand-sm bg-light">    
              <div className="collapse navbar-collapse" >    
                <ul class="navbar-nav ml-auto"> 
                
                <li class="nav-item active">
                <a class="nav-link" href="#">Link</a>
            </li>
                <li className="nav-item">    
                    <Link to={'/'} className="nav-link">Home</Link>    
                  </li>   
                    
                 
                  <li className="nav-item">    
                    <Link to={'/AboutUs'} className="nav-link">About Us</Link>    
                  </li>    
                  <li className="nav-item">    
                    <Link to={'/ContactUs'} className="nav-link">Contact Us</Link>    
                  </li>    
                  <li className="nav-item">    
                    <Link to={'/Home'} id="lin" style={{display:"block"}} className="nav-link"><b>Login</b></Link>    
                  </li>  
                  <li class="nav-item">
                    <Link to={'/'} class="nav-link" style={{display:"none"}} id="lout"><b>Logout</b></Link>
                </li>
                  
                </ul>    
              </div>    
            </nav>  */}
            <br />    
            <Switch>    
              <Route exact path='/Home' component={Home} />    
              <Route path='/AboutUs' component={AboutUs} /> 
              <Route path='/ContactUs' component={ContactUs} />    
              <Route path='/ViewNews' component={ViewNews} />  
              <Route path='/Logout' component={Logout} />  
       
      
            </Switch>    
            <Switch>  
            <Route path='/AdminDashboard' component={AdminDashboard} /> 
            <Route path='/CustomerDashboard' component={CustomerDashboard} />    
            </Switch>  
          </div>   
          
        </Router>   
  );
}

export default App;