import styles from "./Skills.module.css";
import {
  FaSquareJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTailwindcss, SiMysql } from "react-icons/si";

const Skill = () => {
  return (
    <div id="skill" className={styles.skills_con}>
      <h3 className={styles.skills_title}>My Skill Set</h3>
      <ul className={styles.skills_list}>
        <li>
          <FaHtml5 />
        </li>
        <li>
          <FaCss3Alt />
        </li>
        <li>
          <FaSquareJs />
        </li>
        <li>
          <FaBootstrap />
        </li>
        <li>
          <SiTailwindcss />
        </li>
        <li>
          <FaReact />
        </li>
        <li>
          <FaGitAlt />
        </li>
        <li>
          <FaNodeJs />
        </li>
        <li>
          <BiLogoPostgresql />
        </li>
        <li>
          <SiMysql />
        </li>
      </ul>
    </div>
  );
};

export default Skill;
