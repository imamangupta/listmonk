import React from 'react'
import './css/header.css'
import Header from './Header';
import Sidenav from './Sidenav';

export default function Dashboard() {





    return (
        <>

            <Header />

            <section className='side_menu'>


                <Sidenav />

                <div className='dashboard_side'>

                    <div style={{ marginTop: '20px' }}>
                        <b>Tue, 10 Oct 2023</b>
                    </div>


                    <section style={{ marginTop: '20px' }}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ width: '50%' }}>
                                <div className='dashboard_list_data'>
                                    <div style={{ width: '50%' }}>
                                        <div className='dashb_icon_set'>
                                            <span class="material-symbols-outlined">list_alt</span>
                                            <span className='dashb_icon_number'>2</span>
                                        </div>
                                        <div>
                                            <span style={{ color: '#858585' }}>Lists</span>
                                        </div>
                                    </div>

                                    <div style={{ width: '50%' }}>
                                        <div>
                                            <span>1</span>
                                            <span style={{ color: '#858585', marginLeft: '5px' }}>Public</span>
                                        </div>
                                        <div>
                                            <span>1</span>
                                            <span style={{ color: '#858585', marginLeft: '5px' }}>Public</span>
                                        </div>
                                        <div>
                                            <span>1</span>
                                            <span style={{ color: '#858585', marginLeft: '5px' }}>Single opt-in</span>
                                        </div>

                                        <div>
                                            <span>1</span>
                                            <span style={{ color: '#858585', marginLeft: '5px' }}>Single opt-in</span>
                                        </div>

                                    </div>
                                </div>

                                <div className='dashboard_list_data'>
                                    <div style={{ width: '50%' }}>
                                        <div className='dashb_icon_set'>
                                            <span class="material-symbols-outlined">rocket_launch</span>

                                            <span className='dashb_icon_number'>2</span>
                                        </div>
                                        <div>
                                            <span style={{ color: '#858585' }}>Campaigns</span>
                                        </div>
                                    </div>

                                    <div style={{ width: '50%' }}>
                                        <div>
                                            <span>1</span>
                                            <span style={{ color: '#858585', marginLeft: '5px' }}>Finished</span>
                                        </div>
                                        <div>
                                            <span>1</span>
                                            <span style={{ color: '#858585', marginLeft: '5px' }}>Draft</span>
                                        </div>


                                    </div>
                                </div>



                            </div>
                            <div style={{ width: '50%' }}>
                                <div style={{ border: '1px solid #d5d5d5', borderRadius: '3px' , marginTop:'4px'}}>
                                    <div className='dashboard_list_data' style={{ border: 'none' }}>
                                        <div style={{ width: '50%' }}>
                                            <div className='dashb_icon_set'>
                                                <span class="material-symbols-outlined">group</span>
                                                <span className='dashb_icon_number'>102</span>
                                            </div>
                                            <div>
                                                <span style={{ color: '#858585' }}>Subscribers</span>
                                            </div>
                                        </div>

                                        <div style={{ width: '50%' }}>
                                            <div>
                                                <span>0</span>
                                                <span style={{ color: '#858585', marginLeft: '5px' }}>Blocklisted</span>
                                            </div>
                                            <div>
                                                <span>0</span>
                                                <span style={{ color: '#858585', marginLeft: '5px' }}>Orphans</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='dash_line' />

                                    <div className='dashboard_list_data' style={{ border: 'none' }}>
                                        <div style={{ width: '50%' }}>
                                        <div className='dashb_icon_set'>
                                                <span class="material-symbols-outlined">mail</span>
                                                <span className='dashb_icon_number'>2002</span>
                                            </div>
                                            <div>
                                                <span style={{ color: '#858585' }}>Messages sent</span>
                                            </div>
                                        </div>

                                        <div style={{ width: '50%' }}>
                                            <div>
                                                <span>1</span>
                                                <span>Public</span>
                                            </div>
                                            <div>
                                                <span>1</span>
                                                <span>Public</span>
                                            </div>
                                            <div>
                                                <span>1</span>
                                                <span> Single opt-in</span>
                                            </div>

                                         

                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </section>
                    <section style={{ marginTop: '20px' }}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ width: '50%' }}>
                                <div className='dashboard_list_data'>
                                    <div style={{ width: '50%' }}>
                                        <div className='dashb_icon_set'>
                                            <span class="material-symbols-outlined">list_alt</span>
                                            <span className='dashb_icon_number'>2</span>
                                        </div>
                                        <div>
                                            <span style={{ color: '#858585' }}>Lists</span>
                                        </div>
                                    </div>

                                    <div style={{ width: '50%' }}>
                                        <div>
                                            <span>1</span>
                                            <span style={{ color: '#858585', marginLeft: '5px' }}>Public</span>
                                        </div>
                                        <div>
                                            <span>1</span>
                                            <span style={{ color: '#858585', marginLeft: '5px' }}>Public</span>
                                        </div>
                                        <div>
                                            <span>1</span>
                                            <span style={{ color: '#858585', marginLeft: '5px' }}>Single opt-in</span>
                                        </div>

                                        <div>
                                            <span>1</span>
                                            <span style={{ color: '#858585', marginLeft: '5px' }}>Single opt-in</span>
                                        </div>

                                    </div>
                                </div>

                                <div className='dashboard_list_data'>
                                    <div style={{ width: '50%' }}>
                                        <div className='dashb_icon_set'>
                                            <span class="material-symbols-outlined">rocket_launch</span>

                                            <span className='dashb_icon_number'>2</span>
                                        </div>
                                        <div>
                                            <span style={{ color: '#858585' }}>Campaigns</span>
                                        </div>
                                    </div>

                                    <div style={{ width: '50%' }}>
                                        <div>
                                            <span>1</span>
                                            <span style={{ color: '#858585', marginLeft: '5px' }}>Finished</span>
                                        </div>
                                        <div>
                                            <span>1</span>
                                            <span style={{ color: '#858585', marginLeft: '5px' }}>Draft</span>
                                        </div>


                                    </div>
                                </div>



                            </div>
                            <div style={{ width: '50%' }}>
                                <div style={{ border: '1px solid #d5d5d5', borderRadius: '3px' , marginTop:'4px'}}>
                                    <div className='dashboard_list_data' style={{ border: 'none' }}>
                                        <div style={{ width: '50%' }}>
                                            <div className='dashb_icon_set'>
                                                <span class="material-symbols-outlined">group</span>
                                                <span className='dashb_icon_number'>102</span>
                                            </div>
                                            <div>
                                                <span style={{ color: '#858585' }}>Subscribers</span>
                                            </div>
                                        </div>

                                        <div style={{ width: '50%' }}>
                                            <div>
                                                <span>0</span>
                                                <span style={{ color: '#858585', marginLeft: '5px' }}>Blocklisted</span>
                                            </div>
                                            <div>
                                                <span>0</span>
                                                <span style={{ color: '#858585', marginLeft: '5px' }}>Orphans</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='dash_line' />

                                    <div className='dashboard_list_data' style={{ border: 'none' }}>
                                        <div style={{ width: '50%' }}>
                                        <div className='dashb_icon_set'>
                                                <span class="material-symbols-outlined">mail</span>
                                                <span className='dashb_icon_number'>2002</span>
                                            </div>
                                            <div>
                                                <span style={{ color: '#858585' }}>Messages sent</span>
                                            </div>
                                        </div>

                                        <div style={{ width: '50%' }}>
                                            <div>
                                                <span>1</span>
                                                <span>Public</span>
                                            </div>
                                            <div>
                                                <span>1</span>
                                                <span>Public</span>
                                            </div>
                                            <div>
                                                <span>1</span>
                                                <span> Single opt-in</span>
                                            </div>

                                         

                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </section>








                </div>
            </section>

        </>
    )
}
