
import React from "react";
const event = new Date('August 19, 1975 23:15:30');

event.setDate(24);

const array=[{id:1,first:"JAVA",isDone:false,date:event.toString() },
          {id:2,first:"SPRING",isDone:false,date:event.toString()  },
          {id:3,first:"WEB DEV",isDone:false,date:event.toString()  },
          {id:4,first:"DSA",isDone:false,date:event.toString() },
]

const ListElement=()=>{
    return(
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Description</th>
      <th scope="col">IsDone</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    {array.map((item)=>(<tr>
      <th scope="row">{item.id}</th>
      <td>{item.first}</td>
      <td>{item.isDone.toString()}</td>
      <td>{item.date}</td>
    </tr>))}
  </tbody> 
</table>
    )
}

export default ListElement;