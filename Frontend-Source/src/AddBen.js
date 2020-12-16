import React, { useState } from 'react'  
import axios from 'axios';  
function AddBen(props) {  
  const [data, setdata] = useState({ Firstname: '',Lastname:'',AccountNum:'',Email:'',Amount:'',Phone:'',CustomerId:''})  
  const apiUrl = "https://localhost:44303/api/beneficiary/RegisterBeneficiary";  
  const Registration = (e) => {  
    e.preventDefault();  
    debugger;  
    const data1 = { Firstname: data.Firstname,Lastname:data.Lastname,AccountNum:data.AccountNum,Email:data.Email,  Amount: data.Amount, Phone: data.Phone,CustomerId:data.CustomerId};  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data.Status);  
        if (result.data.Status == 'Error')  
          alert('Low Balance');  
        else  
        {
          alert('Money sent to Beneficiary Account')
          props.history.push('/ViewCustomer')  
        }
          
      })  
  }  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  
  return (  
    <div class="container">  
       <br/><br/>
      <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0" id="con">  
          <div class="row">  
            <div class="col-lg-12">  
              <div class="p-5">  
                <div class="text-center">  
                  <h1 class="h4 text-gray-900 mb-4"><b>Fill in Beneficiary details </b></h1>  
                </div>  
                <form onSubmit={Registration} class="user">  
                  <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="Firstname" onChange={onChange} value={data.Firstname} class="form-control" id="exampleFirstName" placeholder="Firstname" />  
                    </div>  
                    <div class="col-sm-6">  
                    <input type="text" name="Lastname" onChange={onChange} value={data.Lastname} class="form-control" id="exampleInputEmail" placeholder="Lastname" />  
                  </div>  
                  <br/><br/>
                  <div class="col-sm-6">  
                    <input type="text" name="AccountNum" onChange={onChange} value={data.AccountNum} class="form-control" id="exampleInputEmail" placeholder="Account Number" />  
                  </div>  
                  <div class="col-sm-6">  
                    <input type="text" name="Amount" onChange={onChange} value={data.Amount} class="form-control" id="exampleInputEmail" placeholder="Amount" />  
                  </div>
                  </div>  
                  <div class="form-group">  
                    <input type="text" name="Email" onChange={onChange} value={data.Email} class="form-control" id="exampleInputEmail" placeholder="Email" />  
                  </div>  
                 
                  <div class="form-group">  
                    <input type="text" name="Phone" onChange={onChange} value={data.Phone} class="form-control" id="exampleInputEmail" placeholder="Phone" />  
                  </div>  
                    

                  
                  <div class="form-group">  
                    <input type="text" name="CustomerId" onChange={onChange} value={data.CustomerId} class="form-control" id="exampleInputEmail" placeholder="Customer ID" />  
                  </div>  
                  <hr /> 
                  <button type="submit" class="btn btn-primary  btn-block text-center">  
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
  
export default AddBen