import React from 'react';
import { Link } from 'react-router-dom';

function Home({computers}) {

  return (
    <div className='container'>
        <div className="row">
        {
    computers.map((item,i)=>{
        return(
            <div className='col-md-3 card m-5 text-center' 
            key={i}>
                <Link to={`article/${i}`}>
                    <div 
                    className="card-header bg-dark text-white" >
                        <h3>{item.name}</h3>
                    </div>
                </Link>
                <div className="card-body">
                <h2>{item.price} DH</h2>

                </div>
                <div className="card-footer">
                <button className='btn btn-warning'>
                    add to cart</button>
                </div>

            </div>
        )
    })
        }
        </div>
    </div>
  )
}

export default Home