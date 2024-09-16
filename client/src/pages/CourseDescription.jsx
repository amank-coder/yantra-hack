import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PaymentModal from '../components/PaymentModal'; 
import Layout from '../components/layout/Layout';
import { useTranslation } from 'react-i18next';
import { UserData } from '../context/UserContext';

const CourseDescription = () => {
  const [course, setCourse] = useState(null); 
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [result, setResult] = useState("");

  const { user } = UserData();
  console.log(user)

  const params = useParams();
  const { t, i18n } = useTranslation();
  const lang = localStorage.getItem('lang')

    useEffect(()=>{
      i18n.changeLanguage(lang);
    },[lang])
  async function fetchCourse(id) {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/course/${id}`);
      setCourse(data.course);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCourse(params.id);
  }, [params.id]);

  const handleOpenModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  if (!course) {
    return <div className="text-center text-xl">Loading...</div>; // Loading state while fetching the data
  }
  const handleSubmit = async()=>{
    console.log(query);
    const { data } = await axios.post('https://3f5d-34-83-62-0.ngrok-free.app/worth',{query,target:lang});
    setResult(data.answer);
  }
  return (
    <Layout>
        <div>
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">{course.title}</h1>
      <div className="flex flex-col md:flex-row items-start gap-8">
        <img className="w-full md:w-1/3 rounded-lg shadow-md" src={course.image} alt={course.title} />
        <div className="w-full md:w-2/3">
          <p className="mb-4 text-gray-700"><strong className="font-semibold">Description:</strong> {course.description}</p>
          <p className="mb-4 text-gray-700"><strong className="font-semibold">Price:</strong> ${course.price}</p>
          <p className="mb-4 text-gray-700"><strong className="font-semibold">Duration:</strong> {course.duration} hours</p>
          <p className="mb-4 text-gray-700"><strong className="font-semibold">Category:</strong> {course.category}</p>
          <p className="mb-4 text-gray-700"><strong className="font-semibold">Created By:</strong> {course.createdBy}</p>
          <p className="mb-4 text-gray-700"><strong className="font-semibold">Created At:</strong> {new Date(course.createdAt).toLocaleDateString()}</p>
          
          {/* Buy Now Button */}
          {/* {user && user?.subscription.includes(course?._id)?(<button 
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4"
          >
            Study
          </button>):(
            <button 
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4"
            onClick={handleOpenModal}
          >
            Buy Now
          </button>
          )} */}
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4"
            onClick={handleOpenModal}
          >
            Buy Now
          </button>
        </div>
      </div>
      <div className="px-4 py-3 flex items-center justify-between mt-6 mr-4 -ml-4">
            <input type="text" placeholder={t('typeYourQuery')} className="flex-1 bg-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md shadow-purple-300" onChange={(e)=>setQuery(e.target.value)}/>
            <button className="ml-2 bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={handleSubmit}>{t('send')}</button>
        </div>

        <div>
            <h2 className="font-semibold mt-4">{t('answer')}</h2>
            <p className='pb-6'>{result && result }</p>
        </div>

      {/* Payment Modal */}
      {isModalOpen && (
        <PaymentModal course={course} isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </div>
    </div>
    </Layout>
  );
};

export default CourseDescription;
