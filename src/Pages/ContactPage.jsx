import { motion } from 'framer-motion';
import './contact.less';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const pulseVariants = {
  initial: { scale: 1, opacity: 0.8 },
  animate: {
    scale: [1, 1.5, 1],
    opacity: [0.8, 0.4, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function ContactPage() {
  return (
    <motion.footer
      className='contact'
      id='contact'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 variants={itemVariants}>Contact</motion.h2>

        <motion.p className="bio" variants={itemVariants}>
          Web developer with a passion for creating beautiful and functional web applications.
          I specialize in frontend development using React.
          I am always open to learning new technologies and improving my skills.
        </motion.p>

        <motion.ul className="tags" variants={itemVariants}>
          {['Frontend', 'React', 'Node.js', 'REST API', 'UI/UX'].map((tag, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1, backgroundColor: '#ffffff', color: '#000000' }}
            >
              {tag}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div className="availability" variants={itemVariants}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <motion.span
              className="dot"
              variants={pulseVariants}
              initial="initial"
              animate="animate"
            />
            <span className="dot" style={{ position: 'absolute' }} />
          </div>
          <p>Currently <span>open to freelance</span> projects</p>
        </motion.div>

        <motion.div className="divider" variants={itemVariants} />

        <motion.p className="email" variants={itemVariants} whileHover={{ x: 5 }}>
          <i className="fa-regular fa-envelope" />
          ernuraman926@gmail.com
        </motion.p>

        <motion.menu variants={itemVariants} className="social-links">
        {[
          { icon: 'fa-whatsapp', color: '#25D366', src: 'https://wa.me/77027968186' },
          { icon: 'fa-instagram', color: '#E4405F', src: 'https://www.instagram.com/amanturlly.ernur' },
          { icon: 'fa-linkedin-in', color: '#0077B5', src: 'https://www.linkedin.com/in/ernur-aman-1a3651398/' }
        ].map((social, i) => (
          <motion.a
            key={i}
            href={social.src}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, color: social.color }}
            transition={{ duration: 0.2 }}
            style={{ display: 'inline-block', margin: '0 10px', color: '#aaa' }}
          >
            <i className={`fa-brands ${social.icon}`} style={{ fontSize: '22px' }} />
          </motion.a>
        ))}
      </motion.menu>
      </div>
    </motion.footer>
  );
}
