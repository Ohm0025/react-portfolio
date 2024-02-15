import PortItem from "../PortItem/PortItem";
import styles from "./Portfolio.module.css";
import todolistimg from "/Users/apple/Desktop/westride/new-portfolio/src/thumbnail/todolistthumb.png";
import crossopdimg from "/Users/apple/Desktop/westride/new-portfolio/src/thumbnail/crossopdthumb.png";
import ecomimg from "/Users/apple/Desktop/westride/new-portfolio/src/thumbnail/ecomthumb.png";
import ewedimg from "/Users/apple/Desktop/westride/new-portfolio/src/thumbnail/ewedthumb.png";
import pokedeximg from "/Users/apple/Desktop/westride/new-portfolio/src/thumbnail/pokedexthumb.png";
import socialthumb from "/Users/apple/Desktop/westride/new-portfolio/src/thumbnail/socialmediathimb.png";

const Portfolio = () => {
  return (
    <div id="portfolio" className={styles.port_con}>
      <h1 className={styles.port_title}>Portfolio</h1>
      <div className={styles.port_list}>
        <PortItem
          title="E-wedding card"
          url1="https://ohm0025.github.io/e-wedding-card/"
          url2="https://github.com/Ohm0025/e-wedding-card"
          img={ewedimg}
        />

        <PortItem
          title="E-commerce web"
          url1="https://ohm0025.github.io/ecommerce-project/"
          url2="https://github.com/Ohm0025/ecommerce-project"
          img={ecomimg}
        />

        <PortItem
          title="Social media web"
          url1="https://youtu.be/m_E1fErcWS4"
          url2="https://github.com/Ohm0025/social-media-react"
          urlApi="https://github.com/Ohm0025/social-media-api"
          img={socialthumb}
        />

        <PortItem
          title="Medical record"
          url1="https://youtu.be/wv3Rl34TUOk?si=Waq7ScHtKm3rruD0"
          url2="https://github.com/Ohm0025/cross-opd-react"
          urlApi="https://github.com/Ohm0025/cross-opd-api"
          img={crossopdimg}
        />

        <PortItem
          title="PokeDex"
          url1="https://poke-dex-cyan.vercel.app/"
          url2="https://github.com/Ohm0025/pokeDex"
          img={pokedeximg}
        />

        <PortItem
          title="Simple todo list"
          url1="https://youtu.be/tpsSFZJZ_VA"
          url2="https://github.com/Ohm0025/simple-todo-list"
          urlApi="https://github.com/Ohm0025/todo-list-api"
          img={todolistimg}
        />
      </div>
    </div>
  );
};

export default Portfolio;
