import React from 'react'
import Header from './Header';
import Sidenav from './Sidenav';

export default function Bounces() {


    let data = [
        {
            "email": "rene.descartes@listmonk.app",
            "campaigns": "Test campaign",
            "source": "demo",
            "type": "Hard",
            "create": "Mon, 27 Sep 2021",
        },
        {
            "email": "rene.descartes@listmonk.app",
            "campaigns": "Test campaign",
            "source": "demo",
            "type": "Hard",
            "create": "Mon, 27 Sep 2021",
        },
        {
            "email": "rene.descartes@listmonk.app",
            "campaigns": "Test campaign",
            "source": "demo",
            "type": "Hard",
            "create": "Mon, 27 Sep 2021",
        },
        {
            "email": "rene.descartes@listmonk.app",
            "campaigns": "Test campaign",
            "source": "demo",
            "type": "Hard",
            "create": "Mon, 27 Sep 2021",
        },
        {
            "email": "rene.descartes@listmonk.app",
            "campaigns": "Test campaign",
            "source": "demo",
            "type": "Hard",
            "create": "Mon, 27 Sep 2021",
        },
        {
            "email": "rene.descartes@listmonk.app",
            "campaigns": "Test campaign",
            "source": "demo",
            "type": "Hard",
            "create": "Mon, 27 Sep 2021",
        },
        {
            "email": "rene.descartes@listmonk.app",
            "campaigns": "Test campaign",
            "source": "demo",
            "type": "Hard",
            "create": "Mon, 27 Sep 2021",
        },
    ]



    return (
        <>
            <Header />

            <section className='side_menu'>

                <Sidenav />

                <div className='dashboard_side'>

                    <div className='list_lable'>
                        <b><h2>Bounces (1000)</h2></b>
                        <div className='list_btn'>
                            <button>
                                <span style={{ fontSize: '16px' }} class="material-symbols-outlined">delete</span>
                                <span style={{ fontSize: '15px', padding: '4px' }}> Clear all</span>
                            </button>
                        </div>
                    </div>

                    <section style={{ marginBottom: '30px' }}>
                        <div className='pagenation_list'>
                            <button className='list_num_btn'>1</button>
                            <button style={{ padding: '9px 12px', cursor: 'pointer', margin: '5px' }}>2</button>
                            <span>...</span>
                            <button style={{ padding: '9px 12px', cursor: 'pointer', margin: '5px' }}>10</button>
                            <button className='list_first_btn' ><span class="material-symbols-outlined">chevron_left</span></button>
                            <button className='list_first_btn'><span class="material-symbols-outlined">chevron_right</span></button>
                        </div>

                        <table className='table_list_set'>
                            <tr>
                                <th className='table_list_th'><input type="checkbox" ></input></th>
                                <th className='table_list_th'>E-mail</th>
                                <th className='table_list_th'>Campaigns</th>
                                <th className='table_list_th'>Source</th>
                                <th className='table_list_th'>Type</th>
                                <th className='table_list_th'>Created</th>
                                <th className='table_list_th'></th>
                            </tr>


                            {data.map((element, myid) => {
                                return <tr>
                                    <td><input type="checkbox" ></input></td>
                                    <td style={{ color: 'blue' }}>{element.email}</td>
                                    <td style={{ color: 'blue' }}>{element.campaigns}</td>
                                    <td style={{ color: 'blue' }}>{element.source}</td>
                                    <td style={{ color: 'blue' }}>{element.type}</td>
                                    <td >{element.create}</td>
                                    <td>Mon, 27 Sep 2021</td>
                                    <td><div className='list_actions'>
                                        <span class="material-symbols-outlined">delete</span>
                                    </div></td>
                                </tr>
                            })}



                        </table>

                        <div className='pagenation_list'>
                            <button className='list_num_btn'>1</button>
                            <button style={{ padding: '9px 12px', cursor: 'pointer', margin: '5px' }}>2</button>
                            <span>...</span>
                            <button style={{ padding: '9px 12px', cursor: 'pointer', margin: '5px' }}>10</button>
                            <button className='list_first_btn' ><span class="material-symbols-outlined">chevron_left</span></button>
                            <button className='list_first_btn'><span class="material-symbols-outlined">chevron_right</span></button>
                        </div>

                    </section>

                </div>
            </section>

        </>
    )
}
