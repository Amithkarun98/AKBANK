import React from 'react'  
//import Home from './Home';

import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  

import axios from 'axios';  

import { useState, useEffect } from 'react'  



function ViewBen(props) {  

  const [data, setData] = useState([]);  

  const Url = "https://localhost:44303/api/beneficiary/BeneficiaryRequestDetailsID?id=" + props.match.params.id;

  useEffect(() => {  

    const GetData = async () => {  

      const result = await axios(Url);  

      setData(result.data); 
    }
    GetData(); 
   
  }, []);  

  

  return (  

    <div className="animated fadeIn">  
<br/><br/>
      <Row>  

        <Col>  

          <Card id="con">  

            <CardHeader>  

            <h4 align="center">My Beneficiaries</h4>  

              </CardHeader>  

            <CardBody id="tab">  

              <Table hover bordered striped responsive size="sm" id="con1">  

                <thead>  

                  <tr>  

                   
                    <th>Beneficiary Id</th>
                    <th>Name</th>  
                    <th>Account Number</th>  
                    <th>Email</th>  
                    <th>Amount</th>  

                  </tr>  

                </thead>  

                <tbody>  

                  {  

                    data.map((item, idx) => {  

                      return <tr>  

                       
                        <td><b>{item.BeneficiaryId}</b></td> 
                        <td><b>{item.Firstname}</b></td>  

                        <td><b>{item.AccountNum}</b></td> 
                        <td><b>{item.Email}</b></td>   
                        <td><b>{item.Amount}</b></td>  
                        
                      </tr>  
                    })}  
                </tbody>  
              </Table> 
            
            </CardBody>  
          </Card>  
        </Col>  
      </Row>  
     
    </div>  
  )  

}  
export default ViewBen