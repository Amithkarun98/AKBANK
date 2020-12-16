import React, { useState } from 'react'  
import axios from 'axios';  
import {useForm} from 'react-hook-form';
import validator from 'validator';
function AddCustomer(props) {  
  const [data, setdata] = useState({ Firstname: '',Lastname:'',Username:'', Password: '',Email:'', Phone: '', DateOfBirth: '',Gender:'',AccountNum:'',Pin:'',OpeningBal:'',AadharNum:''})  
  const apiUrl = "https://localhost:44303/api/customer/RegisterCustomer";  
  const Registration = (e) => {  
    //e.preventDefault();  
    debugger;  
    const data1 = { Firstname: data.Firstname,Lastname:data.Lastname,Username:data.Username, Password: data.Password,Email:data.Email, Phone: data.Phone,DateOfBirth:data.DateOfBirth,Gender:data.Gender,AccountNum:data.AccountNum,Pin:data.Pin,OpeningBal:data.OpeningBal,AadharNum: data.AadharNum };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')  
          alert('Invalid User');  
        else  
        {
          alert('Account Created')
          props.history.push('/ViewCustomer')  
        }
          
      })  
  }  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  
  const {register, handleSubmit, errors}=useForm();
  
  return (  
    <div class="div div-success">  
      <div class="row">  
        {/* <div class="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>  
          Add New Contact  
       </div>   */}
      </div>  
      <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0" id="con5">  
          <div class="row">  
            <div class="col-lg-12">  
              <div class="p-5">  
                <div class="text-center">  
                  <h1 class="h4 text-gray-900 mb-4"><b>Register </b></h1>  
                </div>  
                <form onSubmit={handleSubmit(Registration)} class="user">  
                  <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="Firstname" onChange={onChange} value={data.Firstname} class="form-control" id="exampleFirstName" placeholder="Firstname" 
                      ref={register({required: true, maxLength:20, minLength:4})}/>
                      {errors.Firstname && <p id="err">Enter 4 or more characters</p>}  
                    </div>  
                   
                    <div class="col-sm-6">  
                    <input type="text" name="Lastname" onChange={onChange} value={data.Lastname} class="form-control" id="exampleInputEmail" placeholder="Lastname" 
                     ref={register({required: true, maxLength:20, minLength:1})}/>
                     {errors.Lastname && <p id="err">Enter 1 or more characters</p>}   
                  </div>  
                  <br/> <br/>
                  <div class="col-sm-6">  
                    <input type="text" name="Username" onChange={onChange} value={data.Username} class="form-control" id="exampleInputEmail" placeholder="Username" 
                     ref={register({required: true, pattern:{value:/^[A-Z][A-Za-z0-9]{3,9}$/}})}/>
                     {errors.Username && <p id="err">Enter 4 characters, begin with capital letter & including numbers</p>}    
                  </div>  
                    <div class="col-sm-6">  
                      <input type="Password" name="Password" onChange={onChange} value={data.Password} class="form-control" id="exampleLastName" placeholder="Password" 
                       ref={register({required: true, pattern:{value:/^[A-Z]{1}[a-z0-9]+[*$#]{1,}$/}})}/>
                       {errors.Password && <p id="err">Enter Valid Password ex. Amith7*</p>}   
                    </div>  
                  </div>  
                  <div class="form-group">  
                    <input type="text" name="Email" onChange={onChange} value={data.Email} class="form-control" id="exampleInputEmail" placeholder="Email" 
                     ref={register({required: true, pattern:{value:/^[A-Za-z0-9]+@[a-z0-9]+\.[a-z]{2,10}$/i}})}
                     />
                     {errors.Email && <p id="err">Enter valid email ex."amith@gmail.com"</p>}   
                  </div>  
                  <div class="form-group">  
                    <input type="number" name="Phone" onChange={onChange} value={data.Phone} class="form-control" id="exampleInputEmail" placeholder="Phone" 
                    ref={register({required: true,  maxLength:10, minLength:10})}
                    />
                    {errors.Phone && <p id="err">Enter valid 10 digit Phone number </p>} 
                  </div>  
                  <div class="form-group">  
                    <input type="date" name="DateOfBirth" onChange={onChange} value={data.DateOfBirth} class="form-control" id="exampleInputEmail" placeholder="dd-mm-yyyy" 
                    ref={register({required: true})}
                    />
                    {errors.DateOfBirth && <p id="err">Enter Date of birth"</p>}  
                  </div>  

                  <div className="radio-button">
                    <label><b>Gender:</b></label>&nbsp;&nbsp;
                    <input name="Gender" id="Male" placeholder="Gender" value="Male" onChange={onChange} type="radio"/>&nbsp;&nbsp;Male &nbsp;&nbsp;
                    <input name="Gender" id="Female" placeholder="Gender" value="Female" onChange={onChange} type="radio"/>&nbsp;&nbsp;Female &nbsp;&nbsp;
                  </div>
                   <div class="form-group">  
                    <input type="text" name="AccountNum" onChange={onChange} value={data.AccountNum} class="form-control" id="exampleInputEmail" placeholder="Account Number" 
                    ref={register({required: true, maxLength:5, minLength:5})}
                    />
                    {errors.AccountNum && <p id="err">Enter 5 digit Account Number"</p>}   
                  </div>  
                  {/* <div class="form-group">  
                    <input type="password" name="Pin" onChange={onChange} value={data.Pin} class="form-control" id="exampleInputEmail" placeholder="Pin" 
                    ref={register({required: true, pattern:{value:/^[0-9]{4}$/}})}
                    />
                    {errors.Pin && <p id="err">Enter 4 digit Pin. ex."8055"</p>}   
                  </div>   */}
                  <div class="form-group">  
                    <input type="number" name="OpeningBal" onChange={onChange} value={data.OpeningBal} class="form-control" id="exampleInputEmail" placeholder="Opening Balance" 
                    ref={register({required: true})}
                    />
                    {errors.OpeningBal && <p id="err">Enter Opening Balance</p>} 
                  </div>  
                  <div class="form-group">  
                    <input type="number" name="AadharNum" onChange={onChange} value={data.AadharNum} class="form-control" id="exampleInputEmail" placeholder="Aadhar Number" 
                     ref={register({required: true, pattern:{value:/^[0-9]{12}$/}})}
                     />
                     {errors.AadharNum && <p id="err">Enter 12 digit Aadhar Number</p>}  
                  </div> 
                  <hr />  
                  <button type="submit" className="btn btn-danger mb-1 btn-block text-center">  
                    Register  
                </button>  
                  
                </form>  
                <hr />  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  )  
}  
  
export default AddCustomer