import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidenav from './Sidenav';




const CampaignTable = () => {
  const [campaigns, setCampaigns] = useState([]);

  let data = [
    {
      "campaign_type": "Test Compaigns",
      "campaign_name": "Welcome to listmonk",
      "list": "Default list",
      "create": "Mon, 27 Sep 2021",
      "s_views": "2323",
      "s_click": "1111",
      "s_sent": "2222",
      "s_bounces": "3333",
    },
    {
      "campaign_type": "Test Compaigns",
      "campaign_name": "Welcome to listmonk",
      "list": "Default list",
      "create": "Mon, 27 Sep 2021",
      "s_views": "2323",
      "s_click": "1111",
      "s_sent": "2222",
      "s_bounces": "3333",
    },
    {
      "campaign_type": "Test Compaigns",
      "campaign_name": "Welcome to listmonk",
      "list": "Default list",
      "create": "Mon, 27 Sep 2021",
      "s_views": "2323",
      "s_click": "1111",
      "s_sent": "2222",
      "s_bounces": "3333",
    },
    {
      "campaign_type": "Test Compaigns",
      "campaign_name": "Welcome to listmonk",
      "list": "Default list",
      "create": "Mon, 27 Sep 2021",
      "s_views": "2323",
      "s_click": "1111",
      "s_sent": "2222",
      "s_bounces": "3333",
    },
    {
      "campaign_type": "Test Compaigns",
      "campaign_name": "Welcome to listmonk",
      "list": "Default list",
      "create": "Mon, 27 Sep 2021",
      "s_views": "2323",
      "s_click": "1111",
      "s_sent": "2222",
      "s_bounces": "3333",
    },
    {
      "campaign_type": "Test Compaigns",
      "campaign_name": "Welcome to listmonk",
      "list": "Default list",
      "create": "Mon, 27 Sep 2021",
      "s_views": "2323",
      "s_click": "1111",
      "s_sent": "2222",
      "s_bounces": "3333",
    },
    {
      "campaign_type": "Test Compaigns",
      "campaign_name": "Welcome to listmonk",
      "list": "Default list",
      "create": "Mon, 27 Sep 2021",
      "s_views": "2323",
      "s_click": "1111",
      "s_sent": "2222",
      "s_bounces": "3333",
    },
    {
      "campaign_type": "Test Compaigns",
      "campaign_name": "Welcome to listmonk",
      "list": "Default list",
      "create": "Mon, 27 Sep 2021",
      "s_views": "2323",
      "s_click": "1111",
      "s_sent": "2222",
      "s_bounces": "3333",
    },
    {
      "campaign_type": "Test Compaigns",
      "campaign_name": "Welcome to listmonk",
      "list": "Default list",
      "create": "Mon, 27 Sep 2021",
      "s_views": "2323",
      "s_click": "1111",
      "s_sent": "2222",
      "s_bounces": "3333",
    },
  ]

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

              {data.map((element, myid) => {
                return <tr className='table_list_border'>
                  <td className='list_name_type '><button className='list_type_single'>Draft</button></td>
                  <td>
                    <span style={{ color: 'blue' }}>{element.campaign_type}</span>
                    <p>{element.campaign_name}</p>
                  </td>
                  <td className='list_name_type' style={{ color: 'blue' }}>{element.list}</td>
                  <td><div>
                    <b>Created</b>
                    <p>{element.create}</p>
                  </div></td>
                  <td>
                    <div>
                      <div className='comp_list_det'>
                        <p>Views</p>
                        <span>{element.s_views}</span>
                      </div>
                      <div className='comp_list_det'>
                        <p>Clicks</p>
                        <span>{element.s_click}</span>
                      </div>
                      <div className='comp_list_det'>
                        <p>Sent</p>
                        <span>{element.s_sent}</span>
                      </div>
                      <div className='comp_list_det'>
                        <p>bounces</p>
                        <span>{element.s_bounces}</span>
                      </div>
                    </div>
                  </td>
                  <td><div className='list_actions'>
                    <div>

                      <span style={{ fontSize: '18px' }} class="material-symbols-outlined">rocket_launch</span>
                      <span style={{ fontSize: '18px' }} class="material-symbols-outlined">edit</span>
                      <span style={{ fontSize: '18px' }} class="material-symbols-outlined">save</span>
                    </div>
                    <div>

                      <span style={{ fontSize: '18px' }} class="material-symbols-outlined">delete</span>
                      <span style={{ fontSize: '18px' }} class="material-symbols-outlined">delete</span>
                      <span style={{ fontSize: '18px' }} class="material-symbols-outlined">delete</span>
                    </div>
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
  );
};
export default CampaignTable;