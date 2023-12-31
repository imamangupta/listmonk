import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidenav from './Sidenav';

export default function List() {

    let data = [
        {
            "name": "Default list",
            "subscribers": "101",
            "created": "Mon, 27 Sep 2021",
            "update": "Mon, 27 Sep 2021",
        },
        {
            "name": "Default list",
            "subscribers": "102",
            "created": "Mon, 27 Sep 2021",
            "update": "Mon, 27 Sep 2021",
        },
        {
            "name": "Default list",
            "subscribers": "103",
            "created": "Mon, 27 Sep 2021",
            "update": "Mon, 27 Sep 2021",
        },
        {
            "name": "Default list",
            "subscribers": "104",
            "created": "Mon, 27 Sep 2021",
            "update": "Mon, 27 Sep 2021",
        },
        {
            "name": "Default list",
            "subscribers": "104",
            "created": "Mon, 27 Sep 2021",
            "update": "Mon, 27 Sep 2021",
        },
        {
            "name": "Default list",
            "subscribers": "104",
            "created": "Mon, 27 Sep 2021",
            "update": "Mon, 27 Sep 2021",
        },
        {
            "name": "Default list",
            "subscribers": "104",
            "created": "Mon, 27 Sep 2021",
            "update": "Mon, 27 Sep 2021",
        },
        {
            "name": "Default list",
            "subscribers": "104",
            "created": "Mon, 27 Sep 2021",
            "update": "Mon, 27 Sep 2021",
        },
        {
            "name": "Default list",
            "subscribers": "104",
            "created": "Mon, 27 Sep 2021",
            "update": "Mon, 27 Sep 2021",
        },
        {
            "name": "Default list",
            "subscribers": "104",
            "created": "Mon, 27 Sep 2021",
            "update": "Mon, 27 Sep 2021",
        },
        {
            "name": "Default list",
            "subscribers": "104",
            "created": "Mon, 27 Sep 2021",
            "update": "Mon, 27 Sep 2021",
        },
        {
            "name": "Default list",
            "subscribers": "104",
            "created": "Mon, 27 Sep 2021",
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
                        <b><h2>Lists (2)</h2></b>
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

                    <section style={{ marginBottom: '30px' }}>
                        <div className='pagenation_list'>
                            <button className='list_num_btn'>1</button>
                            <button className='list_first_btn' ><span class="material-symbols-outlined">chevron_left</span></button>
                            <button className='list_first_btn'><span class="material-symbols-outlined">chevron_right</span></button>
                        </div>

                        <table className='table_list_set'>
                            <tr>
                                <th className='table_list_th'>Name</th>
                                <th className='table_list_th'>Type</th>
                                <th className='table_list_th'>Subscribers</th>
                                <th className='table_list_th'>Created</th>
                                <th className='table_list_th'>Update</th>
                                <th className='table_list_th'>Actions</th>
                            </tr>

                            {data.map((element, myid) => {
                                return <tr>
                                    <td className='list_name_type '>{element.name}</td>
                                    <td><div className='list_type_btn'>
                                        <button className='list_type_private'>Private</button>
                                        <button className='list_type_single'>Single opt-in</button>
                                    </div></td>
                                    <td>{element.subscribers}</td>
                                    <td>{element.update}</td>
                                    <td>{element.created}</td>
                                    <td><div className='list_actions'>
                                        <span class="material-symbols-outlined">rocket_launch</span>
                                        <span class="material-symbols-outlined">edit</span>
                                        <span class="material-symbols-outlined">save</span>
                                        <span class="material-symbols-outlined">delete</span>

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
