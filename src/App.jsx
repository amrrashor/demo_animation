import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './App.css'
  const data = [
    {
      id: 1,
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    },
    {
      id: 2,
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",

    },
    {
      id: 3,
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      id: 4,
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
    {
      id: 5,
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    },
    {
      id: 6,
      src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    },
  ]

function App() {
  const [activePreview, setActivePreview] = useState(1);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [zoomIn, setZoomIn] = useState(false);
  const [zoomOut, setZoomOut] = useState(false);
  const [glitch1, setGlitch1] = useState(false);
  const [glitch2, setGlitch2] = useState(false);
  const [leak1, setLeak1] = useState(false);
  const [leak2, setLeak2] = useState(false);


  const handleAnimation = (animationType) => {
  switch (animationType) {
    case 'fadeIn':
      setFadeIn(true);
      setFadeOut(false);
      setZoomIn(false);
      setZoomOut(false);
      setGlitch1(false);
      setGlitch2(false);
      setLeak1(false);
      setLeak2(false);
      break;
    case 'fadeOut':
      setFadeIn(false);
      setFadeOut(true);
      setZoomIn(false);
      setZoomOut(false);
      setGlitch1(false);
      setGlitch2(false);
      setLeak1(false);
      setLeak2(false);
      break;
    case 'zoomIn':
      setFadeIn(false);
      setFadeOut(false);
      setZoomIn(true);
      setZoomOut(false);
      setGlitch1(false);
      setGlitch2(false);
      setLeak1(false);
      setLeak2(false);
      break;
    case 'zoomOut':
      setFadeIn(false);
      setFadeOut(false);
      setZoomIn(false);
      setZoomOut(true);
      setGlitch1(false);
      setGlitch2(false);
      setLeak1(false);
      setLeak2(false);
      break;
    case 'glitch1':
      setFadeIn(false);
      setFadeOut(false);
      setZoomIn(false);
      setZoomOut(false);
      setGlitch1(true);
      setGlitch2(false);
      setLeak1(false);
      setLeak2(false);
      break;
    case 'glitch2':
      setFadeIn(false);
      setFadeOut(false);
      setZoomIn(false);
      setZoomOut(false);
      setGlitch1(false);
      setGlitch2(true);
      setLeak1(false);
      setLeak2(false);
      break;
    case 'leak1':
      setFadeIn(false);
      setFadeOut(false);
      setZoomIn(false);
      setZoomOut(false);
      setGlitch1(false);
      setGlitch2(false);
      setLeak1(true);
      setLeak2(false);
      break;
    case 'leak2':
      setFadeIn(false);
      setFadeOut(false);
      setZoomIn(false);
      setZoomOut(false);
      setGlitch1(false);
      setGlitch2(false);
      setLeak1(false);
      setLeak2(true);
      break;
    default:
      break;
  }
};


  const nextVideo = () => {
  if (activePreview < data.length) {
    setActivePreview(activePreview + 1);
  }
};

const prevVideo = () => {
    if (activePreview > 1) {
      setActivePreview(activePreview - 1);
    }
  };
  
  const initailVarinats = {
    fadeIn: { opacity: 0, scale:1 },
    fadeOut: {opacity:0, scale:1},
    zoomIn: { scale: 1.04, opacity: 1 },
    zoomOut: { scale: 0.98, opacity: 1 },
    leak1:{scale: 1.04, opacity:0.7},
  }

  const variants = {
    fadeIn: { opacity: 1 },
    fadeOut: {opacity:1, scale:0.95},
    zoomIn: { scale: 1.04, opacity: 1 },
    zoomOut: { scale: 0.9, opacity: 1 },
    leak1:{scale: 1.04, opacity:1},
  }

  const exitVariants = {
    fadeIn: { opacity: 0, scale:1.08},
    fadeOut: {opacity:0, scale:0.8},
    zoomIn: { scale: 1.04, opacity: 0 },
    zoomOut: { scale: 0.7, opacity: 0 },
    leak1: {scale: 1.04, opacity:0},
  }

  return (
    <>
      <div style={{display:'flex', overflow:'hidden'}}>
        <AnimatePresence>
          {data.map((item) => (
            activePreview === item.id ? (
              <motion.video
                key={item.id}
                initial={activePreview === 1 ? { opacity: 1 }
                  : fadeIn ? initailVarinats.fadeIn
                    : fadeOut ? initailVarinats.fadeOut
                      :  zoomIn ? initailVarinats.zoomIn
                        : zoomOut ? initailVarinats.zoomOut
                          : leak1 ? initailVarinats.leak1 
                            : null}
                transition={{ duration: 0.7, type:'keyframes'}}
                variants={variants}
                animate={
                  fadeIn ? 'fadeIn'
                  : fadeOut ? 'fadeOut'
                  : zoomIn ? 'zoomIn'
                  : zoomOut ? 'zoomOut'
                  : leak1 ? 'leak1'
                  : ''
                }
                src={item.src}
                controls
                exit={fadeIn ? exitVariants.fadeIn :
                  fadeOut ? exitVariants.fadeOut :
                    zoomIn ? exitVariants.zoomIn :
                      zoomOut ? exitVariants.zoomOut : 
                        leak1 ? exitVariants.leak1 : 
                          null
                }
              >
              </motion.video>
            ): (
              null
            )
          ))}
        </AnimatePresence>
      </div>

      <div style={{marginBottom:'15px'}}>
        <button onClick={() => handleAnimation("fadeIn")} style={{ margin: "5px" }}>Fade In</button>
        <button  onClick={() => handleAnimation("fadeOut")} style={{margin:"5px"}}>Fade Out</button>
        <button onClick={() => handleAnimation("zoomIn")} style={{ margin: "5px" }}>Zoom In</button>
        <button onClick={() => handleAnimation("zoomOut")} style={{ margin: "5px" }}>Zoom Out</button>
        <button onClick={() => handleAnimation("leak1")} style={{margin:"5px"}}>Leak 1</button>
      </div>

      <button style={{margin:"5px"}} onClick={prevVideo}>Previous Video</button>
      <button style={{margin:"5px"}} onClick={nextVideo}>Next Video</button>
      
    </>
  )
}

export default App
