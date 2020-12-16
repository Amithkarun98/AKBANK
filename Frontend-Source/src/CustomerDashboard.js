import React, { useState,useEffect,Component } from 'react';
import './App.css';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import AddCustomer from './AddCustomer';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import View from './View';
import AddBen from './AddBen';
import ViewBen from './ViewBen';
import Transaction from './Transaction';
import Mytransact from './Mytransact';
import userEvent from '@testing-library/user-event';
//class CustomerDashboard extends Component {
function CustomerDashboard() {

  const [user, setuser] = useState({ CustomerId: ''});
  useEffect(() => {  
    var a = localStorage.getItem('myData');  
    var b = JSON.parse(a);  
    console.log(b.FirstName);  
    setuser(b)  
    console.log(user.CustomerId)  
    
    document.getElementById('lin').style.display="none";
   document.getElementById('lin1').style.display="none";
   document.getElementById('lin2').style.display="none";
    //document.getElementById('adm').style.display="block";
     document.getElementById('lout').style.display="block";

}, []); 
  // componentDidMount(){
  //   document.getElementById('lin').style.display="none";
  //   document.getElementById('lin1').style.display="none";
  //   document.getElementById('lin2').style.display="none";
  //   //document.getElementById('adm').style.display="block";
  //   document.getElementById('lout').style.display="block";

  // }
    //render() {
        return (
            <Router>    
            <div className="container" >    
              {/* <nav className="navbar navbar-expand-lg navheader">    
                <div className="collapse navbar-collapse" >     */}
                <ul class="nav justify-content-center" >  
                   
                      
                    <li className="nav-item bg-light" >    
                      <Link to={'/View/'+user.CustomerId} className="nav-link"><b id="con2">My Profile</b></Link>    
                    </li>
                    <li className="nav-item bg-light" >    
                      <Link to={'/AddBen'} className="nav-link"><b id="con2">Send Money</b></Link>    
                    </li> 
                       
                    <li className="nav-item bg-light" >    
                      <Link to={'/Transaction'} className="nav-link"><b id="con2">ATM Simulator</b></Link>    
                    </li>  
                    <li className="nav-item bg-light" >    
                      <Link to={'/ViewBen/'+user.CustomerId} className="nav-link"><b id="con2">Beneficiaries</b></Link>    
                    </li> 
                    <li className="nav-item bg-light" >    
                      <Link to={'/Mytransact/'+user.CustomerId} className="nav-link"><b id="con2">My Transactions</b></Link>    
                    </li>  
                  </ul>    
                {/* </div>    
              </nav> <br />     */}
              <Switch>    
                {/* <Route  path='/AddCustomer' component={AddCustomer} />     */}
                
                <Route path='/View/:id' component={View} /> 
                <Route path='/AddBen' component={AddBen} /> 
                <Route path='/ViewBen/:id' component={ViewBen} />   
                <Route path='/Transaction' component={Transaction} /> 
                <Route path='/Mytransact/:id' component={Mytransact} />     
              </Switch>    
              {/* <Switch>  
              <Route path='/AdminDashboard' component={AdminDashboard} />    
              </Switch>   */}
            </div>   
          </Router>   
        );
    //}
}
export default CustomerDashboard;