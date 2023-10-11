import React from 'react'
import Header from './Header';
import Sidenav from './Sidenav';

export default function Import() {
    return (
        <>

            <Header />

            <section className='side_menu'>


                <Sidenav />

                <div className='dashboard_side'>
                    <div>
                        <h2><b>Import subscribers</b></h2>
                    </div>

                    <section className='import_container'>

                        <div style={{ display: 'flex',justifyContent:'space-between' }}>
                            <div>
                                <div>      <b>Mode</b>      </div>
                                <div>
                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                    <label for="html">Subscribers</label><br></br>
                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                    <label for="html">BlockList</label><br></br>
                                </div>
                            </div>
                            <div>
                                <div> <b>Mode</b>      </div>
                                <div>
                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                    <label for="html">Subscribers</label><br></br>
                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                    <label for="html">BlockList</label><br></br>
                                </div>

                            </div>
                            <div>
                                <b>Overwrite?</b>
                                <div>
                                    <label class="switch">
                                        <input type="radio" checked />
                                        <span class="slider round"></span>
                                    </label>
                                    <p style={{fontSize:'10px', width:'200px'}}>Overwrite name, attribs, subscription status of existing subscribers?</p>
                                </div>

                            </div>
                            <div>
                                <b>CSV delimiter</b>
                                <input type="text" />
                                <p>Default delimiter is comma.</p>
                            </div>
                        </div>


                        <div>
                            <div className='inport_input_list'>
                                <label for="html">Lists (0)</label>
                                <input type="text" />
                                <p>Lists to subscribe to.</p>
                            </div>
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


                    </section>

                    <div>
                        <div>
                            <br />
                            <b>Instructions</b>
                            <p>Upload a CSV file or a ZIP file with a single CSV file in it to bulk import subscribers. The CSV file should have the following headers with the exact column names. attributes (optional) should be a valid JSON string with double escaped quotes.</p>
                            <span>email,name,attributes</span>
                        </div>
                        <br />
                        <div>
                            <b>Example raw CSV</b>


                        </div>
                    </div>








                </div>
            </section>

        </>
    )
}
