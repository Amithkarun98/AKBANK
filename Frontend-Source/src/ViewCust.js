import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
//import './style2.css';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
function ViewCust(props) {  

  const [customer, setcustomer] = useState({CustomerId:'', Firstname: '',Lastname:'',Username:'', Password: '',Email:'', Phone: '', DateOfBirth: '',Gender:'',AccountNum:'',Pin:'',OpeningBal:'',AadharNum:''});  

        const Url = "https://localhost:44303/api/customer/CustomerRequestDetailsID?id=" + props.match.params.id;  ;  

        // const resetForm = () => { 
        //   setcustomer({Username: '', AccountNo: '',FirstName: '', LastName: '', DOB: '',Password: '', Email: '',Phone: '', Address: '',OpeningBalance: '', Pin: '', AadharNo: '',CustomerId:'' })
             
        //       }

        useEffect(() => {  

          const GetData = async () => {  

            const result = await axios(Url);  

            setcustomer(result.data);  

          };  

          GetData();  

        }, []);  

        const UpdateEmployee = (e) => {  

          e.preventDefault();  

          const data = { CustomerId:props.match.params.id, Firstname:customer.Firstname, Lastname: customer.Lastname,Username:customer.Username ,Password:customer.Password,Email:customer.Email,Phone:customer.Phone,DateOfBirth:customer.DateOfBirth,Gender:customer.Gender,AccountNum:customer.AccountNum,Pin:customer.Pin,OpeningBal:customer.OpeningBal,AadharNum:customer.AadharNum};  
          axios.post('https://localhost:44303/api/customer/UpdateCustomer', data)  

            .then((result) => {  

              props.history.push('/CustomerDashboard')  

            });  

        };  

        const onChange = (e) => {  

          e.persist();  

          setcustomer({...customer, [e.target.name]: e.target.value});  

        }  

        return (  
          <div className="app flex-row align-items-center">  
          <Container>  
            <Row className="justify-content-center">  
              <Col md="12" lg="10" xl="8">  
                <Card className="mx-4">  
                  <CardBody className="p-4">  
                    <Form onSubmit={UpdateEmployee}>  
                      <h1>View/Edit Details</h1>  
                      <InputGroup className="mb-3">          
                        <Input type="text"  name="CustomerId"  value={customer.CustomerId} onChange={ onChange } disabled/>  
                      </InputGroup>  
                       <InputGroup className="mb-3">          
                        <Input type="text"  name="Firstname"  value={customer.Firstname} onChange={ onChange } />  
                      </InputGroup>  
                      <InputGroup className="mb-3">           
                        <Input type="text"  name="Lastname"   value={customer.Lastname} onChange={ onChange }  />  
                      </InputGroup>  
                      <InputGroup className="mb-3">  
                        <Input type="text" name="Username"   value={customer.Username} onChange={ onChange }  />  
                      </InputGroup>  
                      <InputGroup className="mb-4">  
                       <Input type="text"  name="Password"  value={customer.Password} onChange={ onChange }  />  
                      </InputGroup>
                      <InputGroup className="mb-4">  
                       <Input type="text"  name="Email"  value={customer.Email} onChange={ onChange } />  
                      </InputGroup>  
                     
                      <InputGroup className="mb-4">  
                        <Input type="number"  name="Phone"  value={customer.Phone} onChange={ onChange }  />  
                      </InputGroup>
                      <InputGroup className="mb-4">  
                        <Input type="text"  name="DateOfBirth"  value={customer.DateOfBirth} onChange={ onChange }  />  
                      </InputGroup>
                      <div class="form-group">
                              <label for="exampleFormControlSelect1"><b>Gender</b></label>
                              <select class="form-control" name="Gender" id="Status"  value={ViewCust.Gender} onChange={ onChange }> 
                              <option>Female</option>
                                <option>Male</option>
                                </select>    
             </div>
                      <InputGroup className="mb-4">  
                        <Input type="text"  name="AccountNum"  value={customer.AccountNum} onChange={ onChange }  />  
                      </InputGroup>
                      <InputGroup className="mb-4">  
                        <Input type="text"  name="Pin"  value={customer.Pin} onChange={ onChange }  />  
                      </InputGroup>
                      <InputGroup className="mb-4">  
                        <Input type="text"  name="OpeningBal"  value={customer.OpeningBal} onChange={ onChange }  />  
                      </InputGroup>
                      <InputGroup className="mb-4">  
                        <Input type="text"  name="AadharNum"  value={customer.AadharNum} onChange={ onChange }  disabled/>  
                      </InputGroup>
                       
                <CardFooter className="p-4">  
                    <Row>  
                      <Col xs="12" sm="6">  
                        <Button type="submit" className="btn btn-info mb-1"  ><span>Update</span></Button>  
                      </Col>  
                      <Col xs="12" sm="6">  
                        <Button className="btn btn-info mb-1" block><span>Cancel</span></Button>  
                      </Col>  
                    </Row>  
                  </CardFooter>  
                    </Form>  
                  </CardBody>                 
                </Card>  
              </Col>  
            </Row>  
          </Container>  
        </div>  

        )  

}  

export default ViewCust