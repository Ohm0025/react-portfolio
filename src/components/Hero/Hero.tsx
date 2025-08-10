import styles from "./Hero.module.css";
import { FaGithub } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

const Hero = () => {
  return (
    <div id="hero" className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hi, it’s me</p>
            <h3 className={styles.text_2}>Porramat Thaepngoen</h3>
            <p className={styles.text_3}>
              <span style={{ marginRight: "10px" }}>I'm a</span>
              <TypeAnimation
                sequence={["Full-stack Developer", 1000, "Web Developer", 1000]}
                speed={50}
                repeat={Infinity}
              />
            </p>
            <p className={styles.text_4}>
              Passionate and dedicated professional with a diverse background in
              healthcare and technology. With three years of experience as a
              doctor in a local hospital, I have developed strong
              problem-solving skills, attention to detail, and a commitment to
              providing exceptional care to patients. Seeking a new career path,
              I have successfully completed the 'Westride Bootcamp,' honing my
              skills in full-stack development and preparing myself for the
              challenges and opportunities of the tech industry. With a blend of
              medical expertise and newfound tech proficiency, I am poised to
              bring a unique perspective to the field of full-stack development.
            </p>
            <ul className={styles.hero_social}>
              <li>
                <a href="https://github.com/Ohm0025" target="blank">
                  <FaGithub />
                  <span>Ohm0025</span>
                </a>
                <span style={{ margin: "20px" }}>or</span>
                <a href="https://github.com/Porramat081" target="blank">
                  <FaGithub />
                  <span>Porramat081</span>
                </a>
              </li>
            </ul>
          </div>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <div className={styles.hero_img}></div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Hero;
