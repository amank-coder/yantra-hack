import React, { useState, useRef, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Mic } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Aitutor = () => {
  const { t, i18n } = useTranslation();
  
  const [doubt, setDoubt] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const lang = localStorage.getItem('lang');
  const audioRef = useRef(null);
  const videoRef = useRef(null);

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
    setIsMuted(lang === 'hi');
  }, [lang]);

  const handleVideoPlay = () => {
    if (isMuted && audioRef.current.paused) {
      audioRef.current.play();
    }
  };

  const handleVideoPause = () => {
    if (isMuted && !audioRef.current.paused) {
      audioRef.current.pause();
    }
  };

  const handleAudioPlay = () => {
    if (isMuted && videoRef.current.paused) {
      videoRef.current.play();
    }
  };

  return (
    <Layout>
      <div className='mt-8 flex flex-col'>
        <div className='flex gap-8'>
          {isMuted ? (
            <video ref={videoRef} width="640" height="480" controls muted onPlay={handleVideoPlay} onPause={handleVideoPause}>
              <source src="KfnhNlD8WZI.mp4" type="video/mp4" />
              <source src="KfnhNlD8WZI.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <video ref={videoRef} width="640" height="480" controls onPlay={handleVideoPlay} onPause={handleVideoPause}>
              <source src="KfnhNlD8WZI.mp4" type="video/mp4" />
              <source src="KfnhNlD8WZI.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          )}

          {isMuted && (
            <div className='hidden'>
              <audio ref={audioRef} width="640" height="480" controls autoPlay onPlay={handleAudioPlay}>
                <source src="hindi.mp3" type="audio/mp3" />
                <source src="hindi.ogg" type="audio/ogg" />
                Your browser does not support the audio tag.
              </audio>
            </div>
          )}

          <div>
            {/* Your other content */}
          </div>

          <div className='flex flex-col gap-2 mx-2'>
            <div className='flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-2 rounded-md' onClick={() => setV('one')}>
              <span>1</span>
              <img src='/thumb1.jpg' className='w-32' />
            </div>
            <div className='flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-2 rounded-md'>
              <span>2</span>
              <img src='/thumb2.jpg' className='w-32' />
            </div>
            <div className='flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-2 rounded-md'>
              <span>3</span>
              <img src='/thumb3.jpg' className='w-32' />
            </div>
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
      </div>
    </Layout>
  );
}

export default Aitutor;
