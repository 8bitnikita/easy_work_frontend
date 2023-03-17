import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getVacancies } from "../../redux/reducers/vacanciesSlice";

import bell from "../../assets/bell.wav";
import styles from "./Content.module.scss";

const Content2 = () => {
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const vacancies = useSelector((state) => state.vacancies.vacancies);

  const bellSound = new Audio(bell);
  const socket = new WebSocket("ws://localhost:8000/");

  const currentDate = new Date();

  useEffect(() => {
    socket.onmessage = (event) => {
      const newVacancies = JSON.parse(event.data);
      dispatch(getVacancies(newVacancies));

      playNewVacancySound();

      console.log(
        `Got new vacancies: ${currentDate.getHours()}:${currentDate.getMinutes()}`
      );
    };

    socket.onclose = () => {
      setError(true);
    };
  }, []);

  const playNewVacancySound = () => {
    bellSound.play();
  };

  const allVacancies = vacancies.map((item) => {
    return (
      <div
        key={(Math.random() + 1).toString(36).substring(7)}
        className={styles.item}
      >
        <div className={styles.item__title}>
          <div>
            <h2>
              <a rel="noreferrer" target="_blank" href={item.url}>
                {item.title}
              </a>
            </h2>
          </div>
          <span>{item.date}</span>
        </div>
        <p className={styles.item__city}>{item.city}</p>
      </div>
    );
  });

  const getError = () => (
    <div className={styles.error}>The server is not responding!</div>
  );

  return (
    <div className={styles.wrapper}>{error ? getError() : allVacancies}</div>
  );
};

export default Content2;
