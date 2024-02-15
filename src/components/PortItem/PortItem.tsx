import Tilt from "react-parallax-tilt";
import GitBtn from "../GitBtn/GitBtn";
import styles from "./PortItem.module.css";

type Props = {
  url1: string;
  url2: string;
  title: string;
  img: string;
  urlApi?: string;
};

const PortItem = ({ title, url1, url2, urlApi, img }: Props) => {
  return (
    <div className={styles.port_items}>
      <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
        <img
          src={img}
          alt="thumbnail-e-wedding-card"
          onClick={() => {
            window.open(url1, "_blank");
          }}
        />
      </Tilt>
      <div className={styles.port_subitems} style={{ paddingTop: "7px" }}>
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>{title}</span>
        <GitBtn url={url2} urlApi={urlApi} />
      </div>
    </div>
  );
};

export default PortItem;
