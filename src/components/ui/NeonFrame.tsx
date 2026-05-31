import type { ReactNode } from 'react'
import styles from './NeonFrame.module.css'

type NeonFrameProps = {
  children: ReactNode
}

export function NeonFrame({ children }: NeonFrameProps) {
  return <section className={styles.frame}>{children}</section>
}
