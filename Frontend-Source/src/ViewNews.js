import React from 'react'  
//import Home from './Home';

import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  

import axios from 'axios';  

import { useState, useEffect } from 'react'  



function ViewNews(props) {  

  const [data, setData] = useState([]);  

  

  useEffect(() => {  

    const GetData = async () => {  

      const result = await axios('https://localhost:44303/api/news/NewsRequestDetails');  

      setData(result.data);  

    };  

  

    GetData();  

  }, []);  


  return (  

    <div >  

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <table class="table " id="con6">
    <thead>
      <tr>
      
        <th scope="col">Headlines</th>
        <th scope="col">Informations</th>
      </tr>
    </thead>
    <tbody>
    {  

      data.map((item, idx) => {  

      return <tr>  

        <td>{item.Headlines}</td>  
        <td>{item.News}</td>  
  
      </tr>  
      })
    }  
    
    </tbody>
</table>
            
           
    </div>  
  )  

}  
export default ViewNews