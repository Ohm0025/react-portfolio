import PortItem from "../PortItem/PortItem";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <div className={styles.port_con}>
      <h1 className={styles.port_title}>Portfolio</h1>
      <div className={styles.port_list}>
        <PortItem
          title="E-wedding card"
          url1="https://ohm0025.github.io/e-wedding-card/"
          url2="https://github.com/Ohm0025/e-wedding-card"
          img="public/thumbnail/ewedthumb.png"
        />

        <PortItem
          title="E-commerce web"
          url1="https://ohm0025.github.io/ecommerce-project/"
          url2="https://github.com/Ohm0025/ecommerce-project"
          img="public/thumbnail/ecomthumb.png"
        />

        <PortItem
          title="Social media web"
          url1="https://youtu.be/m_E1fErcWS4"
          url2="https://github.com/Ohm0025/social-media-react"
          urlApi="https://github.com/Ohm0025/social-media-api"
          img="public/thumbnail/socialmediathimb.png"
        />

        <PortItem
          title="Medical record"
          url1="https://youtu.be/wv3Rl34TUOk?si=Waq7ScHtKm3rruD0"
          url2="https://github.com/Ohm0025/cross-opd-react"
          urlApi="https://github.com/Ohm0025/cross-opd-api"
          img="public/thumbnail/crossopdthumb.png"
        />

        <PortItem
          title="PokeDex"
          url1="https://poke-dex-cyan.vercel.app/"
          url2="https://github.com/Ohm0025/pokeDex"
          img="public/thumbnail/pokedexthumb.png"
        />

        <PortItem
          title="Simple todo list"
          url1="https://youtu.be/tpsSFZJZ_VA"
          url2="https://github.com/Ohm0025/simple-todo-list"
          urlApi="https://github.com/Ohm0025/todo-list-api"
          img="public/thumbnail/Screenshot 2567-02-15 at 10.47.48.png"
        />
      </div>
    </div>
  );
};

export default Portfolio;
