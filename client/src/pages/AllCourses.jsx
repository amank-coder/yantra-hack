import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseCard from '../components/CourseCard';

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/course/all');
                setCourses(response.data.courses);
            } catch (error) {
                console.error("Error fetching courses", error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center my-8">All Courses</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                    <CourseCard key={course._id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default AllCourses;
