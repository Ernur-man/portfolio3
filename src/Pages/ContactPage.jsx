import { color, motion } from 'framer-motion';
import './contact.less';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaRegEnvelope, FaGithub } from 'react-icons/fa';

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
  const {t, i18n} = useTranslation();

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
        <motion.h2 variants={itemVariants}>{t('contact')}</motion.h2>

        <motion.p className="bio" variants={itemVariants}>
          {t('contact_desc')}
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
          <FaRegEnvelope />
          ernuraman926@gmail.com
        </motion.p>

        <motion.menu variants={itemVariants} className="social-links">
          {[
            { icon: FaWhatsapp, color: '#25D366', src: 'https://wa.me/77027968186' },
            { icon: FaInstagram, color: '#E4405F', src: 'https://www.instagram.com/amanturlly.ernur' },
            { icon: FaLinkedinIn, color: '#0077B5', src: 'https://www.linkedin.com/in/ernur-aman-1a3651398/' },
            {icon: FaGithub, color: '#0077B5', src: 'https://github.com/Ernur-man'}
          ].map((social, i) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={i}
                href={social.src}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: social.color }}
                transition={{ duration: 0.2 }}
                style={{ display: 'inline-block', margin: '0 10px', color: '#aaa'}}
              >
                <Icon style={{ fontSize: '24px', marginRight: '10px' }} />
              </motion.a>
            );
          })}
        </motion.menu>
      </div>
    </motion.footer>
  );
}
