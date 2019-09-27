import React, { Component } from "react";
import "./__Cards.scss";

class Card extends Component {
  render() {
    return (
      
        <div className="card-wrapper">
          
            <div className="card-table" >
            <table className="card">
             <tr> 
               <th className="top">Type</th> <th className="top">Cost</th>  <th className="top"><select><option>User Filter</option>
               <option>User1</option>
               <option>User2</option>
               <option>User3</option>
               </select></th> <th className="top">Date</th> 
             
     
               </tr>
             <tr>
               <td className="body"> Verve </td> 
                 <td  className="body">estimated cost</td> <td  className="body">User1</td>  <td  className="body"> 11/5/2020 </td>   
              </tr>
              <tr>
               <td  className="body"> Visa </td> 
                 <td  className="body">estimated cost</td> <td  className="body">User2</td>  <td  className="body"> 11/5/2020 </td>   
              </tr>
              <tr>
               <td  className="body"> Master Card </td> 
                 <td  className="body">estimated cost</td> <td className="body">User3</td>  <td className="body"> 11/5/2020 </td>  
              </tr>
              <tr>
               <td className="body"> Verve </td> 
                 <td className="body">estimated cost</td> <td className="body">User4</td>  <td className="body"> 11/5/2020 </td>   
              </tr>
              <tr>
               <td className="body"> Visa </td> 
                 <td className="body">estimated cost</td> <td className="body">User5</td>  <td className="body"> 11/5/2020 </td>   
              </tr>
              <tr>
               <td className="body"> Master Card </td> 
                 <td className="body">estimated cost</td> <td className="body">User6</td>  <td className="body"> 11/5/2020 </td>  
              </tr>
            
            </table>
            </div>
          </div>
       
      
    );
  }
}
export default Card;
