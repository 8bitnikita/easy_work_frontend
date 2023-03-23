import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  getVacancies,
  resetVacancies,
} from '../../redux/reducers/vacanciesSlice'

import bell from '../../assets/bell.wav'
import Reconnection from '../../ui/Reconnection/Reconnection'
import styles from './Content.module.scss'

const Content = () => {
  const [connected, setConnected] = useState(false)

  const dispatch = useDispatch()
  const vacancies = useSelector((state) => state.vacancies.vacancies)

  const bellSound = new Audio(bell)

  const currentDate = new Date()

  const socket = useRef()

  useEffect(() => {
    const connect = () => {
      socket.current = new WebSocket('ws://localhost:8000/')

      socket.current.onopen = () => {
        setConnected(true)
      }

      socket.current.onclose = () => {
        setConnected(false)
        dispatch(resetVacancies())
        setTimeout(() => {
          connect()
        }, 3000)
      }

      socket.current.onmessage = (event) => {
        const newVacancies = JSON.parse(event.data)
        dispatch(getVacancies(newVacancies))
        playNewVacancySound()

        console.log(
          `Got new vacancies: ${currentDate.getHours()}:${currentDate.getMinutes()}`
        )
      }
    }
    connect()
  }, [])

  const playNewVacancySound = () => {
    bellSound.play().catch(function (error) {
      console.log(error)
    })
  }

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
    )
  })

  if (!connected) {
    return <Reconnection />
  }

  return <div className={styles.wrapper}>{allVacancies}</div>
}

export default Content
