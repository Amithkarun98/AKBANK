import React, { useState, useEffect } from 'react'   
import axios from 'axios'; 
import {useForm} from 'react-hook-form';
import AdminDashboard from './AdminDashboard'; 
import CustomerDashboard from './CustomerDashboard'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function Home(props) {  
    const [customers, setcustomer] = useState({ Username: '', Password: ''});  
    const apiUrl = "https://localhost:44303/api/customer/Login";    
    const Login = (e) => {    
            //e.preventDefault();    
            debugger;   
            const data = { Username:customers.Username, Password: customers.Password };    
            axios.post(apiUrl, data)    
            .then((result) => {    
                debugger;  
                console.log(result.data);   
                const serializedState = JSON.stringify(result.data.UserDetails);  
               var a= localStorage.setItem('myData', serializedState);   
                console.log("A:",a)  
                const user =result.data.UserDetails;  
                console.log(result.data.message);
                if(data.Username=="admin" && data.Password=="admin"){
                    //alert("Admin Panel"); 
                        props.history.push('/AdminDashboard')
                }  
               else if (result.data.status == '200')
                    {
                        //alert("valid user"); 
                        props.history.push('/CustomerDashboard/'+user.CustomerId) 
                     }     
                else    
                alert('Invalid User');    
            })        
          };    
          
          const onChange = (e) => {    
                e.persist();    
                debugger;    
                setcustomer({...customers, [e.target.name]: e.target.value});    
              }    

              const {register, handleSubmit, errors}=useForm();

    return (  
        <Router>

<Switch>  
            <Route path='/AdminDashboard' component={AdminDashboard} /> 
            <Route path='/CustomerDashboard/:id' component={CustomerDashboard} />    
            </Switch>  
        <div class="container">  
         <div class="row justify-content-center">  
          <div class="col-xl-10 col-lg-12 col-md-9">  
            <div class="card o-hidden border-0 shadow-lg my-5">  
              <div class="card-body p-0">  
                <div class="row">  
                 
                  <div class="col-lg-6 d-none d-lg-block bg-login-image">
                  <img class="st" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9DHQKzHD0qfJoDIOlNGGgkctM8H_RTJLnJQ&usqp=CAU"></img>
                    </div>  
                  <div class="col-lg-6">  
                    <div class="p-5">  
                      <div class="text-center">  
                        <h1 class="h4 text-gray-900 mb-4">Welcome</h1>  
                      </div>   
                      <form onSubmit={handleSubmit(Login)} class="user">  
                        <div class="form-group">  
                          <input type="text" class="form-control" value={customers.Username} onChange={ onChange }  name="Username" id="email" aria-describedby="emailHelp" placeholder="Username"
                          ref={register({required: true})}/>
                          {errors.Username && <p id="err">Enter Valid Username</p>}     
                        </div>  
                        <div class="form-group">  
                          <input type="password" class="form-control" value={customers.Password} onChange={ onChange }  name="Password" id="DepPasswordartment" placeholder="Password"
                          ref={register({required: true})}/>
                          {errors.Password && <p id="err">Enter Valid Password</p>}     
                        </div>  
                        {/* <div class="form-group">  
                          <div class="custom-control custom-checkbox small">  
                            <input type="checkbox" class="custom-control-input" id="customCheck"/>  
                            <label class="custom-control-label" for="customCheck">Remember Me</label>  
                          </div>  
                        </div> */}  
                        <hr/> <center>
                        <button type="submit" className="btn btn-info mb-1" block><span>Login</span></button>    
                        </center>
                      </form>  
                      <hr/>  
                    </div>  
                  </div>  
                </div>  
           </div>  
             </div>  
            </div>  
           </div>  
         </div>  
         </Router>
    )  
}  
  
export default Home