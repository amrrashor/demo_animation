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
    fadeIn: { opacity: 0, scale:1},
    fadeOut: {opacity: 0, scale:1},
    zoomIn: { opacity: 0,scale: 1 },
    zoomOut: { opacity: 0,scale: 0.98},
    leak1: { opacity: 0, scale: 1 },
    leak2: { opacity: 0, scale: 1 },
    glitch1: { opacity: 0, scale: 1 },
    glitch2: { opacity: 0, scale: 1 },
    
  }

  const variants = {
    fadeIn: { opacity: 1, scale:0.9},
    fadeOut: {opacity:1, scale:0.95},
    zoomIn: {  opacity: 1, scale: 1 },
    zoomOut: { opacity: 1, scale: 0.9 },
    leak1: { opacity: 1, scale: 1 },
    leak2: { opacity: 1, scale: 1 },
    glitch1: { opacity: 1, scale: 1 },
    glitch2:{ opacity: 1,scale: 1},
  }

  const exitVariants = {
    fadeIn:{ opacity: 0, scale:1.08, filter:"blur(20px)"},
    fadeOut:{opacity:0, scale:0.8, filter:"blur(20px)"},
    zoomIn: {opacity: 0 ,scale: 1.8, filter:"blur(20px)"},
    zoomOut:{opacity: 0 ,scale: 0.7, filter:"blur(20px)"},
    leak1: { opacity: 0, filter: "blur(20px) sepia(100%) saturate(300%) hue-rotate(70deg) invert(10%)" },
    leak2: { opacity: 0, filter: "blur(20px) sepia(100%) saturate(300%) hue-rotate(320deg) invert(5%)" },
    glitch1: { opacity: [1, 0, 1, 0], filter: "blur(10px) invert(-40%)", x: [-6, 6, -6, 0], y: [6, -6, 6, 0] },
    glitch2: {opacity: [1, 0, 1, 0] , filter:"blur(10px) invert(100%)", x: [5, -5, 5, 0], y: [-10, 10, -10, 0]},
  }

  return (
    <>
      <div style={{display:'flex', overflow:'hidden'}}>
        <AnimatePresence>
          {data.map((item) => (
            activePreview === item.id ? (
              <motion.video
                key={item.id}
                initial={activePreview === 1 ? { opacity: 1}
                  : fadeIn ? initailVarinats.fadeIn
                  : fadeOut ? initailVarinats.fadeOut
                  :  zoomIn ? initailVarinats.zoomIn
                  : zoomOut ? initailVarinats.zoomOut
                  : leak1 ? initailVarinats.leak1 
                  : leak2 ? initailVarinats.leak2
                  : glitch1 ? initailVarinats.glitch1
                  : glitch2 ? initailVarinats.glitch2
                  : null
                }
                transition={{ duration:1, type:'keyframes', times: glitch1 ? [0, 0.25, 0.5, 1] : glitch2 ? [0, 0.25, 0.5, 1] : null}}
                variants={variants}
                animate={
                    fadeIn ? 'fadeIn'
                  : fadeOut ? 'fadeOut'
                  : zoomIn ? 'zoomIn'
                  : zoomOut ? 'zoomOut'
                  : leak1 ? 'leak1'
                  : leak2 ? 'leak2'
                  : glitch1 ? 'glitch1'
                  : glitch2 ? 'glitch2'
                  : ''
                }
                src={item.src}
                controls
                exit={fadeIn ? exitVariants.fadeIn :
                  fadeOut ? exitVariants.fadeOut :
                  zoomIn ? exitVariants.zoomIn :
                  zoomOut ? exitVariants.zoomOut : 
                  leak1 ? exitVariants.leak1 : 
                  leak2 ? exitVariants.leak2 : 
                  glitch1 ? exitVariants.glitch1 : 
                  glitch2 ? exitVariants.glitch2 : 
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
        <button onClick={() => handleAnimation("leak1")} style={{ margin: "5px" }}>Leak 1</button>
        <button onClick={() => handleAnimation("leak2")} style={{ margin: "5px" }}>Leak 2</button>
        <button onClick={() => handleAnimation("glitch1")} style={{ margin: "5px" }}>Glitch 1</button>
        <button onClick={() => handleAnimation("glitch2")} style={{margin:"5px"}}>Glitch 2</button>
      </div>

      <button style={{margin:"5px"}} onClick={prevVideo}>Previous Video</button>
      <button style={{margin:"5px"}} onClick={nextVideo}>Next Video</button>
      
    </>
  )
}

export default App
