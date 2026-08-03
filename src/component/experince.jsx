import { motion } from 'framer-motion';
import './experience.less';
import js from '../assets/javascript.webp';
import dom from '../assets/htmlIcon.webp';
import style from '../assets/css.webp';
import server from '../assets/nodejs.webp';
import comp from '../assets/reactjs.webp';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 } 
  }
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

export default function Experience() {
  return (
    <article className="experience">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          EXPERIENCE WITH
        </motion.h2>

        <motion.aside
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[js, server, dom, style, comp].map((img, index) => (
            <motion.img 
              key={index} 
              src={img} 
              alt="Technology" 
              variants={iconVariants}
              whileHover={{ scale: 1.1 }} 
              loading='lazy'
            />
          ))}
        </motion.aside>
      </div>
    </article>
  );
}