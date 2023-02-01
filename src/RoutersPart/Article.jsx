import React from 'react'
import { useParams } from 'react-router-dom'

function Article({computers}) {
    const params = useParams();
    let id = params.id;
    let pc = computers.find((item)=> item.id==id)
  return (
    <div className="card">
        <div className="card-header">
            <h1>computer name : {pc.name}</h1>
        </div>
        <div className="card-body">
            <h2>computer id : {pc.id}</h2>
            <h3>computer price : {pc.price}</h3>
            <p>computer description : {pc.desc}</p>
        </div>
    </div>
  )
}

export default Article