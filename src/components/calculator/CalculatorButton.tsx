import styles from './CalculatorButton.module.css'

type CalculatorButtonProps = {
  label: string
  value: string
  kind?: string
  onPress: (value: string) => void
}

export function CalculatorButton({ label, value, kind = 'number', onPress }: CalculatorButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[kind] ?? ''}`}
      onClick={() => onPress(value)}
      aria-label={label}
    >
      {label}
    </button>
  )
}
