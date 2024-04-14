import React from 'react'
import Sidebar, { SidebarItem } from '../Sidebar'
import { DollarSignIcon, LayoutDashboard, Sparkles, Brain, DollarSign, Book, NotebookPen } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const Layout = ({children}) => {

    const { t, i18n } = useTranslation();

    const location = useLocation();
    const path = location.pathname;
    console.log(path)

    const lang = localStorage.getItem('lang')

    useEffect(()=>{
      i18n.changeLanguage(lang);
    },[lang])
    
    return (
    <>
      
          <div className='flex'>
          <Sidebar>
              <SidebarItem text={t('dashboard')}  icon={<LayoutDashboard />} active={path=='/dashboard'} link='/dashboard'/>
              {/* <SidebarItem text="Price Estimator"  icon={<DollarSignIcon />} active={path=='/price-estimator'} link='/price-estimator' /> */}
              {/* <SidebarItem text="Pathway"  icon={<Sparkles />} active={path=='/pathway'} link='/pathway' /> */}
              <SidebarItem text={t('aboutCourse')}  icon={<Book />} active={path=='/course-worth'} link='/course-worth' />
              <SidebarItem text={t('testYourself')}  icon={<Sparkles />} active={path=='/test-yourself'} link='/test-yourself' />
              <SidebarItem text={t('aiTutor')}  icon={<Brain />} active={path=='/ai-tutor'} link='/ai-tutor' />
              <SidebarItem text={t('coursePlanner')}  icon={<NotebookPen />} active={path=='/course-planner'} link='/course-planner' />
          </Sidebar>
          <div className='w-full ml-20 md:ml-[20rem] overflow-x-auto'>{children}</div>
          </div>
        
    </>

  )
}

export default Layout