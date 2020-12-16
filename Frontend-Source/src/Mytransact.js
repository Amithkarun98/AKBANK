import React from 'react'  
//import Home from './Home';

import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  

import axios from 'axios';  

import { useState, useEffect } from 'react'  



function Mytransact(props) {  

  const [data, setData] = useState([]);  

  const Url = "https://localhost:44303/api/Transaction/TransactionDetailsID?id=" + props.match.params.id;

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

            <h4 align="center">My Transactions</h4>  

              </CardHeader>  

            <CardBody>  

              <Table hover bordered striped responsive size="sm" id="con1">  

                <thead>  

                  <tr>  

                   
                    <th>Transaction Id</th>
                    <th>Time</th>  
                    <th>Remarks</th>  
                    <th>Mode</th>  
                    <th>Amount</th>  

                  </tr>  

                </thead>  

                <tbody>  

                  {  

                    data.map((item, idx) => {  

                      return <tr>  

                        <td><b>{item.TransactionId}</b></td> 
                        <td><b>{item.Time}</b></td>  

                        <td><b>{item.Remarks}</b></td> 
                        <td><b>{item.Mode}</b></td>   
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
export default Mytransact