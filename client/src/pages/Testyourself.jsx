import axios from 'axios'
import Layout from '../components/layout/Layout'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';


const Testyourself = () => {
    
    const { t, i18n } = useTranslation();
  
  const lang = localStorage.getItem('lang')
  
    

    useEffect(()=>{
      i18n.changeLanguage(lang);
    },[lang])
  
    
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("");
    const [reply, setReply] = useState("")
    const getQuestion = async()=>{
        const { data } = await axios.get("http://127.0.0.1:5000/test");

        console.log(data)
        setQuestion(data)
    }

    useEffect(()=>{
        getQuestion();
    },[])

    const handleSubmit = async()=>{
        try {
            const response = await axios.post(`http://127.0.0.1:5000/testans`, {
              student_question: question,
              student_answer: answer
            });
            console.log("reply:",response);
            setReply(response?.data)
      
          } catch (error) {
            console.error('Error submitting answer:', error);
          }
    }

    return (
    <Layout>
        <div>
            <div className='flex mt-8 items-center'>
                <div><img src="/robot.png" className='w-16'/> </div>
                <div className='bg-gray-100 rounded-xl w-full py-4 px-6 mx-4'>
                    {question ? question :  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="6" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle></svg>}
                </div>
            </div>
            <div className='flex mt-8 items-center'>
                <div><img src="/human.png" className='w-16'/> </div>
                <input className='bg-gray-100 rounded-xl w-full py-4 px-6 mx-4' onChange={(e)=>setAnswer(e.target.value)}/>
            </div>
            <div className='ml-12 mt-4'>{reply}</div>
            <div className="mt-2">
                <button
                    className="bg-purple-500 p-2 px-6 ml-20 mt-4 rounded-md text-white" onClick={handleSubmit}
                >
                    {t('submit')}
                </button>
            </div>
            
        </div>
    </Layout>
  )
}

export default Testyourself