import { useState } from "react";
import styles from "./Header.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

const Header = () => {
  const [notification, setNotification] = useState(false);
  const soundNotification = () => {
    setNotification(!notification);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logo__text}>
            <span>E</span>ASY <span>W</span>ORK
          </div>
          <div className={styles.tagline}>i will find your work!</div>
        </div>
        <div className={styles.auth}>
          <span onClick={soundNotification}>
            {notification ? (
              <FontAwesomeIcon
                className={styles.auth__bell_on}
                icon={icon({ name: "bell", style: "solid" })}
              />
            ) : (
              <FontAwesomeIcon
                className={styles.auth__bell}
                icon={icon({ name: "bell", style: "regular" })}
              />
            )}
          </span>
          <FontAwesomeIcon
            className={styles.auth__user}
            icon={icon({ name: "user", style: "regular" })}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
