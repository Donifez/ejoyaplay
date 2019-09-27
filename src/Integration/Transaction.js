import React, { Component } from "react";
import "./__Transaction.scss";

class Transaction extends Component {
  render() {
    return (
      
        <div className="Transaction-wrapper">
          
            <div className="Transaction-table" >
            <table>
             <tr> 
               <th >Artiste name</th> <th >Transaction ID</th>  <th ><select><option>User Filter</option>
               <option>User1</option>
               <option>User2</option>
               <option>User3</option>
               </select></th> <th > Email</th> <th > Type</th> 
             
     
               </tr>
             <tr>
               <td> Zlatan </td> 
                 <td>53279741641</td> <td>user1</td> <td> ejoya@email.com </td>   <td> Card Payment </td>  
              </tr>
              <tr>
               <td> Davido </td> 
                 <td>53279741642</td> <td>user2</td>  <td> ejoya@email.com </td> <td> Deposit </td>   
              </tr>
              <tr>
               <td>  Zlatan </td> 
                 <td>53279741643</td> <td>user3</td>  <td> ejoya@email.com </td>  <td> Transfer </td> 
              </tr>
              <tr>
               <td> Davido </td> 
                 <td>53279741644</td> <td>user1</td> <td> ejoya@email.com </td>   <td> Card Payment </td> 
              </tr>
              <tr>
               <td> Zlatan</td> 
                 <td>53279741645</td> <td>user2</td>  <td> ejoya@email.com </td>  <td> Deposit</td>  
              </tr>
              <tr>
               <td> Davido </td> 
                 <td>53279741646</td> <td>user3</td>  <td> ejoya@email.com </td>  <td> Transfer </td> 
              </tr>
            
            </table>
            </div>
          </div>
       
      
    );
  }
}
export default Transaction ;
