import React from 'react'
import Header from './Header';
import Sidenav from './Sidenav';

export default function Subscribers() {

    let data = [
        {
            "email": "rene.descartes@listmonk.app",
            "name": "Rene Descartes",
            "list": "1",
            "create": "Mon, 27 Sep 2021",
            "update": "Mon, 27 Sep 2021",
        },
        {
            "email": "rene.descartes@listmonk.app",
            "name": "Rene Descartes",
            "list": "1",
            "create": "Mon, 27 Sep 2021",
            "update": "Mon, 27 Sep 2021",
        },
        {
            "email": "rene.descartes@listmonk.app",
            "name": "Rene Descartes",
            "list": "1",
            "create": "Mon, 27 Sep 2021",
            "update": "Mon, 27 Sep 2021",
        },
        {
            "email": "rene.descartes@listmonk.app",
            "name": "Rene Descartes",
            "list": "1",
            "create": "Mon, 27 Sep 2021",
            "update": "Mon, 27 Sep 2021",
        },
        {
            "email": "rene.descartes@listmonk.app",
            "name": "Rene Descartes",
            "list": "1",
            "create": "Mon, 27 Sep 2021",
            "update": "Mon, 27 Sep 2021",
        },
        {
            "email": "rene.descartes@listmonk.app",
            "name": "Rene Descartes",
            "list": "1",
            "create": "Mon, 27 Sep 2021",
            "update": "Mon, 27 Sep 2021",
        },
        {
            "email": "rene.descartes@listmonk.app",
            "name": "Rene Descartes",
            "list": "1",
            "create": "Mon, 27 Sep 2021",
            "update": "Mon, 27 Sep 2021",
        },
    
    ]

    return (
        <>
            <Header />

            <section className='side_menu'>

                <Sidenav />

                <div className='dashboard_side'>

                    <div className='list_lable'>
                        <b><h2>Subscribers (102)</h2></b>
                        <div className='list_btn'>
                            <button>
                                <span style={{ fontSize: '16px' }} class="material-symbols-outlined">add</span>
                                <span style={{ fontSize: '20px', padding: '4px' }}> New</span>
                            </button>
                        </div>
                    </div>

                    <div className='search_btn'>
                        <input type="text" placeholder='E-mail or name' />
                        <span class="material-symbols-outlined">search</span>
                    </div>

                    <section style={{ marginBottom: '30px' }}>

                        <div className='sub_set_options'>
                            <span class="material-symbols-outlined ">cloud_download</span>
                            <span style={{ marginLeft: '7px' }}>Export</span>
                        </div>

                        <div className='pagenation_list'>
                            <button className='list_num_btn'>1</button>
                            <button className='list_first_btn' ><span class="material-symbols-outlined">chevron_left</span></button>
                            <button className='list_first_btn'><span class="material-symbols-outlined">chevron_right</span></button>
                        </div>

                        <table className='table_list_set'>
                            <tr>
                                <th className='table_list_th'><input type="checkbox" ></input></th>
                                <th className='table_list_th'>Status</th>
                                <th className='table_list_th'>E-mail</th>
                                <th className='table_list_th'>Name</th>
                                <th className='table_list_th'>List</th>
                                <th className='table_list_th'>Created</th>
                                <th className='table_list_th'>Update</th>
                                <th className='table_list_th'>Actions</th>
                            </tr>

                            {data.map((element, myid) => {
                                return <tr>
                                    <td ><input type="checkbox" ></input></td>
                                    <td><div className='list_type_btn'>
                                        <button className='list_type_enable'>Enabled</button>
                                    </div></td>
                                    <td>{element.email}</td>
                                    <td>{element.name}</td>
                                    <td>{element.list}</td>
                                    <td>{element.create}</td>
                                    <td>{element.update}</td>
                                   
                                    <td><div className='list_actions'>
                                        <span class="material-symbols-outlined sub_icon_size">cloud_download</span>
                                        <span class="material-symbols-outlined sub_icon_size">edit</span>
                                        <span class="material-symbols-outlined sub_icon_size">delete</span>
                                    </div></td>
                                </tr>
                            })}

                        </table>

                        <div className='pagenation_list'>
                            <button className='list_num_btn'>1</button>
                            <button className='list_first_btn' ><span class="material-symbols-outlined">chevron_left</span></button>
                            <button className='list_first_btn'><span class="material-symbols-outlined">chevron_right</span></button>
                        </div>

                    </section>

                </div>
            </section>

        </>
    )
}
