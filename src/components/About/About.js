import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles["about__holder"]}>
          <div className={styles["about__info"]}>
            <p>ABOUT CREATOR</p>
          </div>
          <div className={styles["about__contacts"]}>
            <h3>Miroslav Ivanov</h3>
            <ul>
              <li>
                <p>Email:</p>
                <span>miro@gmail.com</span>
              </li>
              <li>
                <p>Address:</p>
                <span>Bulgaria, Varna</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
