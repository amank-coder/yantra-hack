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
        const { data } = await axios.get("https://3f5d-34-83-62-0.ngrok-free.app/test");

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
                What is the primary advantage of using joblib over pickle for saving machine learning models?
                </div>
            </div>
            <div className='flex mt-8 items-center'>
                <div><img src="/human.png" className='w-16'/> </div>
                <textarea className='bg-gray-100 rounded-xl w-full py-4 px-6 mx-4' value="A) It allows saving models in a text format.
B) It provides faster serialization for large NumPy arrays.
C) It is only compatible with scikit-learn models.
D) It requires manual file handling for saving and loading."/>
            </div>
            <div className='ml-12 mt-4'>B) It provides faster serialization for large NumPy arrays.</div>
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