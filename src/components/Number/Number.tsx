import styles from "./Number.module.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

type TypeVisible = {
  isVisible: boolean;
};

const Number = () => {
  return (
    <div className={styles.number_con}>
      <div className={styles.number_items}>
        <h3>
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }: TypeVisible) => (
              <div>
                {isVisible ? (
                  <CountUp end={100} start={0} duration={2} />
                ) : null}
                +
              </div>
            )}
          </VisibilitySensor>
        </h3>
        <p>Project Delivered</p>
      </div>
      <div className={styles.number_items}>
        <h3>
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }: TypeVisible) => (
              <div>
                {isVisible ? <CountUp end={50} start={0} duration={2} /> : null}
                +
              </div>
            )}
          </VisibilitySensor>
        </h3>
        <p>Companies Helped </p>
      </div>
      <div className={styles.number_items}>
        <h3>
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }: TypeVisible) => (
              <div>
                {isVisible ? <CountUp end={10} start={0} duration={2} /> : null}
                +
              </div>
            )}
          </VisibilitySensor>
        </h3>
        <p>Years of experience</p>
      </div>
      <div className={styles.number_items}>
        <h3>
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }: TypeVisible) => (
              <div>
                {isVisible ? (
                  <CountUp end={200} start={0} duration={2} />
                ) : null}
                +
              </div>
            )}
          </VisibilitySensor>
        </h3>
        <p>Happy Clients</p>
      </div>
    </div>
  );
};

export default Number;
