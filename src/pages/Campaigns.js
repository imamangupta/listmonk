import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidenav from './Sidenav';




const CampaignTable = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // Make a request to the API
    fetch('http://localhost:8080/api/campaigns?page=1&query=&order_by=created_at&order=desc')
      .then(response => response.json())
      .then(data => setCampaigns(data.data.results))
      .catch(error => console.error('Error:', error));
  }, []);





  return (
    <>

      <Header />

      <section className='side_menu'>


        <Sidenav />

        <div className='dashboard_side'>



          <div className='list_lable'>
            <b><h2>Campaigns (2)</h2></b>
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
                <th className='table_list_th'>Status</th>
                <th className='table_list_th'>Name</th>
                <th className='table_list_th'>Lists</th>
                <th className='table_list_th'>Timestamps</th>
                <th className='table_list_th'>Stats</th>
                <th className='table_list_th'>Actions</th>
              </tr>


              <tr className='table_list_border'>
                <td className='list_name_type '><button className='list_type_single'>Draft</button></td>
                <td>
                  <span style={{color:'blue'}}>Test Compaigns</span>
                  <p>Welcome to listmonk</p>
                </td>
                <td  className='list_name_type' style={{color:'blue'}}>Default list</td>
                <td><div>
                  <b>Created</b>
                  <p>Mon, 27 Sep 2021, 21:25</p>
                </div></td>
                <td>
                  <div>
                    <div className='comp_list_det'>
                      <p>Views</p>
                      <span>2,222</span>
                    </div>
                    <div className='comp_list_det'>
                      <p>Clicks</p>
                      <span>2,222</span>
                    </div>
                    <div className='comp_list_det'>
                      <p>Sent</p>
                      <span>2,222</span>
                    </div>
                    <div className='comp_list_det'>
                      <p>bounces</p>
                      <span>2,222</span>
                    </div>
                  </div>
                </td>
                <td><div className='list_actions'>
                  <div>

                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">rocket_launch</span>
                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">edit</span>
                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">save</span>
                  </div>
                  <div>

                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">delete</span>
                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">delete</span>
                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">delete</span>
                  </div>
                </div></td>
              </tr>
              <tr className='table_list_border'>
                <td className='list_name_type '><button className='list_type_single'>Draft</button></td>
                <td>
                  <span style={{color:'blue'}}>Test Compaigns</span>
                  <p>Welcome to listmonk</p>
                </td>
                <td  className='list_name_type' style={{color:'blue'}}>Default list</td>
                <td><div>
                  <b>Created</b>
                  <p>Mon, 27 Sep 2021, 21:25</p>
                </div></td>
                <td>
                  <div>
                    <div className='comp_list_det'>
                      <p>Views</p>
                      <span>2,222</span>
                    </div>
                    <div className='comp_list_det'>
                      <p>Clicks</p>
                      <span>2,222</span>
                    </div>
                    <div className='comp_list_det'>
                      <p>Sent</p>
                      <span>2,222</span>
                    </div>
                    <div className='comp_list_det'>
                      <p>bounces</p>
                      <span>2,222</span>
                    </div>
                  </div>
                </td>
                <td><div className='list_actions'>
                  <div>

                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">rocket_launch</span>
                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">edit</span>
                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">save</span>
                  </div>
                  <div>

                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">delete</span>
                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">delete</span>
                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">delete</span>
                  </div>
                </div></td>
              </tr>
              <tr className='table_list_border'>
                <td className='list_name_type '><button className='list_type_single'>Draft</button></td>
                <td>
                  <span style={{color:'blue'}}>Test Compaigns</span>
                  <p>Welcome to listmonk</p>
                </td>
                <td  className='list_name_type' style={{color:'blue'}}>Default list</td>
                <td><div>
                  <b>Created</b>
                  <p>Mon, 27 Sep 2021, 21:25</p>
                </div></td>
                <td>
                  <div>
                    <div className='comp_list_det'>
                      <p>Views</p>
                      <span>2,222</span>
                    </div>
                    <div className='comp_list_det'>
                      <p>Clicks</p>
                      <span>2,222</span>
                    </div>
                    <div className='comp_list_det'>
                      <p>Sent</p>
                      <span>2,222</span>
                    </div>
                    <div className='comp_list_det'>
                      <p>bounces</p>
                      <span>2,222</span>
                    </div>
                  </div>
                </td>
                <td><div className='list_actions'>
                  <div>

                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">rocket_launch</span>
                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">edit</span>
                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">save</span>
                  </div>
                  <div>

                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">delete</span>
                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">delete</span>
                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">delete</span>
                  </div>
                </div></td>
              </tr>


              <tr className='table_list_border'>
                <td className='list_name_type '><button className='list_type_single'>Draft</button></td>
                <td>
                  <span style={{color:'blue'}}>Test Compaigns</span>
                  <p>Welcome to listmonk</p>
                </td>
                <td  className='list_name_type' style={{color:'blue'}}>Default list</td>
                <td><div>
                  <b>Created</b>
                  <p>Mon, 27 Sep 2021, 21:25</p>
                </div></td>
                <td>
                  <div>
                    <div className='comp_list_det'>
                      <p>Views</p>
                      <span>2,222</span>
                    </div>
                    <div className='comp_list_det'>
                      <p>Clicks</p>
                      <span>2,222</span>
                    </div>
                    <div className='comp_list_det'>
                      <p>Sent</p>
                      <span>2,222</span>
                    </div>
                    <div className='comp_list_det'>
                      <p>bounces</p>
                      <span>2,222</span>
                    </div>
                  </div>
                </td>
                <td><div className='list_actions'>
                  <div>

                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">rocket_launch</span>
                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">edit</span>
                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">save</span>
                  </div>
                  <div>

                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">delete</span>
                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">delete</span>
                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">delete</span>
                  </div>
                </div></td>
              </tr>

              
              <tr className='table_list_border'>
                <td className='list_name_type '><button className='list_type_single'>Draft</button></td>
                <td>
                  <span style={{color:'blue'}}>Test Compaigns</span>
                  <p>Welcome to listmonk</p>
                </td>
                <td  className='list_name_type' style={{color:'blue'}}>Default list</td>
                <td><div>
                  <b>Created</b>
                  <p>Mon, 27 Sep 2021, 21:25</p>
                </div></td>
                <td>
                  <div>
                    <div className='comp_list_det'>
                      <p>Views</p>
                      <span>2,222</span>
                    </div>
                    <div className='comp_list_det'>
                      <p>Clicks</p>
                      <span>2,222</span>
                    </div>
                    <div className='comp_list_det'>
                      <p>Sent</p>
                      <span>2,222</span>
                    </div>
                    <div className='comp_list_det'>
                      <p>bounces</p>
                      <span>2,222</span>
                    </div>
                  </div>
                </td>
                <td><div className='list_actions'>
                  <div>

                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">rocket_launch</span>
                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">edit</span>
                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">save</span>
                  </div>
                  <div>

                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">delete</span>
                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">delete</span>
                    <span style={{fontSize:'18px'}} class="material-symbols-outlined">delete</span>
                  </div>
                </div></td>
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
  );
};
export default CampaignTable;