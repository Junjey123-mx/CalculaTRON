import styles from './CalculatorHeader.module.css'

export function CalculatorHeader() {
  return (
    <header className={styles.header}>
      <span className={styles.title}>GRID CALCULATOR</span>
      <span className={styles.subtitle}>STATUS: READY</span>
    </header>
  )
}
