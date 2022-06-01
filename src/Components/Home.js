import React from 'react'
import "./Home.css"
import Sidebar from './Sidebar';

function Home() {
  return <div className='home'>
              <div className='home-container'>
                   {/* SideBar */}
                   <Sidebar/>
                   {/* a container with whatsapp-logo */}
              </div>  
         </div>;
}

export default Home