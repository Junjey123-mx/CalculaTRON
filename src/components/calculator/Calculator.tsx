import { useCalculator } from '../../hooks/useCalculator'
import { CalculatorHeader } from './CalculatorHeader'
import { Display } from './Display'
import { Keypad } from './Keypad'
import styles from './Calculator.module.css'

const OP_SYMBOLS: Record<string, string> = { ADD: '+', SUBTRACT: '-', MULTIPLY: '×', DIVIDE: '÷', MODULO: '%' }

export function Calculator() {
  const { display, status, pendingOperation, handleButtonPress } = useCalculator()
  const sym = pendingOperation ? OP_SYMBOLS[pendingOperation] : undefined
  return (
    <section className={styles.calculator} aria-label="CalculaTRON calculator">
      <CalculatorHeader status={status} />
      <Display value={display} isError={status === 'ERROR'} operationSymbol={sym} />
      <Keypad onButtonPress={handleButtonPress} />
    </section>
  )
}
