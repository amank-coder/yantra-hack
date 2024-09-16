import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Mic } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Layout from "../components/layout/Layout";

const CourseStudy = ({ user }) => {
  const { t, i18n } = useTranslation();
  const [doubt, setDoubt] = useState("");
  const [answer, setAnswer] = useState("");  
  const navigate = useNavigate();
    const params = useParams();
    const [lectures, setLectures] = useState([]);
    const [loading, setLoading] = useState(false)
    const [selectedLecture, setSelectedLecture] = useState(null); // Initially null until fetched
    const courseId = params.id;
    const token = localStorage.getItem("token");
    const handleSubmit = async () => {
      try {
        setLoading(true)
        const response = await axios.post('http://127.0.0.1:5000/answer_doubt', { doubt, target: lang });
        const data = response.data;
        setLoading(false)
        setAnswer(data.answer);
      } catch (error) {
        console.error("Error occurred while submitting doubt:", error);
      }
    };
    useEffect(() => {
        // Check user access
        if (user && user.role !== "admin" && user.subscription?.includes(params.id)) {
            navigate("/");
        }
    }, [user, params.id, navigate]);

    useEffect(() => {
        // Fetch lectures using the token from localStorage
        const fetchLectures = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/lectures/${courseId}`, {
                    headers: {
                        token: `${token}`, // Add the token in the headers
                    },
                });
                const fetchedLectures = response.data.lectures;
                setLectures(fetchedLectures);
                setSelectedLecture(fetchedLectures[0]); // Set the first lecture as default
            } catch (error) {
                console.error("Error fetching lectures:", error);
            }
        };

        if (token) {
            fetchLectures();
        }
    }, [courseId, token]);

    if (!selectedLecture) {
        return <div>Loading...</div>;
    }

    return (
      <Layout>
        <div className="flex h-screen">
            {/* Left side - Video section */}
            <div className="flex-1 bg-gray-100 p-4">
                <h1 className="text-2xl font-bold mb-4">Course Lectures</h1>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">{selectedLecture.title}</h2>
                    <p className="text-gray-600 mb-2">{selectedLecture.description}</p>
                </div>
                <div className="w-full h-96 bg-black">
                    <video
                        src={selectedLecture.video}
                        controls
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Right side - Lecture list */}
            <div className="w-1/3 bg-white border-l border-gray-200 overflow-y-auto">
                <h2 className="text-xl font-semibold p-4 border-b border-gray-200">
                    Other Lectures
                </h2>
                <ul>
                    {lectures.map((lecture) => (
                        <li
                            key={lecture._id}
                            onClick={() => setSelectedLecture(lecture)}
                            className={`cursor-pointer p-4 border-b border-gray-200 hover:bg-gray-100 ${
                                selectedLecture._id === lecture._id ? "bg-gray-200" : ""
                            }`}
                        >
                            <h3 className="text-lg font-semibold">{lecture.title}</h3>
                            <p className="text-gray-600 text-sm">{lecture.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
               <div className='mt-8'>
               <h2 className='text-2xl mb-2'>{t('anyDoubts')}</h2>
               <div className='mb-4 flex items-center w-[700px]'>
                 <input
                   type="text"
                   placeholder="Ask your doubt ..."
                   className="flex-1 px-3 py-2 border rounded-lg bg-gray-200 focus:border-blue-500 focus:outline-none"
                   value={doubt}
                   onChange={(e) => setDoubt(e.target.value)}
                 />
                 <label className='ml-2 text-purple-500 cursor-pointer'><Mic /></label>
               </div>
               <button className='p-2 bg-purple-400 px-4 mt-2 text-white' onClick={handleSubmit}>{t('submit')}</button>
               {loading && <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="6" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle></svg>}
     
               <p className="font-bold mt-4">{t('answer')}</p>
               {answer && 
                 <p className='pb-6'>{answer}</p>
               }
             </div>
             </Layout>
    );
};

export default CourseStudy;
