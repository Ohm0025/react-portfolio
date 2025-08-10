import PortItem from "../PortItem/PortItem";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <div id="portfolio" className={styles.port_con}>
      <h1 className={styles.port_title}>Portfolio</h1>
      <div className={styles.port_list}>
        <PortItem
          title="E-wedding card"
          url1="https://ohm0025.github.io/e-wedding-card/"
          url2="https://github.com/Ohm0025/e-wedding-card"
          img={"https://img5.pic.in.th/file/secure-sv1/ewedthumb.png"}
        />

        <PortItem
          title="IELTs AI Checker"
          url1="https://text-counter-iota.vercel.app/"
          url2="https://github.com/Ohm0025/text-counter.git"
          urlApi="https://github.com/Ohm0025/ielts-writing-api.git"
          img={"public/image/ieltCal.png"}
        />

        <PortItem
          title="Ohello Social Media"
          url1="https://ohello-frontend.vercel.app/"
          url2="https://github.com/Porramat081/ohello-frontend"
          urlApi="https://github.com/Porramat081/ohello-api"
          img={"public/image/ohmSocia.png"}
        />

        <PortItem
          title="Medical record"
          url1="https://youtu.be/wv3Rl34TUOk?si=Waq7ScHtKm3rruD0"
          url2="https://github.com/Ohm0025/cross-opd-react"
          urlApi="https://github.com/Ohm0025/cross-opd-api"
          img={"public/image/crossopdthumb.png"}
        />

        <PortItem
          title="Ohmkahnwald"
          url1="https://ohmkahnwald.com/"
          url2="https://github.com/Ohm0025/ohmkahnwald-react"
          urlApi="https://github.com/Ohm0025/ohmkahnwald-api"
          img={"public/image/ohmBlog.png"}
        />

        <PortItem
          title="Simple todo list"
          url1=""
          url2="https://github.com/Ohm0025/simple-todo-list"
          urlApi="https://github.com/Ohm0025/todo-list-api"
          img={"https://img5.pic.in.th/file/secure-sv1/todolistthumb.png"}
        />
      </div>
    </div>
  );
};

export default Portfolio;
