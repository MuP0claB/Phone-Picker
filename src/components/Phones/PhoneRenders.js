import { NavLink } from 'react-router-dom';

import styles from "./PhoneRenders.module.css";

const PhoneRenders = () => {
  return (
    <section className={styles.elements}>
      <ul>
        <li>
          <NavLink>
            <img
              src={
                "https://m-cdn.phonearena.com/images/phones/83956-350/Google-Pixel-7a.webp"
              }
              alt="Not Available"
            />
            <p>Google Pixel 7a</p>
          </NavLink>
        </li>
        <li>
          <NavLink>
            <img
              src={
                "https://m-cdn.phonearena.com/images/phones/83629-350/Apple-iPhone-14-Pro.webp"
              }
              alt="Not Available"
            />
            <p>Apple iPhone 14 Pro</p>
          </NavLink>
        </li>
        <li>
          <NavLink>
            <img
              src={
                "https://m-cdn.phonearena.com/images/phones/83799-350/OnePlus-11.webp"
              }
              alt="Not Available"
            />
            <p>OnePlus 11</p>
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default PhoneRenders;