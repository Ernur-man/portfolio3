import { motion } from 'framer-motion';
import './work.less';
import logo_ktzh from '../assets/logo_ktzh.svg';
import logo_itm from '../assets/logo_itm.webp';

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
  return (
    <main className="work" id='experience'>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          EXPERIENCE
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
              I developed a mobile-only internal web application for KTZH employees using React, leading the development independently while the mentor supervised. The app was exclusively optimized for mobile devices and featured a search functionality that allowed employees to quickly find and navigate to the sections they needed.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <nav>
              <a
                href="https://ernur-man.github.io/itmnew2/"
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
              I developed a full client-facing website for ITM Consulting using React, with mentor guidance throughout the process. The site serves as a complete online presence for the company — visitors can explore information about ITM's services and submit requests through a built-in application form. I handled the entire development from scratch while the mentor provided feedback when necessary.
            </p>
          </motion.div>
        </motion.article>
      </div>
    </main>
  );
}
