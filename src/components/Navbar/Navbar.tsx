import { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isToggle, setToggle] = useState(false);

  const handleToggle = () => setToggle((prev) => !prev);

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            <a href="#hero">OHM PORT</a>
          </div>

          <ul>
            <li>
              <a href="#skill">Skills</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
          </ul>

          <div className={styles.button}>
            <a href="#contact">Contact me</a>
          </div>
        </div>

        {/* mobile menu */}
        <FaBars className={styles.bars} onClick={handleToggle} />
        {isToggle ? (
          <>
            <ul className={styles.mobile_menu}>
              <li>
                <a href="#skill">Skills</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
            </ul>
            <div className={styles.mobile_button}>
              <a href="#contact">Contact me</a>
            </div>
          </>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
