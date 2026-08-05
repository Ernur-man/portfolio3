import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  FaCode,
  FaPython,
  FaReact,
  FaBrain,
  FaArrowRight,
} from "react-icons/fa";
import "./about.less";

const steps = [
  {
    icon: <FaCode />,
    year: "2021",
    title: "Started Programming",
    text: "My journey began with C#. I learned variables, loops, OOP and created my first console applications.",
    stack: ["C#", ".NET", "OOP"],
    top: "6%",
    left: "8%",
  },
  {
    icon: <FaPython />,
    year: "2022",
    title: "Python",
    text: "Moved into Python development. Learned SQL, APIs, web scraping and automation.",
    stack: ["Python", "SQL", "BeautifulSoup", "Requests"],
    top: "24%",
    left: "63%",
  },
  {
    icon: <FaReact />,
    year: "2024-2025",
    title: "Frontend",
    text: "Focused on modern frontend development and built commercial-quality applications",
    stack: ["React", "TypeScript", "Redux", "Vite"],
    top: "49%",
    left: "8%",
  },
  {
    icon: <FaBrain />,
    year: "Now",
    title: "AI Engineer",
    text: "Currently studying Machine Learning, Deep Learning, LLMs and AI Engineering.",
    stack: ["NumPy", "PyTorch", "Transformers", "LLMs"],
    top: "73%",
    left: "63%",
  },
];

export default function AboutPage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <main ref={ref} className="about">
      <div className="container">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="title"
        >
          My Journey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, delay: .15 }}
          viewport={{ once: true }}
          className="subtitle"
        >
          From writing my first line of code to becoming an AI Engineer.
        </motion.p>

        <svg
            className="road"
            viewBox="0 0 1600 1900"
            preserveAspectRatio="none"
        >

            <defs>

                <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                >
                    <stop offset="0%" stopColor="#38bdf8">
                        <animate
                            attributeName="stop-color"
                            values="#38bdf8;#3b82f6;#8b5cf6;#38bdf8"
                            dur="6s"
                            repeatCount="indefinite"
                        />
                    </stop>

                    <stop offset="50%" stopColor="#3b82f6">
                        <animate
                            attributeName="stop-color"
                            values="#3b82f6;#8b5cf6;#38bdf8;#3b82f6"
                            dur="6s"
                            repeatCount="indefinite"
                        />
                    </stop>

                    <stop offset="100%" stopColor="#8b5cf6">
                        <animate
                            attributeName="stop-color"
                            values="#8b5cf6;#38bdf8;#3b82f6;#8b5cf6"
                            dur="6s"
                            repeatCount="indefinite"
                        />
                    </stop>

                </linearGradient>

                <filter
                    id="glow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                >
                    <feGaussianBlur
                        stdDeviation="8"
                        result="blur"
                    />

                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

            </defs>

            <path
                d="
                    M 280 160
                    C 280 330 1180 330 1180 650
                    S 280 980 280 1200
                    S 1180 1540 1180 1700
                "
                fill="none"
                stroke="#1b1f24"
                strokeWidth="14"
                strokeLinecap="round"
            />

            <motion.path
                d="
                    M 280 160
                    C 280 330 1180 330 1180 650
                    S 280 980 280 1200
                    S 1180 1540 1180 1700
                "
                fill="none"
                stroke="#60a5fa"
                strokeWidth="14"
                strokeLinecap="round"
                opacity={0.18}
                filter="url(#glow)"
                style={{ pathLength }}
            />

            <motion.path
                d="
                    M 280 160
                    C 280 330 1180 330 1180 650
                    S 280 980 280 1200
                    S 1180 1540 1180 1700
                "
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="6"
                strokeLinecap="round"
                style={{ pathLength }}
            />

            <motion.path
                d="
                    M 280 160
                    C 280 330 1180 330 1180 650
                    S 280 980 280 1200
                    S 1180 1540 1180 1700
                "
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                opacity={0.15}
                style={{ pathLength }}
            />

        </svg>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="step"
            style={{
              top: step.top,
              left: step.left,
            }}
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .6,
            }}
            viewport={{
              once: true,
              amount: .3,
            }}
          >
            <div className="card">

              <div className="icon">
                {step.icon}
              </div>

              <span className="year">
                {step.year}
              </span>

              <h2>
                {step.title}
              </h2>

              <p>
                {step.text}
              </p>

              <div className="stack">
                {step.stack.map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}
              </div>


            </div>
          </motion.div>
        ))}

      </div>
    </main>
  );
}
