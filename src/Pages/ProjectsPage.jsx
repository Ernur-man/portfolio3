import './project.less';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';





const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut'
    }
  }
};

export default function ProjectsPage() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('p1_title'),
      desc: t('p1_desc'),
      image: new URL('../assets/doctorfind.webp', import.meta.url).href,
      src: 'https://ernur-man.github.io/DoctorFindPage/',
      code: 'https://github.com/ernur-man/DoctorFindPage'
    },
    {
      id: 2,
      title: t('p2_title'),
      desc: t('p2_desc'),
      image: new URL('../assets/building.webp', import.meta.url).href,
      src: 'https://ernur-man.github.io/BuildingCompanyPage/',
      code: 'https://github.com/ernur-man/BuildingCompanyPage'
    },
    {
      id: 3,
      title: t('p3_title'),
      desc: t('p3_desc'),
      image: new URL('../assets/coffee.webp', import.meta.url).href,
      src: 'https://ernur-man.github.io/coffeePage/',
      code: 'https://github.com/ernur-man/coffeePage'
    },
    {
      id: 4,
      title: t('p4_title'),
      desc: t('p4_desc'),
      image: new URL('../assets/vpn.webp', import.meta.url).href,
      src: 'https://ernur-man.github.io/VPNServicePage/',
      code: 'https://github.com/ernur-man/VPNServicePage'
    },
    {
      id: 5,
      title: t('p5_title'),
      desc: t('p5_desc'),
      image: new URL('../assets/trwr.webp', import.meta.url).href,
      src: 'https://ernur-man.github.io/WebDevelopmentServicePage_TRWR/',
      code: 'https://github.com/ernur-man/WebDevelopmentServicePage_TRWR'
    },
    {
      id: 6,
      title: t('p6_title'),
      desc: t('p6_desc'),
      image: new URL('../assets/ktzh.webp', import.meta.url).href,
      src: 'https://ernur-man.github.io/ktzh-project/',
      code: 'https://github.com/ernur-man/ktzh-project'
    },
    {
      id: 7,
      title: t('p7_title'),
      desc: t('p7_desc'),
      image: new URL('../assets/itcomp.webp', import.meta.url).href,
      src: 'https://ernur-man.github.io/ItServicePage/',
      code: 'https://github.com/ernur-man/ItServicePage'
    },
    {
      id: 8,
      title: t('p8_title'),
      desc: t('p8_desc'),
      image: new URL('../assets/itm.webp', import.meta.url).href,
      src: 'https://ernur-man.github.io/ItCompanyPage/',
      code: 'https://github.com/ernur-man/ItCompanyPage'
    },
    {
      id: 9,
      title: t('p9_title'),
      desc: t('p9_desc'),
      image: new URL('../assets/tsservice.webp', import.meta.url).href,
      src: 'https://ernur-man.github.io/TsServicePage/',
      code: 'https://github.com/ernur-man/TsServicePage'
    },
    {
      id: 10,
      title: t('p10_title'),
      desc: t('p10_desc'),
      image: new URL('../assets/tsstore.webp', import.meta.url).href,
      src: 'https://ernur-man.github.io/TsStorePage/',
      code: 'https://github.com/ernur-man/TsStorePage'
    }
  ];

  return (
    <main className="project" id="projects">
      <div className="container">
        <h2>{t('projects').toUpperCase()}</h2>

        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={1}
          spaceBetween={24}
          className="project-swiper"
          breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 60
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 50
            }
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.article
                className="project-card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                </div>

                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </div>

                <div className="project-footer">
                  <a
                    href={project.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn--primary"
                  >
                    Open project
                    <span>↗</span>
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn--secondary"
                  >
                    Code
                    <span>⌘</span>
                  </a>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
