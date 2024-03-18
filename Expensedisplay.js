import React from 'react'
import ExpenseDisplayItem from './ExpenseDisplayItem'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
function Expensedisplay({data}) {
//  console.log(typeof(data))

  return (
    
    <ul>
      
        
        {data.map((item)=>(
            
                   <li style={{listStyle:"none"}}>         
                   <ExpenseDisplayItem data={item}></ExpenseDisplayItem>
                   
                 </li> 
                 
        ))}
        
    </ul>
  )
}

export default Expensedisplay