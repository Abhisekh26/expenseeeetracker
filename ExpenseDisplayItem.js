import React from 'react'

function ExpenseDisplayItem({data}) {
    console.log(data)
  return (<>
    <div>
        {data.category}
        {data.price}
        {data.description}
        <button>delete</button><button>edit</button>
    </div>
    </>
  )
}

export default ExpenseDisplayItem