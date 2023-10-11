import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidenav from './Sidenav';


const Templates = () => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/templates');
        const data = await response.json();
        setTemplates(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>

      <Header />

      <section className='side_menu'>


        <Sidenav />

        <div className='dashboard_side'>



          <div className='list_lable'>
            <b><h2>Templates (2)</h2></b>
            <div className='list_btn'>
              <button>
                <span style={{ fontSize: '16px' }} class="material-symbols-outlined">add</span>
                <span style={{ fontSize: '20px', padding: '4px' }}> New</span>
              </button>
            </div>
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
                <th className='table_list_th'>ID</th>
                <th className='table_list_th'>Created</th>
                <th className='table_list_th'>Update</th>
                <th className='table_list_th'>Actions</th>
              </tr>

              <tr>
                <td className='list_name_type '>Default template</td>
                <td><div className='list_type_btn'>
                  <button className='list_type_private'>Compaigns</button>
                </div></td>
                <td>1</td>
                <td>Mon, 27 Sep 2021</td>
                <td>Mon, 27 Sep 2021</td>
                <td><div className='list_actions'>
                  <span class="material-symbols-outlined">rocket_launch</span>
                  <span class="material-symbols-outlined">edit</span>
                  <span class="material-symbols-outlined">save</span>
                  <span class="material-symbols-outlined">delete</span>
                  <span class="material-symbols-outlined">delete</span>
                </div></td>
              </tr>
              <tr>
                <td className='list_name_type '>Default template</td>
                <td><div className='list_type_btn'>
                  <button className='list_type_private'>Compaigns</button>
                </div></td>
                <td>1</td>
                <td>Mon, 27 Sep 2021</td>
                <td>Mon, 27 Sep 2021</td>
                <td><div className='list_actions'>
                  <span class="material-symbols-outlined">rocket_launch</span>
                  <span class="material-symbols-outlined">edit</span>
                  <span class="material-symbols-outlined">save</span>
                  <span class="material-symbols-outlined">delete</span>
                  <span class="material-symbols-outlined">delete</span>
                </div></td>
              </tr>
              <tr>
                <td className='list_name_type '>Default template</td>
                <td><div className='list_type_btn'>
                  <button className='list_type_private'>Compaigns</button>
                </div></td>
                <td>1</td>
                <td>Mon, 27 Sep 2021</td>
                <td>Mon, 27 Sep 2021</td>
                <td><div className='list_actions'>
                  <span class="material-symbols-outlined">rocket_launch</span>
                  <span class="material-symbols-outlined">edit</span>
                  <span class="material-symbols-outlined">save</span>
                  <span class="material-symbols-outlined">delete</span>
                  <span class="material-symbols-outlined">delete</span>
                </div></td>
              </tr>
              <tr>
                <td className='list_name_type '>Default template</td>
                <td><div className='list_type_btn'>
                  <button className='list_type_private'>Compaigns</button>
                </div></td>
                <td>1</td>
                <td>Mon, 27 Sep 2021</td>
                <td>Mon, 27 Sep 2021</td>
                <td><div className='list_actions'>
                  <span class="material-symbols-outlined">rocket_launch</span>
                  <span class="material-symbols-outlined">edit</span>
                  <span class="material-symbols-outlined">save</span>
                  <span class="material-symbols-outlined">delete</span>
                  <span class="material-symbols-outlined">delete</span>
                </div></td>
              </tr>
              <tr>
                <td className='list_name_type '>Default template</td>
                <td><div className='list_type_btn'>
                  <button className='list_type_private'>Compaigns</button>
                </div></td>
                <td>1</td>
                <td>Mon, 27 Sep 2021</td>
                <td>Mon, 27 Sep 2021</td>
                <td><div className='list_actions'>
                  <span class="material-symbols-outlined">rocket_launch</span>
                  <span class="material-symbols-outlined">edit</span>
                  <span class="material-symbols-outlined">save</span>
                  <span class="material-symbols-outlined">delete</span>
                  <span class="material-symbols-outlined">delete</span>
                </div></td>
              </tr>
              <tr>
                <td className='list_name_type '>Default template</td>
                <td><div className='list_type_btn'>
                  <button className='list_type_private'>Compaigns</button>
                </div></td>
                <td>1</td>
                <td>Mon, 27 Sep 2021</td>
                <td>Mon, 27 Sep 2021</td>
                <td><div className='list_actions'>
                  <span class="material-symbols-outlined">rocket_launch</span>
                  <span class="material-symbols-outlined">edit</span>
                  <span class="material-symbols-outlined">save</span>
                  <span class="material-symbols-outlined">delete</span>
                  <span class="material-symbols-outlined">delete</span>
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

export default Templates;
