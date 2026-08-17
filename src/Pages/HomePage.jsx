import { motion } from 'framer-motion';
import ava from '../assets/ava.jpg';
import Header from '../component/header';
import './home.less';
import { useEffect, useState } from 'react';
import { div } from 'framer-motion/client';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaXmark } from 'react-icons/fa6';

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const {t, i18n} = useTranslation();



  function handleEmailChange(e) {
    const val = e.target.value;
    setEmail(val);
    if (val === "") {
      setEmailError("");
    } else if (!emailRegex.test(val)) {
      setEmailError("Incorrect format. Please enter a valid Email number.");
    } else {
      setEmailError("");
    }
  }

  function noActive(e){
    if(e != "ARTICLE"){
      setActive(false)
    }
  }

  async function handleForm (e) {
      e.preventDefault();
      const res = await fetch("https://formspree.io/f/xykaebjy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    if (res.ok) {
      setName("");
      setEmail("");
      setShowSuccess(true)
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
              <FaXmark onClick={() => { setActive(false); setShowSuccess(false); }} className='xmark'/>

              {showSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="success"
                >
                  <p>Success!</p>
                  <button onClick={() => { setActive(false); setShowSuccess(false); }}>
                    Close
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleForm}>
                  <input
                    type="text"
                    placeholder={t('name')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    placeholder={t('email')}
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  {emailError && <span className="error">{emailError}</span>}
                  <button type="submit">Send</button>
                </form>
              )}

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
          loading="lazy"
        />

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className={i18n.language === 'ru' ? 'ru-title' : ''}>
            {t('desc_main_1')} <br />
          {t('desc_main_2')} <span>{t('desc_main_3')}</span>
          </motion.h2>

          <motion.p variants={itemVariants}>
            {t('text_main')}
          </motion.p>

          <motion.nav variants={itemVariants} >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(true)}
              className="btn"
            >
              {t('button_form')}
            </motion.button>

            <motion.a
              href="yernur_resume.pdf"
              download="yernur_resume.pdf"
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn"
            >
              {t('button_download')}
            </motion.a>
          </motion.nav>
        </motion.section>
      </div>
    </main>
  );
}
