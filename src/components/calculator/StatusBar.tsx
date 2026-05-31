import styles from './StatusBar.module.css'

type StatusBarProps = {
  status: string
}

export function StatusBar({ status }: StatusBarProps) {
  return (
    <div className={styles.status}>
      STATUS: {status}
    </div>
  )
}
