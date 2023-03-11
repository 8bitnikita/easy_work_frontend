import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getVacancies } from "../../redux/reducers/vacanciesSlice";

import bell from "../../assets/bell.wav";
import styles from "./Content.module.scss";

const Content = () => {
  const dispatch = useDispatch();
  const vacancies = useSelector((state) => state.vacancies.vacancies);
  const bellSound = new Audio(bell);
  const [error, setError] = useState(false);

  async function fetchVacancies() {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/v1/vacancies/"
      );
      const data = await response.data;
      setError(false);
      dispatch(getVacancies(data));
    } catch (error) {
      setError(true);
    }
  }

  useEffect(() => {
    fetchVacancies();
    playNewVacancySound();
    console.log("Get New Vacancies");
  }, [vacancies.length, error]);

  useEffect(() => {
    setInterval(() => {
      fetchVacancies();
      console.log("Server Request");
    }, 60000);
  }, []);

  const playNewVacancySound = () => {
    bellSound.play();
  };

  const allVacancies = vacancies.map((item) => {
    return (
      <div key={item.id} className={styles.item}>
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
    <div className={styles.wrapper}>
      {error ? getError() : allVacancies.reverse()}
    </div>
  );
};

export default Content;
