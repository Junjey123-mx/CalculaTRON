import styles from './StatusBar.module.css'

type StatusBarProps = {
  status: string
}

export function StatusBar({ status }: StatusBarProps) {
  return (
    <div className={styles.status}>
      <span>STATUS: {status}</span>
    </div>
  )
}
