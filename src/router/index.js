import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Campaigns from '../pages/Campaigns'; // Assuming this is the correct path
import Templates from '../pages/Templates'; // Assuming this is the correct path
import Home from '../pages/Home'; 
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';
import Forms from '../pages/Forms';
import Subscribers from '../pages/Subscribers';
import Import from '../pages/Import';
import Bounces from '../pages/Bounces';
import Createnew from '../pages/Createnew';
import Media from '../pages/Media';
import Analytics from '../pages/Analytics';
import Logs from '../pages/Logs';
import Setting from '../pages/Setting';
import Maintenance from '../pages/Maintenance';


const AppRouter = () => {
  return (
    <Router>
      <Routes>


        <Route path="/campaigns" element={<Campaigns/>} />
        <Route path="/templates" element={<Templates/>} />

        <Route path='/' element={<>
          <Home/>
        </>} />



        <Route path='/admin' element={<>
          <Dashboard/>
        </>} />

        <Route path='/admin/list' element={<>
          <List/>
        </>} />
        <Route path='/admin/forms' element={<>
          <Forms/>
        </>} />
        <Route path='/admin/subscribers' element={<>
          <Subscribers/>
        </>} />
        <Route path='/admin/import' element={<>
          <Import/>
        </>} />
        <Route path='/admin/bounces' element={<>
          <Bounces/>
        </>} />
        <Route path='/admin/logs' element={<>
          <Logs/>
        </>} />
        <Route path='/admin/settings' element={<>
          <Setting/>
        </>} />
        <Route path='/admin/maintenance' element={<>
          <Maintenance/>
        </>} />


        <Route path='/admin/email/compaigns' element={<>
          <Campaigns/>
        </>} />
        <Route path='/admin/email/new' element={<>
          <Createnew/>
        </>} />
        <Route path='/admin/email/media' element={<>
          <Media/>
        </>} />
        <Route path='/admin/email/templates' element={<>
          <Templates/>
        </>} />
        <Route path='/admin/email/analytics' element={<>
          <Analytics/>
        </>} />

        <Route path='/admin/whatsapp/compaigns' element={<>
          <Campaigns/>
        </>} />
        <Route path='/admin/whatsapp/new' element={<>
          <Createnew/>
        </>} />
        <Route path='/admin/whatsapp/media' element={<>
          <Media/>
        </>} />
        <Route path='/admin/whatsapp/templates' element={<>
          <Templates/>
        </>} />
        <Route path='/admin/whatsapp/analytics' element={<>
          <Analytics/>
        </>} />

        <Route path='/admin/sms/compaigns' element={<>
          <Campaigns/>
        </>} />
        <Route path='/admin/sms/new' element={<>
          <Createnew/>
        </>} />
        <Route path='/admin/sms/media' element={<>
          <Media/>
        </>} />
        <Route path='/admin/sms/templates' element={<>
          <Templates/>
        </>} />
        <Route path='/admin/sms/analytics' element={<>
          <Analytics/>
        </>} />

       

      </Routes>
    </Router>
  );
};

export default AppRouter;
