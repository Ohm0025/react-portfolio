import styles from "./Contact.module.css";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaLine } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className={styles.contact_wrapper}>
      <div className={styles.contact_con}>
        <h3>Get in touch</h3>
        <div className={styles.contact_info}>
          <p>
            <FaPhone />
            <span>085-705-4020</span>
          </p>
          <p>
            <FaEnvelope />
            <span>porramat081@gmail.com</span>
          </p>
          <p>
            <FaLine />
            <span>omegaohm41</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
