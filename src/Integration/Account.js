import React, { Component } from "react";
import "./__Account.scss";

class Account extends Component {
  render() {
    return (
      
        <div className="Account-wrapper">
          
            <div className="Account-table" >
            <table>
             <tr> 
               <th >Artiste name</th> <th >Account Type</th>  <th ><select><option>User Filter</option>
               <option>User1</option>
               <option>User2</option>
               <option>User3</option>
               </select></th> <th > Email</th> <th > Location</th> 
             
     
               </tr>
             <tr>
               <td> Zlatan </td> 
                 <td>Premium</td> <td>User1</td>  <td> ejoya@email.com </td>   <td> Lagos </td>  
              </tr>
              <tr>
               <td> Davido </td> 
                 <td>Regular</td> <td>User2</td>  <td> ejoya@email.com </td> <td> Lagos </td>   
              </tr>
              <tr>
               <td>  Zlatan </td> 
                 <td>Premium</td> <td>User3</td>  <td> ejoya@email.com </td>  <td> Lagos </td> 
              </tr>
              <tr>
               <td> Davido </td> 
                 <td>Regular</td> <td>User4</td>  <td> ejoya@email.com </td>   <td> Lagos </td> 
              </tr>
              <tr>
               <td> Zlatan</td> 
                 <td>Premium</td> <td>User5</td>  <td> ejoya@email.com </td>  <td> Lagos </td>  
              </tr>
              <tr>
               <td> Davido </td> 
                 <td>Regular</td> <td>User6</td>  <td> ejoya@email.com </td>  <td> Lagos </td> 
              </tr>
            
            </table>
            </div>
          </div>
       
      
    );
  }
}
export default Account;
