import React from 'react'
import Header from './Header';
import Sidenav from './Sidenav';


export default function Analytics() {
    return (
        <>

            <Header />

            <section className='side_menu'>


                <Sidenav />

                <div className='dashboard_side'>



                    <div className='list_lable'>
                        <b><h2>Analytics</h2></b>
                        <div className='list_btn'>
                            <button>
                                <span style={{ fontSize: '16px' }} class="material-symbols-outlined">add</span>
                                <span style={{ fontSize: '20px', padding: '4px' }}> New</span>
                            </button>
                        </div>
                    </div>

                    <div className='search_btn'>
                        <input type="text" />
                        <span class="material-symbols-outlined">search</span>
                    </div>






                </div>
            </section>

        </>
    )
}
