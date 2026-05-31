import { useCalculator } from '../../hooks/useCalculator'
import { CalculatorHeader } from './CalculatorHeader'
import { Display } from './Display'
import { Keypad } from './Keypad'
import { StatusBar } from './StatusBar'
import styles from './Calculator.module.css'

export function Calculator() {
  const { display, status, handleButtonPress } = useCalculator()

  return (
    <section className={styles.calculator} aria-label="CalculaTRON calculator">
      <CalculatorHeader />
      <StatusBar status={status} />
      <Display value={display} isError={status === 'ERROR'} />
      <Keypad onButtonPress={handleButtonPress} />
    </section>
  )
}
