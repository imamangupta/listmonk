import React from 'react'
import Header from './Header';
import Sidenav from './Sidenav';

export default function Createnew() {
    return (
        <>

            <Header />

            <section className='side_menu'>

                <Sidenav />

                <div className='dashboard_side'>

                    <div className='list_lable'>
                        <b><h2>New campaign</h2></b>
                    </div>

                    <section>

                        <div className='createnew_from'>
                            <div style={{ width: '60%' }}>
                                <div className='inport_input_list'>
                                    <label style={{ fontSize: '14px', marginBottom: '-8px', width: '43px' }} for="html">Name</label>
                                    <input type="text" />
                                    <p>Please fill out this field.</p>
                                </div>
                                <div className='inport_input_list'>
                                    <label style={{ fontSize: '14px', marginBottom: '-8px', width: '55px' }} for="html">Subject</label>
                                    <input type="text" />
                                    <p>Please fill out this field.</p>
                                </div>
                                <div className='inport_input_list'>
                                    <label style={{ fontSize: '14px', marginBottom: '-8px', width: '91px' }} for="html">Form address</label>
                                    <input type="text" value='listmonk <noreply@listmonk.yoursite.com>' />
                                    <br />
                                </div>
                                <div className='inport_input_list'>
                                    <label style={{ fontSize: '14px', marginBottom: '-8px', width: '55px' }} for="html">Lists (0)</label>
                                    <input type="text" />
                                    <br />
                                </div>
                                <div>
                                    <div className='cn_select_lable'>
                                        <label for="cars">Template</label>
                                    </div>
                                    <select className='createnew_select' name="cars" id="cars">
                                        <option value="volvo">Default Template</option>
                                        <option value="volvo">other Template</option>
                                    </select>
                                </div>
                                <div>
                                    <br />
                                    <div className='cn_select_lable'>
                                        <label for="cars">Massager</label>
                                    </div>
                                    <select className='createnew_select' name="cars" id="cars">
                                        <option value="volvo">Email</option>
                                    </select>
                                </div>
                                <div className='inport_input_list'>
                                    <br />
                                    <label style={{ fontSize: '14px', marginBottom: '-8px', width: '35px' }} for="html">Tags</label>
                                    <input type="text" />
                                    <br />
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <label style={{ fontWeight: 'bold', marginLeft: '7px' }} htmlFor="">Send Later</label>
                                </div>
                                <div className='cn_add_custom'>
                                    <span style={{ fontSize: '20px' }} className="material-symbols-outlined">add</span>
                                    <span>Set custom headers</span>
                                </div>
                                <div style={{ margin: '20px 0px' }}>
                                    <button className='list_num_btn'>Continue</button>
                                </div>
                            </div>

                            <div className='createnew_side_from'>
                                <div className='createnew_side_from_inner'>
                                    <h2><b>Send test message</b></h2>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <span class="material-symbols-outlined">forward_to_inbox</span>
                                        <span>E-mail</span>
                                    </div>
                                    <p style={{ color: '#898989' }}>Hit Enter after typing an address to add multiple recipients. The addresses must belong to existing subscribers.</p>
                                    <div style={{ margin: '20px 0px' }}>
                                        <button className='list_num_btn'>Continue</button>
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
