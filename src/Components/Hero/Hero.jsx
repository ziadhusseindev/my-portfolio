import Lottie from "lottie-react";
import "./Hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  const DownloadButton = () => {
    return (
      <a href="/ZiadHussein.pdf" download="MyCV.pdf">
        Download CV
      </a>
    );
  };

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./ziad.png"
            className="avatar"
            alt=""
          />
          <span className="ziad">Ziad Hussein</span>
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          A Front-End Developer
        </motion.h1>

        <p className="sub-title">
          Hi, I’m Ziad Hussein. a Front end developer. builds and maintains user
          interfaces and front-facing components using React.js, which is a
          front end library and framework. They create interactive applications
          that run fast and efficiently.
        </p>

        <div className="all-icons flex">
          <a
            href="https://twitter.com/SirZiiad"
            target="_blank"
            rel="noopener noreferrer"
            className="icon icon-twitter"
          ></a>
          <a
            href="https://www.instagram.com/_ziadhusseinn_/?hl=ar"
            target="_blank"
            rel="noopener noreferrer"
            className="icon icon-instagram"
          ></a>
          <a
            href="https://github.com/ziadhusseindev"
            target="_blank"
            rel="noopener noreferrer"
            className="icon icon-github"
          ></a>
          <a
            href="https://www.linkedin.com/in/ziad-hussein-40b377202/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon icon-linkedin"
          ></a>
          <br />
          <form className="form">
            <button className="btn">{DownloadButton()}</button>
          </form>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
