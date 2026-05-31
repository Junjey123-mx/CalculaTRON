import styles from './Display.module.css'

type DisplayProps = {
  value: string
  isError?: boolean
}

export function Display({ value, isError = false }: DisplayProps) {
  return (
    <div
      className={`${styles.display}${isError ? ` ${styles.error}` : ''}`}
      aria-label="calculator display"
      aria-live="polite"
    >
      {value}
    </div>
  )
}
