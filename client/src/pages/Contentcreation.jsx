import React, { useState, useRef } from 'react';

const Contentcreation = () => {
  const [videoStream, setVideoStream] = useState(null);
  const videoRef = useRef(null);

  const handleRecordVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setVideoStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      console.log('Camera is open');
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const handleCloseCamera = () => {
    if (videoStream) {
      videoStream.getTracks().forEach(track => track.stop());
      setVideoStream(null);
    }
  };

  return (
    <div>
      <div className='flex gap-16 mx-56 mt-16'>
        <div
          className='w-72 bg-purple-300 rounded-xl cursor-pointer relative hover:opacity-80'
          style={{
            border: '4px solid',
            borderImage: 'linear-gradient(to right, #f600fe, #a136ff, #0033d9)',
            borderImageSlice: 1,
          }}
          onClick={handleRecordVideo}
        >
          <img src='/camera.png' alt='Camera Icon' width='200px' className='mx-auto' />
          <p className='text-center text-2xl'>Record Video</p>
        </div>
        <div className='w-72 bg-purple-300 rounded-xl hover:opacity-80 cursor-pointer' style={{ border: '4px solid', borderImage: 'linear-gradient(to right, #f600fe, #a136ff, #0033d9)', borderImageSlice: 1 }}>
          <img src='/animated.png' alt='Animated Video Icon' width='400px' className='mx-auto' />
          <a href='/create-graphics'><p className='text-center text-2xl mt-6'>Create Graphics</p></a>
        </div>
      </div>
      <div className='mx-72'>
        <video ref={videoRef} width='500px' autoPlay playsInline muted style={{ display: videoStream ? 'block' : 'none' }} />
        {videoStream && (
          <button onClick={handleCloseCamera} className="absolute top-72 right-96 bg-blue-500 text-white rounded-full p-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </div>
     
    </div>
  );
};

export default Contentcreation;
