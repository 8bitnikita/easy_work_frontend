import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { getVacancies } from "../../redux/reducers/vacanciesSlice";

import styles from "./Content.module.scss";
import bell from "./bell.wav";

const Content = () => {
  const dispatch = useDispatch();
  const vacancies = useSelector((state) => state.vacancies.vacancies);
  const bellSound = new Audio(bell);

  async function fetchVacancies() {
    const response = await axios.get("http://127.0.0.1:8000/api/v1/vacancies/");
    const data = await response.data;
    dispatch(getVacancies(data));
  }

  useEffect(() => {
    fetchVacancies();
    playNewVacancySound();
    console.log("Get New Vacancies");
  }, [vacancies.length]);

  useEffect(() => {
    setInterval(() => {
      fetchVacancies();
      console.log("Server Request");
    }, 5000);
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
              <a href={item.url}>{item.title}</a>
            </h2>
          </div>
          <span>{item.date}</span>
        </div>
        <p className={styles.item__city}>{item.city}</p>
      </div>
    );
  });

  return <div className={styles.wrapper}>{allVacancies.reverse()}</div>;
};

export default Content;
