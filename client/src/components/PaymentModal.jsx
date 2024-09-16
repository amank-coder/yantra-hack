import React from 'react';
import axios from 'axios';

const PaymentModal = ({ course, isOpen, onClose }) => {
    if (!isOpen) return null;

    const handlePayment = async () => {
        try {
            const token = localStorage.getItem('token');
            console.log(token)
            if (!token) {
                alert('Token not found, please log in first.');
                return;
            }
            const response = await axios.post(
                `http://localhost:5000/api/v1/payment/${course._id}`,
                {
                    headers: {
                        Authorization: `${token}`,
                    },
                }
            );
            console.log(response)
            alert("Payment Successful!");

            onClose();
        } catch (error) {
            console.error('Payment Error:', error);
            alert('Payment failed. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Purchase Course</h2>
                <p className="text-gray-700 mb-2">Course: {course.title}</p>
                <p className="text-gray-700 mb-4">Price: ${course.price}</p>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Payment Details</label>
                    <input
                        type="text"
                        placeholder="Card Number"
                        className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Card Expiry"
                        className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="CVC"
                        className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handlePayment}
                    >
                        Pay Now
                    </button>
                    <button
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
