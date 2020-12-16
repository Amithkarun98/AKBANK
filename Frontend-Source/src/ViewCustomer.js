import React from 'react'  
//import Home from './Home';

import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  

import axios from 'axios';  

import { useState, useEffect } from 'react'  



function ViewCustomer(props) {  

  const [data, setData] = useState([]);  

  

  useEffect(() => {  

    const GetData = async () => {  

      const result = await axios('https://localhost:44303/api/customer/CustomerRequestDetails');  

      setData(result.data);  

    };  

  

    GetData();  

  }, []);  

  const deletecustomer = (ID) => {  

    debugger;  

    axios.delete('https://localhost:44303/api/customer/DeleteCustomer?id=' + ID)  

      .then((result) => {  

        props.history.push('/ViewCustomer')  

      });  

  };  



  const editcustomer1 = (id) => {  

    props.history.push({  

      pathname: '/EditCustomer/' + id  

    });  

  };  
  const viewtransact = (id) => {  

    props.history.push({  

      pathname: '/ViewTransact/' + id  

    });  

  };  
  

  return (  
<>
    <div className="animated fadeIn" >  
<br/><br/>
      <Row>  

        <Col>  

          <Card id="con6">  

            <CardHeader>  

              <h3 class="text-center">Customers List</h3> 

              </CardHeader>  

            <CardBody>  

              <table class="table " id="con5">  

                <thead>  

                  <tr>     
                    <th>Customer Id</th>
                    <th>Firstname</th>                     
                    <th>Username</th>  
                    <th>Email</th>                     
                    <th>AccountNum</th>  
                    <th>Account Balance</th>
                    <th>Operations</th>
                  </tr>  

                </thead>  

                <tbody>  

                  {  

                    data.map((item, idx) => {  

                      return <tr>  

                       
                        <td><b>{item.CustomerId} </b></td> 
                        <td><b>{item.Firstname} </b></td>   
                        <td><b>{item.Username} </b></td>   
                        <td><b>{item.Email} </b></td>  
                        <td><b>{item.AccountNum} </b></td> 
                        <td><b>{item.OpeningBal} </b></td>   

                        <td>  

                          <div class="btn-group">  

                            <button className="btn btn-success" onClick={() => { editcustomer1(item.CustomerId) }}>Edit</button>  
                          &nbsp;&nbsp;
                            <button className="btn btn-danger" onClick={() => { deletecustomer(item.CustomerId) }}>Delete</button> 
                            &nbsp;&nbsp;
                            <button className="btn btn-primary" onClick={() => { viewtransact(item.CustomerId) }}>Transactions</button> 
                          </div>  
                        </td>  
                      </tr>  
                    })}  
                </tbody>  
              </table> 
            
            </CardBody>  
          </Card>  
        </Col>  
      </Row>  
     
    </div>  
    </>
  )  

}  
export default ViewCustomer