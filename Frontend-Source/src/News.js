import React from 'react'  
//import Home from './Home';

import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  

import axios from 'axios';  

import { useState, useEffect } from 'react'  



function News(props) {  

  const [data, setData] = useState([]);  

  

  useEffect(() => {  

    const GetData = async () => {  

      const result = await axios('https://localhost:44303/api/news/NewsRequestDetails');  

      setData(result.data);  

    };  

  

    GetData();  

  }, []);  
  const del = (ID) => {  

    debugger;  

    axios.delete('https://localhost:44303/api/news/DeleteNews?id=' + ID)  

      .then((result) => {  

        props.history.push('/AdminDashboard')  

      });  

  };  

  return (  

    <div >  

      <br/><br/><br/><br/>
            <table class="table table-danger" >
    <thead>
      <tr>
      <th scope="col">News ID</th>
        <th scope="col">Headlines</th>
        <th scope="col">Informations</th>
        <th scope="col">Operation</th>
      </tr>
    </thead>
    <tbody>
    {  

      data.map((item, idx) => {  

      return <tr>  
        <td>{item.NewsId}</td>  
        <td>{item.Headlines}</td>  
        <td>{item.News}</td>  
  <td>
  <div class="btn-group">  

<button className="btn btn-primary"  onClick={() => { del(item.NewsId) }}>Delete</button>  
</div>
  </td>
      </tr>  
      })
    }  
    
    </tbody>
</table>
            
           
    </div>  
  )  

}  
export default News