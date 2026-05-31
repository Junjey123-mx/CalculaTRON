import { CALCULATOR_BUTTONS } from '../../constants/buttons'
import { CalculatorButton } from './CalculatorButton'
import styles from './Keypad.module.css'

type KeypadProps = { onButtonPress: (value: string) => void }

export function Keypad({ onButtonPress }: KeypadProps) {
  return (
    <div className={styles.keypad} aria-label="calculator keypad">
      {CALCULATOR_BUTTONS.map((button) => (
        <CalculatorButton
          key={`${button.value}-${button.label}`}
          label={button.label} value={button.value}
          kind={button.kind} onPress={onButtonPress}
        />
      ))}
    </div>
  )
}
