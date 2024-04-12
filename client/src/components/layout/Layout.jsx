import React from 'react'
import Sidebar, { SidebarItem } from '../Sidebar'
import { DollarSignIcon, LayoutDashboard, Sparkles, Brain, DollarSign, Book } from 'lucide-react';
import { useLocation } from 'react-router-dom';


const Layout = ({children}) => {
    const location = useLocation();
    const path = location.pathname;
    console.log(path)
    
    return (
    <>
      
          <div className='flex'>
          <Sidebar>
              <SidebarItem text="Dashboard"  icon={<LayoutDashboard />} active={path=='/dashboard'} link='/dashboard'/>
              {/* <SidebarItem text="Price Estimator"  icon={<DollarSignIcon />} active={path=='/price-estimator'} link='/price-estimator' /> */}
              {/* <SidebarItem text="Pathway"  icon={<Sparkles />} active={path=='/pathway'} link='/pathway' /> */}
              <SidebarItem text="About Course"  icon={<Book />} active={path=='/course-worth'} link='/course-worth' />
              <SidebarItem text="Course guider"  icon={<Sparkles />} active={path=='/course-guider'} link='/course-guider' />
              <SidebarItem text="AI Tutor"  icon={<Brain />} active={path=='/ai-tutor'} link='/ai-tutor' />
          </Sidebar>
          <div className='w-full ml-20 md:ml-[20rem] overflow-x-auto'>{children}</div>
          </div>
        
    </>

  )
}

export default Layout