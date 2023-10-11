import React from 'react'
import Header from './Header';
import Sidenav from './Sidenav';

export default function Media() {
    return (
        <>

            <Header />

            <section className='side_menu'>


                <Sidenav />

                <div className='dashboard_side'>



                    <div className='list_lable'>
                        <b><h2>Media / filesystem</h2></b>
                        <div className='list_btn'>
                            <button>
                                <span style={{ fontSize: '16px' }} class="material-symbols-outlined">add</span>
                                <span style={{ fontSize: '20px', padding: '4px' }}> New</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <p className='import_drag_lable'>CVS or ZIP file</p>

                                <div className='import_drag_file'>
                                    <span class="material-symbols-outlined">upload_file</span>
                                    <p>Click or drag a CSV or ZIP file here</p>
                                </div>
                            </div>
                            {/* <input type="file" /> */}
                        </div>
                        <button style={{ marginTop: '10px' }} className='list_num_btn'>Upload</button>
                    </div>




                    <div className='search_btn'>
                        <input type="text" />
                        <span class="material-symbols-outlined">search</span>
                    </div>



                    
                    <section style={{marginBottom:'30px'}}>
                        <div className='pagenation_list'>
                            <button className='list_num_btn'>1</button>
                            <button className='list_first_btn' ><span class="material-symbols-outlined">chevron_left</span></button>
                            <button className='list_first_btn'><span class="material-symbols-outlined">chevron_right</span></button>
                        </div>


                        <table className='table_list_set'>
                            <tr>
                                <th className='table_list_th'>Name</th>
                                <th className='table_list_th'></th>
                                <th className='table_list_th'>Created</th>
                                <th className='table_list_th'></th>
                               
                            </tr>

                            
                            <tr className='table_list_border'>
                                <td className='list_name_type '>Aman.jpg</td>
                                <td><div className='list_type_btn'>
                                    <button className='list_type_single'>Single opt-in</button>
                                </div></td>
                                <td>Mon, 27 Sep 2021</td>
                                <td><span style={{fontSize:'18px'}} class="material-symbols-outlined">delete</span></td>
                            </tr>
                            <tr className='table_list_border'>
                                <td className='list_name_type '>Aman.jpg</td>
                                <td><div className='list_type_btn'>
                                    <button className='list_type_single'>Single opt-in</button>
                                </div></td>
                                <td>Mon, 27 Sep 2021</td>
                                <td><span style={{fontSize:'18px'}} class="material-symbols-outlined">delete</span></td>
                            </tr>
                            <tr className='table_list_border'>
                                <td className='list_name_type '>Aman.jpg</td>
                                <td><div className='list_type_btn'>
                                    <button className='list_type_single'>Single opt-in</button>
                                </div></td>
                                <td>Mon, 27 Sep 2021</td>
                                <td><span style={{fontSize:'18px'}} class="material-symbols-outlined">delete</span></td>
                            </tr>
                            <tr className='table_list_border'>
                                <td className='list_name_type '>Aman.jpg</td>
                                <td><div className='list_type_btn'>
                                    <button className='list_type_single'>Single opt-in</button>
                                </div></td>
                                <td>Mon, 27 Sep 2021</td>
                                <td><span style={{fontSize:'18px'}} class="material-symbols-outlined">delete</span></td>
                            </tr>
                            <tr className='table_list_border'>
                                <td className='list_name_type '>Aman.jpg</td>
                                <td><div className='list_type_btn'>
                                    <button className='list_type_single'>Single opt-in</button>
                                </div></td>
                                <td>Mon, 27 Sep 2021</td>
                                <td><span style={{fontSize:'18px'}} class="material-symbols-outlined">delete</span></td>
                            </tr>
                            <tr className='table_list_border'>
                                <td className='list_name_type '>Aman.jpg</td>
                                <td><div className='list_type_btn'>
                                    <button className='list_type_single'>Single opt-in</button>
                                </div></td>
                                <td>Mon, 27 Sep 2021</td>
                                <td><span style={{fontSize:'18px'}} class="material-symbols-outlined">delete</span></td>
                            </tr>
                          
                

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
