import { CALCULATOR_BUTTONS } from '../../constants/buttons'
import { CalculatorButton } from './CalculatorButton'
import styles from './Keypad.module.css'

type KeypadProps = {
  onButtonPress: (value: string) => void
}

export function Keypad({ onButtonPress }: KeypadProps) {
  return (
    <div className={styles.keypad}>
      {CALCULATOR_BUTTONS.map((btn) => (
        <CalculatorButton
          key={btn.value}
          label={btn.label}
          value={btn.value}
          kind={btn.kind}
          onPress={onButtonPress}
        />
      ))}
    </div>
  )
}
