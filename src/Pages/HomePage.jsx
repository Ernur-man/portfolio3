import { motion } from 'framer-motion';
import ava from '../assets/ava.jpg';
import Header from '../component/header';
import './home.less';
import { useEffect, useState } from 'react';
import { div } from 'framer-motion/client';
import { AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function HomePage() {
  const [active, setActive]= useState(false);
  
  function noActive(e){
    if(e != "ARTICLE"){
      setActive(false)
    }
  }
 
  return (
    <main className='home' id='home'>
      <Header />
      
        <AnimatePresence>
        {active && (
          <motion.div
            className="layer"
            initial={{ opacity: 0 }}       
            animate={{ opacity: 1 }}       
            exit={{ opacity: 0 }}        
            onClick={() => setActive(false)} 
          >
            <motion.article
              className="modal_window"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}    
              exit={{ scale: 0.8, opacity: 0, y: 20 }}    
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }} 
              onClick={(e) => e.stopPropagation()}        
            >
              <i 
                className="fa-solid fa-x" 
                onClick={() => setActive(false)}
              ></i>
              <form>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Phone Number'/>
                <button>Send</button>
              </form>
              
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="container">
        
        <motion.div 
          className='image'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        />

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants}>
            I do code and <br /> make content <span>about it!</span>
          </motion.h2>
          
          <motion.p variants={itemVariants}>
            I am Ernur. I am a web developer and I have about 2 years of experience. 
            I just want to improve my skills and work on projects that challenge me. 
            My goal is to keep learning, grow as a developer, and build useful products that make a difference.
          </motion.p>
          
          <motion.nav variants={itemVariants} >
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              onClick={() => setActive(true)} 
              className="btn" 
            >
              Get in Touch
            </motion.button>
            
            <motion.a 
              href="/resume.pdf" 
              download="yernur_resume.pdf" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="btn" 
            >
              Download CV
            </motion.a>
          </motion.nav>
        </motion.section>
      </div>
    </main>
  );
}