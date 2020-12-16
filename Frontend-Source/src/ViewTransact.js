import React from 'react'  
//import Home from './Home';

import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  

import axios from 'axios';  

import { useState, useEffect } from 'react'  



function ViewTransact(props) {  

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

      <Row>  

        <Col>  

          <Card>  

            <CardHeader>  

              <i className="fa fa-align-justify"></i>  Transactions 

              </CardHeader>  

            <CardBody>  

              <Table hover bordered striped responsive size="sm">  

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

                        
                        <td>{item.TransactionId}</td> 
                        <td>{item.Time}</td>  

                        <td>{item.Remarks}</td> 
                        <td>{item.Mode}</td>   
                        <td>{item.Amount}</td>  

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
export default ViewTransact