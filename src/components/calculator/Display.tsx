import styles from './Display.module.css'

type DisplayProps = {
  value: string
  isError?: boolean
  operationSymbol?: string
}

export function Display({ value, isError = false, operationSymbol }: DisplayProps) {
  return (
    <div className={styles.display} aria-label="calculator display"
      aria-live="polite" data-error={isError ? 'true' : 'false'}>
      <div className={styles.topRow}>
        <span className={styles.label}>LIMIT 9 DIGITS</span>
        {operationSymbol && !isError && <span className={styles.opBadge}>{operationSymbol}</span>}
      </div>
      <span className={styles.value}>{value}</span>
    </div>
  )
}
