import React from 'react';
import details from '../data/details..json'

/**
* @author
* @function 
**/
 const AllDetails=(props)=>{
   return(
     <tr>
       <td>{props.fname}</td>
       <td>{props.lname}</td>
       <td>{props.mobno}</td>
       <td>{props.gpa}</td>
     </tr>
   );
 }
const TableData = (props) => {
  const firstName=details.data.map(post=>post.firstname);
  const lastName=details.data.map(post=>post.lastname);
  const mobileNo=details.data.map(post=>post.mobileno);
  const gpa=details.data.map(post=>post.GPA);
  return(
    <div>
    {
      props.firstName.map(x=>
        <AllDetails
          fname={x.firstname}/>
      )
     }
     {
       props.lastName.map(x=>
       <AllDetails
        lname={x.lastname}/>
       )
     }
     {
       props.mobileNo.map(x=>
       <AllDetails
        mobno={x.mobileno}/>
        )
     } 
     {
       props.gpa.map(x=>
       <AllDetails
       gpa={x.GPA}/>
       )
     }
    </div>
   )

 }

export default TableData;
