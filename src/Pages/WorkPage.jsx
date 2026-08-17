import { motion } from 'framer-motion';
import './work.less';
import logo_ktzh from '../assets/logo_ktzh.svg';
import logo_itm from '../assets/logo_itm.webp';
import { useTranslation } from 'react-i18next';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function WorkPage() {
  const {t, i18n} = useTranslation();
  return (
    <main className="work" id='experience'>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('experience').toUpperCase()}
        </motion.h2>

        <motion.article
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <nav>
              <a
                href="https://ernur-man.github.io/ktzh-project/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logo_ktzh} alt="KTZH" loading="lazy" />
              </a>

              <div className="nav_info">
                <h4>KTZH PROJECT</h4>
                <span className="role">Frontend Developer</span>
                <span className="date">2025</span>
              </div>
            </nav>

            <p>
              {t('ktzh_desc')}
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <nav>
              <a
                href="https://ernur-man.github.io/ItCompanyPage/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logo_itm} alt="ITM" loading="lazy" />
              </a>

              <div className="nav_info">
                <h4>ITM PROJECT</h4>
                <span className="role">Frontend Developer</span>
                <span className="date">2025</span>
              </div>
            </nav>

            <p>
              {t('itm_desc')}
            </p>
          </motion.div>
        </motion.article>
      </div>
    </main>
  );
}
