import React, { useState } from 'react';
import PaymentModal from './PaymentModal';
import { UserData } from "../context/UserContext";
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const { user, isAuth } = UserData();
    const navigate = useNavigate()
    const handleBuyClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const deleteHandler = async (id) => {
        if (confirm("Are you sure you want to delete this course")) {
          try {
            const { data } = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/course/${id}`, {
              headers: {
                token: localStorage.getItem("token"),
              },
            });
    
            toast.success(data.message);
            fetchCourses();
          } catch (error) {
            toast.error(error.response.data.message);
          }
        }
      };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border-2 border-blue mb-8">
            <img className="w-full" src={course.image} alt={course.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{course.title}</div>
                <p className="text-gray-700 text-base line-clamp-1">{course.description}</p>
                <div className="mt-2 text-sm text-gray-600">Duration: {course.duration} weeks</div>
                <div className="mt-2 text-sm text-gray-600">Price: ${course.price}</div>
            </div>
            <div className="px-6 py-4">
            {isAuth ? (
        <>
          {user && user.role !== "admin" ? (
            <>
              {user.subscription.includes(course._id) ? (
                <button
                  onClick={() => navigate(`/course/study/${course._id}`)}
                  className="common-btn"
                >
                  Study
                </button>
              ) : (
                <button
                  onClick={() => navigate(`/course/${course._id}`)}
                  className="common-btn"
                >
                  Get Started
                </button>
              )}
            </>
          ) : (
            <button
              onClick={() => navigate(`/course/study/${course._id}`)}
              className="common-btn"
            >
              Study
            </button>
          )}
        </>
      ) : (
        <button onClick={() => navigate("/login")} className="common-btn">
          Get Started
        </button>
      )}
      <br />
      {user && user.role === "admin" && (
        <button
          onClick={() => deleteHandler(course._id)}
          className="common-btn"
          style={{ background: "red" }}
        >
          Delete
        </button>
      )}
            </div>

            <PaymentModal course={course} isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default CourseCard;
