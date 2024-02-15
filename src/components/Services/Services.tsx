import styles from "./Services.module.css";
import { FaCode, FaUserDoctor } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";

const Services = () => {
  return (
    <div className={styles.services_con}>
      <h3 className={styles.services_title}>Resume</h3>
      <div className={styles.services_list}>
        <div className={styles.services_items}>
          <FaUserDoctor />
          <h4>Medical Work Experience</h4>
          <div className={styles.services_groupItem}>
            <div className={styles.services_subitems}>
              <h5>Uthaithani Hospital</h5>
              <h6>{"Uthaithani - Thailand 2021 - 2022"}</h6>
              <p>
                One year of dedicated service in a hospital setting, providing
                medical care and treatment to patients.
              </p>
            </div>

            <div className={styles.services_subitems}>
              <h5>Lansak Hospital</h5>
              <h6>{"Uthaithani - Thailand 2022 - 2024"}</h6>
              <p>
                Two years of experience in a hospital environment, handling
                various medical cases and collaborating with healthcare teams to
                ensure optimal patient outcomes.
              </p>
            </div>

            <div className={styles.services_subitems}>
              <h5>Romchat Private Hospital</h5>
              <h6>{"Nakhon Sawan - Thailand 2022 - 2024"}</h6>
              <p>
                Conducted part-time shifts four times a month, offering
                specialized medical services to patients.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.services_items}>
          <FaCode />
          <h4>Full-stack Experience</h4>
          <div className={styles.services_groupItem}>
            <div className={styles.services_subitems}>
              <h5>E-Wedding Card Project</h5>
              <p>
                Developed e-wedding card solutions, showcasing proficiency in
                full-stack development and delivering high-quality digital
                products to clients.
              </p>
            </div>

            <div className={styles.services_groupItem}>
              <h5>Full-Stack Pet-Projects</h5>
              <ul>
                <li>
                  <p>
                    <b>E-Commerce Project</b> with Public Stock API Integration:
                    Designed and developed an e-commerce platform integrating
                    public stock APIs for real-time pricing and inventory
                    management.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Social Media Project</b> with Twitter-like Features:
                    Created a social media application with features reminiscent
                    of Twitter, including post creation, commenting, and
                    real-time chat.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Web Application for Medical Record Management</b> :
                    Developed a comprehensive web application for managing
                    medical records, ensuring secure access and efficient data
                    retrieval for healthcare professionals.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.services_items}>
          <MdOutlineMenuBook />
          <h4>Education</h4>
          <div className={styles.services_groupItem}>
            <div className={styles.services_subitems}>
              <h5>Chiangmai University</h5>
              <p className={styles.education}>Doctor of Medicine</p>
              <p className={styles.education}>2016 - 2021</p>
            </div>

            <div className={styles.services_subitems}>
              <h5>Westride Bootcamp</h5>
              <p className={styles.education}>Full-stack Developer</p>
              <p className={styles.education}>2023 - 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
