import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";


export default function Sidenav() {

    const location = useLocation();

    const lists = (value) => {
        document.getElementById(`${value}`).classList.toggle("displaynone");
    }

    useEffect(() => {
        console.log(location.pathname);
        if (location.pathname === '/admin/list' || location.pathname === '/admin/forms' ) {
            document.getElementById('showlist').classList.remove("displaynone");
        }

        if (location.pathname === '/admin/subscribers' || location.pathname === '/admin/import' || location.pathname === '/admin/bounces' ) {
            document.getElementById('showsubs').classList.remove("displaynone");
        }

        if (location.pathname === '/admin/settings' || location.pathname === '/admin/maintenance' || location.pathname === '/admin/logs' ) {
            document.getElementById('showsetting').classList.remove("displaynone");
        }

        if (location.pathname === '/admin/whatsapp/compaigns' || location.pathname === '/admin/whatsapp/new' || location.pathname === '/admin/whatsapp/media' || location.pathname === '/admin/whatsapp/templates' || location.pathname === '/admin/whatsapp/analytics' ) {
            document.getElementById('showwhatsapp').classList.remove("displaynone");
        }
        if (location.pathname === '/admin/sms/compaigns' || location.pathname === '/admin/sms/new' || location.pathname === '/admin/sms/media' || location.pathname === '/admin/sms/templates' || location.pathname === '/admin/sms/analytics' ) {
            document.getElementById('showsms').classList.remove("displaynone");
        }
        if (location.pathname === '/admin/email/compaigns' || location.pathname === '/admin/email/new' || location.pathname === '/admin/email/media' || location.pathname === '/admin/email/templates' || location.pathname === '/admin/email/analytics' ) {
            document.getElementById('showemails').classList.remove("displaynone");
        }

    }, []);

    return (
        <>
        
            <div className='menu_bar'>
                <div className='menu_bar_inner'>

                    <div className={` menu_link ${location.pathname === '/admin' ? 'active_menu' : ''}`}>
                        <Link to="/admin">
                            <span style={{ fontSize: '15px' }} className="material-symbols-outlined">dashboard</span>
                            <span className='menu_l_name'>Dashboard</span>
                        </Link>
                    </div>


                    <div className='menu_link'>
                        <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} href="" onClick={() => lists('showlist')}>
                            <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                            <span className='menu_l_name'>Lists</span>
                        </div>
                        <div id='showlist' className='displaynone' style={{ marginTop: '10px', marginLeft: '20px' }}>
                            <Link to="/admin/list" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/list' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>All Lists</span>
                            </Link>
                            <Link to="/admin/forms" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/forms' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>Forms</span>
                            </Link>
                        </div>
                    </div>





                    <div className='menu_link'>
                        <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} href="" onClick={() => lists('showsubs')}>
                            <span style={{ fontSize: '15px' }} className="material-symbols-outlined">group</span>
                            <span className='menu_l_name'>Subscribers</span>
                        </div>

                        <div id='showsubs' className='displaynone' style={{ marginTop: '10px', marginLeft: '20px' }}>
                            <Link to="/admin/subscribers" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/subscribers' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>All Subscribers</span>
                            </Link>
                            <Link to="/admin/import" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/import' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>Import</span>
                            </Link>
                            <Link to="/admin/bounces" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/bounces' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>Bounces</span>
                            </Link>
                        </div>


                    </div>








                    <div className='menu_link'>
                        <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} href="" onClick={() => lists('showemails')}>
                            <span style={{ fontSize: '15px' }} className="material-symbols-outlined">rocket_launch</span>
                            <span className='menu_l_name'>Emails</span>
                        </div>

                        <div id='showemails' className='displaynone' style={{ marginTop: '10px', marginLeft: '20px' }}>
                            <Link to="/admin/email/compaigns" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/email/compaigns' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>All Campaigns</span>
                            </Link>
                            <Link to="/admin/email/new" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/email/new' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>Create new</span>
                            </Link>
                            <Link to="/admin/email/media" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/email/media' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>Media</span>
                            </Link>
                            <Link to="/admin/email/templates" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/email/templates' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>Templates</span>
                            </Link>
                            <Link to="/admin/email/analytics" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/email/analytics' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>Analytics</span>
                            </Link>
                        </div>
                    </div>




                    <div className='menu_link'>
                        <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} href="" onClick={() => lists('showsms')}>
                            <span style={{ fontSize: '15px' }} className="material-symbols-outlined">rocket_launch</span>
                            <span className='menu_l_name'>SMS</span>
                        </div>

                        <div id='showsms' className='displaynone' style={{ marginTop: '10px', marginLeft: '20px' }}>
                            <Link to="/admin/sms/compaigns" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/sms/compaigns' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>All Campaigns</span>
                            </Link>
                            <Link to="/admin/sms/new" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/sms/new' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>Create new</span>
                            </Link>
                            <Link to="/admin/sms/media" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/sms/media' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>Media</span>
                            </Link>
                            <Link to="/admin/sms/templates" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/sms/templates' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>Templates</span>
                            </Link>
                            <Link to="/admin/sms/analytics" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/sms/analytics' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>Analytis</span>
                            </Link>
                        </div>
                    </div>




                    <div className='menu_link'>
                        <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} href="" onClick={() => lists('showwhatsapp')}>
                            <span style={{ fontSize: '15px' }} className="material-symbols-outlined">rocket_launch</span>
                            <span className='menu_l_name'>Whatsapp</span>
                        </div>

                        <div id='showwhatsapp' className='displaynone' style={{ marginTop: '10px', marginLeft: '20px' }}>
                            <Link to="/admin/whatsapp/compaigns" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/whatsapp/compaigns' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>All Campaigns</span>
                            </Link>
                            <Link to="/admin/whatsapp/new" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/whatsapp/new' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>Create new</span>
                            </Link>
                            <Link to="/admin/whatsapp/media" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/whatsapp/media' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>Media</span>
                            </Link>
                            <Link to="/admin/whatsapp/templates" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/whatsapp/templates' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>Templates</span>
                            </Link>
                            <Link to="/admin/whatsapp/analytics" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/whatsapp/analytics' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>Analytis</span>
                            </Link>
                        </div>


                    </div>




                    <div className='menu_link'>
                        <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} href="" onClick={() => lists('showsetting')}>
                            <span style={{ fontSize: '15px' }} className="material-symbols-outlined">settings</span>
                            <span className='menu_l_name'>Settings</span>
                        </div>
                        <div id='showsetting' className='displaynone' style={{ marginTop: '10px', marginLeft: '20px' }}>
                            <Link to="/admin/settings" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/settings' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>Settings</span>
                            </Link>
                            <Link to="/admin/maintenance" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/maintenance' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>Maintenance</span>
                            </Link>
                            <Link to="/admin/logs" style={{ padding: '5px' }} className={` ${location.pathname === '/admin/logs' ? 'active_menu' : ''}`}>
                                <span style={{ fontSize: '15px' }} className="material-symbols-outlined">list_alt</span>
                                <span className='menu_l_name'>Logs</span>
                            </Link>

                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}
