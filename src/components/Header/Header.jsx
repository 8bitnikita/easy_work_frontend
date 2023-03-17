import { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import styles from './Header.module.scss'

const Header = () => {
  const [bellNotification, setBellNotification] = useState(false)
  const { theme, setTheme } = useTheme()

  const handleLightTheme = () => {
    setTheme('light')
  }
  const handleDarkTheme = () => {
    setTheme('dark')
  }

  const soundNotification = () => {
    setBellNotification(!bellNotification)
  }

  const customClassName = (selectedTheme) => {
    if (theme === selectedTheme) {
      return (
        styles.auth__theme_btn +
        ' ' +
        styles.auth__theme_active +
        ' ' +
        styles.auth__btn +
        ' material-symbols-outlined'
      )
    } else {
      return (
        styles.auth__theme_btn +
        ' ' +
        styles.auth__btn +
        ' material-symbols-outlined'
      )
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logo__text}>
            <span>e</span>asy<span>w</span>ork
          </div>

          <div className={styles.tagline}>i will find your work!</div>
        </div>
        <div className={styles.auth}>
          <div className={styles.auth__theme}>
            <div className={styles.switchWrapper}>
              <div className={styles.switch}>
                <span
                  onClick={handleLightTheme}
                  className={customClassName('light')}>
                  brightness_medium
                </span>
                <span
                  onClick={handleDarkTheme}
                  className={customClassName('dark')}>
                  nightlight
                </span>
              </div>
            </div>
          </div>
          <div className={styles.auth__btnWrapper}>
            <span onClick={soundNotification}>
              {bellNotification ? (
                <span
                  className={
                    styles.auth__bell_on +
                    ' ' +
                    styles.auth__btn +
                    ' material-symbols-outlined'
                  }>
                  notifications
                </span>
              ) : (
                <span
                  className={
                    styles.auth__bell +
                    ' ' +
                    styles.auth__btn +
                    ' material-symbols-outlined'
                  }>
                  notifications
                </span>
              )}
            </span>
            <span
              className={
                styles.auth__user +
                ' ' +
                styles.auth__btn +
                ' material-symbols-outlined'
              }>
              location_away
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
