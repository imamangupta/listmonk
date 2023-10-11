import React from 'react'
import Header from './Header';
import Sidenav from './Sidenav';

export default function Forms() {
    return (
        <>

            <Header />
            <section className='side_menu'>
                <Sidenav />
                <div className='dashboard_side'>
                    <div className='list_lable'>
                        <b><h2>Forms</h2></b>
                        <div className='list_btn'>
                            <button>
                                <span style={{ fontSize: '16px' }} class="material-symbols-outlined">add</span>
                                <span style={{ fontSize: '20px', padding: '4px' }}> New</span>
                            </button>
                        </div>
                    </div>
                    <section>
                        <div style={{display:'flex'}}>
                            <div>
                                <div>
                                    <h3>Public lists</h3>
                                    <p>Select lists to add to the form.</p>
                                    <input type="checkbox" ></input>
                                    <label for="">Opt-in List</label><br></br>
                                </div>
                                <div>
                                    <h3>Public subscription page</h3>
                                    <p style={{ color: 'blue' }}>https://demo.listmonk.app/subscription/form</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3>Form HTML</h3>
                                    <p>Use the following HTML to show a subscription form on an external webpage. The form should have the email field and one or more `l` (list UUID) fields. The name field is optional.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

        </>
    )
}
