import { CalculatorHeader } from './CalculatorHeader'
import { Display } from './Display'
import { Keypad } from './Keypad'
import { StatusBar } from './StatusBar'
import styles from './Calculator.module.css'

export function Calculator() {
  const handleButtonPress = (value: string) => {
    void value
  }

  return (
    <div className={styles.calculator}>
      <CalculatorHeader />
      <StatusBar status="READY" />
      <Display value="0" />
      <Keypad onButtonPress={handleButtonPress} />
    </div>
  )
}
