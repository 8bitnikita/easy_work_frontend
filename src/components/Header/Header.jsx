import styles from "./Header.module.scss";
import Logo from "../../img/logo.svg";
// import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <div className={styles.logo__text}>EASY WORK</div>
        <img className={styles.logo__img} src={Logo} alt="logo" />
      </div>
      {/* <div class="switch"> */}
      {/*   <input */}
      {/*     type="radio" */}
      {/*     class="switch-input" */}
      {/*     name="view" */}
      {/*     value="week" */}
      {/*     id="week" */}
      {/*     checked */}
      {/*   /> */}
      {/*   <label for="week" class="switch-label switch-label-off"> */}
      {/*     ON */}
      {/*   </label> */}
      {/*   <input */}
      {/*     type="radio" */}
      {/*     class="switch-input" */}
      {/*     name="view" */}
      {/*     value="month" */}
      {/*     id="month" */}
      {/*   /> */}
      {/*   <label for="month" class="switch-label switch-label-on"> */}
      {/*     OFF */}
      {/*   </label> */}
      {/*   <span class="switch-selection"></span> */}
      {/* </div> */}
      <div className={styles.auth}>
        <button className={styles.auth__login}>LogIn</button>
        <button className={styles.auth__signup}>SignUp</button>
      </div>
    </div>
  );
};

export default Header;
