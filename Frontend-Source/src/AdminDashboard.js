import React, { useEffect,useState,Component } from 'react';
import './App.css';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import AddCustomer from './AddCustomer';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import ViewCustomer from './ViewCustomer';
import ViewTransact from './ViewTransact';
import EditCustomer from './EditCustomer';
import Home from './Home';
import ViewCust from './ViewCust';
import AddNews from './AddNews';
import News from './News';
import AdminHome from './AdminHome';



class AdminDashboard extends Component {
  constructor(props) {  
    super(props)  }
    componentDidMount(){
    document.getElementById('lin').style.display="none";
    document.getElementById('lin1').style.display="none";
    document.getElementById('lin2').style.display="none";
    //document.getElementById('adm').style.display="block";
    document.getElementById('lout').style.display="block";
  
  }
    render() {
        return (
            <Router>    
            <div className="container">    
              {/* <nav className="navbar navbar-expand-lg navheader">    
                <div className="collapse navbar-collapse" >   */}

                <ul class="nav justify-content-center">
                <li class="nav-item bg-light" >
              <Link class="nav-link active" to={'/AdminHome'} ><b id="con4">Welcome, Admin</b></Link>
            </li>
              <li class="nav-item bg-light">
              <Link class="nav-link active" to={'/AddCustomer'}><b id="con3">Add-Customer</b></Link>
            </li>
          <li class="nav-item bg-light">
            <Link class="nav-link" to={'/ViewCustomer'}><b id="con3">View-Customers</b></Link>
          </li>
          <li class="nav-item bg-light">
            <Link class="nav-link" to={'/AddNews'}><b id="con3"> Add-News</b></Link>
          </li>
          <li class="nav-item bg-light">
            <Link class="nav-link" to={'/News'}><b id="con3"> View-News</b></Link>
          </li>
        </ul>
                  
                  {/* <ul className="navbar-nav mr-auto">   

                    <li className="nav-item">    
                      <Link to={'/AddCustomer'} className="nav-link">AddCustomer</Link>    
                    </li>    
                    <li className="nav-item">    
                      <Link to={'/ViewCustomer'} className="nav-link">My Customers</Link>    
                    </li> 
                    
                  </ul>  */}
                    
                {/* </div>    
              </nav> <br />     */}
              <Switch>    
                <Route  path='/AddCustomer' component={AddCustomer} />    
                <Route path='/ViewCustomer' component={ViewCustomer} />
                <Route path='/EditCustomer/:id' component={EditCustomer} />
                <Route path='/ViewCust/:id' component={ViewCust} />
                <Route path='/ViewTransact/:id' component={ViewTransact} />
                <Route path='/AddNews' component={AddNews} />
                <Route path='/News' component={News} />
                <Route path='/AdminHome' component={AdminHome} />
              </Switch>    
              
            </div>   
          </Router>   
        );
    }
}
export default AdminDashboard;