import React from 'react'
import ExpenseDisplayItem from './ExpenseDisplayItem'
function Expensedisplay({data}) {
//  console.log(typeof(data))

  return (
    
    <ul>
        {data.map((item)=>(
                  <li>         
                   <ExpenseDisplayItem data={item}></ExpenseDisplayItem>

                 </li>
        ))}
    </ul>
  )
}

export default Expensedisplay