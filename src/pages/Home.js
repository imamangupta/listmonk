import React from 'react'
import './css/home.css'
import { Link, useLocation } from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
export default function Home() {
  return (
    <>


      <Header />


      <section>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />




          <div style={{ margin: '30px', textAlign: "center" }}>
            <Link to="/admin">
              <button className='list_num_btn'>Go to Dashboard</button>
            </Link>
          </div>



          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </section>


      <Footer />



    </>
  )
}
