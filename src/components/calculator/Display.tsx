import styles from './Display.module.css'

type DisplayProps = {
  value: string
  isError?: boolean
}

export function Display({ value, isError = false }: DisplayProps) {
  return (
    <div
      className={styles.display}
      aria-label="calculator display"
      aria-live="polite"
      data-error={isError ? 'true' : 'false'}
    >
      <span className={styles.label}>INPUT CORE · LIMIT 9 DIGITS</span>
      <span className={styles.value}>{value}</span>
    </div>
  )
}
