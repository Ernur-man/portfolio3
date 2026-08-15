import './project.less';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import htmlImage from '../assets/html.png'
import jsImage from '../assets/js.png'
import reactImage from '../assets/react.png'
import tsTutor from '../assets/ts.png'
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'HTML', label: 'CLICK HERE TO VISIT', image: htmlImage, src: 'https://ernur-man.github.io/DoctorFindPage/' },
  { id: 2, title: 'HTML', label: 'CLICK HERE TO VISIT', image: htmlImage, src: 'https://ernur-man.github.io/BuildingCompanyPage/' },
  { id: 3, title: 'HTML', label: 'CLICK HERE TO VISIT', image: htmlImage, src: 'https://ernur-man.github.io/coffeePage/' },
  { id: 4, title: 'JavaScript', label: 'CLICK HERE TO VISIT', image: jsImage, src: 'https://ernur-man.github.io/VPNServicePage/' },
  { id: 5, title: 'JavaScript', label: 'CLICK HERE TO VISIT', image: jsImage, src: 'https://ernur-man.github.io/WebDevelopmentServicePage_TRWR/' },
  { id: 6, title: 'React', label: 'CLICK HERE TO VISIT', image: reactImage, src: 'https://ernur-man.github.io/ktzh-project/' },
  { id: 7, title: 'React', label: 'CLICK HERE TO VISIT', image: reactImage, src: 'https://ernur-man.github.io/ItServicePage/' },
  { id: 8, title: 'React', label: 'CLICK HERE TO VISIT', image: reactImage, src: 'https://ernur-man.github.io/ItCompanyPage/' },
  { id: 9, title: 'TypeScript', label: 'CLICK HERE TO VISIT', image: tsTutor, src: 'https://ernur-man.github.io/TsServicePage/' },
  { id: 10, title: 'TypeScript', label: 'CLICK HERE TO VISIT', image: tsTutor, src: 'https://ernur-man.github.io/TsStorePage/' }
];


const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function ProjectsPage() {
  return (
    <main className="project" id='projects'>
      <div className="container">
        <h2>PROJECTS</h2>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={24}
          navigation
          className="project-swiper"
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1130: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 30,
            }
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
                className="project-card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <a href={project.src} target='_blank' aria-label={`Go to the ${project.title} website!`}>
                  <div className="project-image">
                  <img src={project.image} alt={project.title} loading='lazy'/>
                  </div>
                  <div className="project-footer">
                    <div className="project-footer__text">
                      <p className="project-footer__label">{project.label}</p>
                      <h4 className="project-footer__title">{project.title}</h4>
                    </div>
                    <div className="project-footer__arrow">↗</div>
                  </div>
                </a>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
