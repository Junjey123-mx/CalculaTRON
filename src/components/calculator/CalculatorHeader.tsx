import styles from './CalculatorHeader.module.css'

type HeaderProps = { status: string }

export function CalculatorHeader({ status }: HeaderProps) {
  return (
    <header className={styles.header}>
      <span className={styles.title}>CalculaTRON</span>
      <span className={styles.subtitle}>STATUS: {status}</span>
    </header>
  )
}
