import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Teacherdashboard = () => {
  const fileInputRef = useRef(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFileName, setUploadedFileName] = useState('');

  const handleUploadVideo = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const totalSize = file.size;
    let uploadedSize = 0;

    const uploadInterval = setInterval(() => {
      uploadedSize += 100000; 
      const progress = Math.min(uploadedSize / totalSize, 1); 
      setUploadProgress(progress);

      if (progress === 1) {
        clearInterval(uploadInterval);
        setUploadedFileName(file.name); 
      }
    }, 500); 
    
    console.log('Uploaded file:', file);
  };
  const navigate = useNavigate();
  
  return (
    <div>
    <div className='absolute top-2 right-4 cursor-pointer' onClick={()=>{    
    localStorage.clear();
    // window.location.reload();
    navigate('/');

    }}>Logout</div>
      <div className='flex mx-16 gap-8 justify-center items-center mt-16'>
        <div className='w-1/2 bg-gradient-to-r from-[#f600fe] via-[#a136ff] to-[#0033d9] h-72 rounded-xl cursor-pointer hover:from-[#0033d9] hover:to-[#a136ff]' onClick={handleUploadVideo}>
          <h2 className='flex justify-center my-24 text-3xl text-white font-bold'>Upload Video</h2>
          <div className='-mt-24 ml-64'>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          </div>
        </div>
        
        <div className='w-1/2 bg-gradient-to-r from-[#f600fe] via-[#a136ff] to-[#0033d9] h-72 rounded-xl cursor-pointer hover:from-[#0033d9] hover:to-[#a136ff]'>
          <a href='/create-content'><h2 className='flex justify-center items-center my-24 text-3xl text-white font-bold'>Create Content</h2></a>
        </div>
      </div>
      
      {/* Hidden file input for uploading video */}
      <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} accept="video/*" />

      {/* Upload progress bar */}
      {uploadProgress > 0 && uploadProgress < 1 && (
        <div className="w-96 mt-4 mx-16">
          <div className="bg-gray-200 h-4 rounded-md overflow-hidden">
            <div className="bg-purple-800 h-full" style={{ width: `${uploadProgress * 100}%` }}></div>
          </div><span>Uploading...</span>
          <p className="text-center mt-2">{uploadedFileName}</p> {/* Display the name of the uploaded file */}
        </div>
      )}
    </div>
  );
}

export default Teacherdashboard;
