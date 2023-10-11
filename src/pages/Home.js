import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    
    <div style={{margin:'30px', textAlign:"center"}}>
      <Link to="/admin">
        <button className='list_num_btn'>Go to Dashboard</button>
      </Link>
    </div>
    </>
  )
}
