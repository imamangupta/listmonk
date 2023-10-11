import React from 'react'
import './css/header.css'

export default function Header() {
    return (
        <>
            <div className='header_top'>
                <div className='header_inner'>
                    <div className='header_name'>
                        <a href="/">
                            <img width={90} src="https://demo.listmonk.app/admin/static/img/logo.ba80d17e.svg" alt="" />
                        </a>
                    </div>
                    <div>
                        <a className='logout_btn' href="">Logout</a>
                    </div>
                </div>
            </div>
        </>
    )
}
