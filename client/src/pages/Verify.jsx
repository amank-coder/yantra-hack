import React, { useState } from 'react';
import axios from 'axios';

const VerifyOtpPage = () => {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);

    const handleVerifyOtp = async () => {
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/api/v1/verify', {
                otp: otp,
                activationToken: localStorage.getItem('activationToken')
            });

            alert('OTP Verified Successfully!');
            setLoading(false);
        } catch (error) {
            console.error('Error verifying OTP:', error);
            alert('Invalid OTP. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-4">Verify OTP</h1>
                <p className="text-gray-700 mb-4">
                    Enter the OTP sent to your registered email or phone number.
                </p>
                <div className="mb-4">
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                        className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={handleVerifyOtp}
                    disabled={loading || otp.length === 0}
                >
                    {loading ? 'Verifying...' : 'Verify'}
                </button>
            </div>
        </div>
    );
};

export default VerifyOtpPage;
