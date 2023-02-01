import React,{useState,useEffect} from 'react'

function MouseTracker() {
    const [coords,setCoords] = useState({x:0,y:0});
    const [isTrackingMouse,toggleStatus] = useState(false)
    
    const handleMouseMovement = (e)=>{
        setCoords({x:e.clientX, y:e.clientY})
        }
    useEffect(()=>{
        window.addEventListener('mousemove',handleMouseMovement)   
        
        
    },[])
  return (
    <div>
        <h2>x:{coords.x} ,y: {coords.y}</h2>
       <button className="Btn" onClick={()=>toggleStatus(prev=> !prev)}>
         {isTrackingMouse ? "start tracking coordinates" : "stop tracking"}</button>
    </div>
  )
}

export default MouseTracker