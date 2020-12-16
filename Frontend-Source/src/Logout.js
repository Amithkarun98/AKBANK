import React, {Component } from 'react';
 class Logout extends Component {
    constructor(props) {  
      super(props)  }
      componentDidMount(){
      document.getElementById('lin').style.display="block";
      document.getElementById('lin1').style.display="block";
      document.getElementById('lin2').style.display="block";
      //document.getElementById('adm').style.display="block";
      document.getElementById('lout').style.display="none";
    
    }
      render() {
         return(
             <div class="text-right">
                 <b>THANK YOU!!!!<br/>
                 Visit Again</b>
             </div>
         );
        }
    }
    export default Logout;