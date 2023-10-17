import React from 'react'
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  return (
    <>
     <section>
      <div>
        <div className='header_top_s_link' >
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span class="material-symbols-outlined footer_q_icon">call</span>
              <p style={{ margin: '0', paddingLeft: '10px' }}>+91 2323232323</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
              <span class="material-symbols-outlined footer_q_icon">mail</span>
              <p style={{ margin: '0', paddingLeft: '10px' }}>email@email.com</p>
            </div>
          </div>
          <div>
            <img style={{ padding: '5px' }} width={20} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="" />
            <img style={{ padding: '5px' }} width={20} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="" />
            <img style={{ padding: '5px' }} width={20} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="" />
            <img style={{ padding: '5px' }} width={20} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="" />
          </div>
        </div>
        <div className='header_nav'>
          <div>
            <div>
              <img src="https://www.mckenzie-legal.com/wp-content/themes/law-theme/images/logo-light.png" alt="" />
            </div>
          </div>

          <div style={{ display: 'flex' }}>
            <div className='header_link'>
              <Link to="/">Home</Link>
            </div>
            <div className='header_link'>
              <Link to="/practicesarea">Practices</Link>
            </div>
            <div className='header_link'>
              <Link to="/whychooseus">why choose us</Link>
            </div>
            <div className='header_link'>
              <Link to="/gallery">Gallery</Link>
            </div>
            <div className='header_link'>
              <Link to="/about">About</Link>
            </div>
            <div className='header_link'>
              <Link to="/services">Services</Link>
            </div>
            <div className='header_link'>
              <Link to="/contact">Contact</Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Link to="/login">
              <button>Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>


    </>
  )
}
