import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseCard from '../components/CourseCard';

const MyCoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const fetchMyCourses = async () => {
            try {
                const token = localStorage.getItem('token');
                
                if (!token) {
                    alert('Token not found, please log in first.');
                    return;
                }

                const response = await axios.get('http://localhost:5000/api/v1/mycourse', {
                    headers: {
                        token: `${token}`,
                    },
                });

                setCourses(response.data.courses);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching courses:', error);
                alert('Failed to fetch courses. Please try again.');
            }
        };

        fetchMyCourses();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">My Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.length > 0 ? (
                    courses.map((course) => (
                        <CourseCard key={course._id} course={course} />
                    ))
                ) : (
                    <p>You have not enrolled in any courses yet.</p>
                )}
            </div>
        </div>
    );
};

export default MyCoursesPage;
