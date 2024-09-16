import React from 'react';

const AboutUsPage = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">About VidyaMandir</h1>
                    <p className="mt-4 text-gray-600">
                        At VidyaMandir, we are dedicated to providing world-class education and training to students across various fields. Our mission is to empower learners with the knowledge and skills they need to succeed in a rapidly evolving world.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Mission Section */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-blue-600">Our Mission</h2>
                        <p className="mt-4 text-gray-700">
                            Our mission at VidyaMandir is to provide affordable and accessible education that bridges the gap between theoretical knowledge and practical skills. We aim to cultivate a love for learning, critical thinking, and innovation in every student.
                        </p>
                    </div>

                    {/* Vision Section */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-blue-600">Our Vision</h2>
                        <p className="mt-4 text-gray-700">
                            We envision a world where quality education is within reach for everyone, regardless of their background or financial situation. VidyaMandir is committed to transforming the educational landscape by leveraging technology and fostering a community of lifelong learners.
                        </p>
                    </div>
                </div>

                {/* Core Values */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Integrity */}
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-xl font-semibold text-blue-600">Integrity</h3>
                            <p className="mt-4 text-gray-700">
                                We uphold the highest standards of integrity and transparency in all that we do, ensuring trust in our institution and our educational offerings.
                            </p>
                        </div>
                        {/* Excellence */}
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-xl font-semibold text-blue-600">Excellence</h3>
                            <p className="mt-4 text-gray-700">
                                We strive for excellence in teaching, learning, and all of our endeavors, constantly pushing boundaries to ensure the best outcomes for our students.
                            </p>
                        </div>
                        {/* Innovation */}
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-xl font-semibold text-blue-600">Innovation</h3>
                            <p className="mt-4 text-gray-700">
                                Innovation is at the heart of VidyaMandir. We believe in evolving with the times and incorporating the latest technological advancements to enhance learning experiences.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="text-center">
                            <img 
                                src="https://via.placeholder.com/150" 
                                alt="Team Member" 
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">Aman Gupta</h3>
                            <p className="text-gray-600">Founder & CEO</p>
                        </div>

                        {/* Team Member 2 */}
                        <div className="text-center">
                            <img 
                                src="https://via.placeholder.com/150" 
                                alt="Team Member" 
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">Priya Singh</h3>
                            <p className="text-gray-600">Chief Operating Officer</p>
                        </div>

                        {/* Team Member 3 */}
                        <div className="text-center">
                            <img 
                                src="https://via.placeholder.com/150" 
                                alt="Team Member" 
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">Rahul Verma</h3>
                            <p className="text-gray-600">Head of Education</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
