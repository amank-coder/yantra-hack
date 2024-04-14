import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout.jsx';
import { useTranslation } from 'react-i18next';


const Dashboard = () => {
  
  const { t, i18n } = useTranslation();
  
  const user = JSON.parse(localStorage.getItem('user'));
  const lang = localStorage.getItem('lang')
  
    

    useEffect(()=>{
      i18n.changeLanguage(lang);
    },[lang])
  
  return (
    <Layout>
        <div>
            <h2 className="mt-6 text-2xl font-bold bg-gradient-to-r from-[#f600fe] via-[#a136ff] to-[#0033d9] bg-clip-text text-transparent ml-8">{t('welcomeBack')} {user?.name.toUpperCase()} ! {t('whatToLearn')}</h2>
            <div>
              <form className='mt-8 flex justify-center items-center gap-16 bg-purple-50 rounded-md mx-8 py-8'>
                <div className='flex flex-col gap-8'>
                  <div className='flex flex-col'>
                    <label htmlFor="name" className='text-start text-sm text-gray-700'>{t('name')}</label>
                    <input name="name" type='text' className=" px-3 py-2 border rounded-lg bg-gray-100 focus:border-blue-500 focus:outline-none w-72" value={user?.name}/>
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="name" className='text-start text-sm text-gray-700'>{t('email')}</label>
                    <input name="name" type='text' className=" px-3 py-2 border rounded-lg bg-gray-100 focus:border-blue-500 focus:outline-none w-72" value={user?.email} />
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="name" className='text-start text-sm text-gray-700'>{t('qualification')}</label>
                    <input name="name" type='text' className=" px-3 py-2 border rounded-lg bg-gray-100 focus:border-blue-500 focus:outline-none w-72" value="B.Tech" />
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="name" className='text-start text-sm text-gray-700'>{t('preferredLanguage')}</label>
                    <select name="name" type='text' className=" px-3 py-2 border rounded-lg bg-gray-100 focus:border-blue-500 focus:outline-none w-72" onChange={(e)=>{
                      localStorage.setItem('lang',e.target.value)
                      window.location.reload()}} value={localStorage.getItem('lang')}>
                      <option value="hi">Hindi</option>
                      <option value="bn">Bengali</option>
                      <option value="te">Telugu</option>
                      <option value="mr">Marathi</option>
                      <option value="ta">Tamil</option>
                      <option value="ur">Urdu</option>
                      <option value="gu">Gujarati</option>
                      <option value="kn">Kannada</option>
                      <option value="ml">Malyalam</option>
                      <option value="en">English</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="ru">Russian</option>
                      <option value="es">Spanish</option>
                    </select>
                  </div>
                </div>
                <div>
                  <img src='https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU=' className='w-36 rounded-full'/>
                </div>
                
                
              </form>
            </div>

        </div>
    </Layout>
  )
}

export default Dashboard