import { useState } from 'react'

import { DEFAULT_DISPLAY, ERROR_MESSAGE } from '../constants/calculatorLimits'
import { OPERATIONS, type Operation } from '../constants/operations'
import {
  appendDecimal,
  appendDigit,
  calculate,
  createInitialDisplay,
  toggleSign,
} from '../systems/calculatorEngine'

type CalculatorStatus = 'READY' | 'INPUT' | 'PENDING' | 'RESULT' | 'ERROR'

function mapValueToOperation(value: string): Operation | null {
  if (value === '+') return OPERATIONS.ADD
  if (value === '-') return OPERATIONS.SUBTRACT
  if (value === '*') return OPERATIONS.MULTIPLY
  if (value === '/') return OPERATIONS.DIVIDE
  if (value === '%') return OPERATIONS.MODULO
  return null
}

export function useCalculator() {
  const [display, setDisplay] = useState(createInitialDisplay)
  const [storedValue, setStoredValue] = useState<number | null>(null)
  const [pendingOperation, setPendingOperation] = useState<Operation | null>(null)
  const [waitingForNextValue, setWaitingForNextValue] = useState(false)
  const [status, setStatus] = useState<CalculatorStatus>('READY')

  const setError = () => {
    setDisplay(ERROR_MESSAGE)
    setStoredValue(null)
    setPendingOperation(null)
    setWaitingForNextValue(true)
    setStatus('ERROR')
  }

  const pressDigit = (digit: string) => {
    if (waitingForNextValue) {
      setDisplay(appendDigit(DEFAULT_DISPLAY, digit))
      setWaitingForNextValue(false)
      setStatus('INPUT')
    } else {
      setDisplay((current) => appendDigit(current, digit))
      setStatus('INPUT')
    }
  }

  const pressDecimal = () => {
    if (waitingForNextValue) {
      setDisplay(appendDecimal(DEFAULT_DISPLAY))
      setWaitingForNextValue(false)
      setStatus('INPUT')
    } else {
      setDisplay((current) => appendDecimal(current))
      setStatus('INPUT')
    }
  }

  const pressToggleSign = () => {
    setDisplay((current) => toggleSign(current))
    setStatus((current) => (current === 'ERROR' ? 'ERROR' : 'INPUT'))
  }

  const pressClear = () => {
    setDisplay(createInitialDisplay())
    setStoredValue(null)
    setPendingOperation(null)
    setWaitingForNextValue(false)
    setStatus('READY')
  }

  const pressOperation = (operation: Operation) => {
    const currentValue = Number(display)
    if (!Number.isFinite(currentValue)) {
      setError()
      return
    }
    if (storedValue === null) {
      setStoredValue(currentValue)
      setPendingOperation(operation)
      setWaitingForNextValue(true)
      setStatus('PENDING')
      return
    }
    if (pendingOperation !== null) {
      const result = calculate(storedValue, currentValue, pendingOperation)
      if (result === ERROR_MESSAGE) {
        setError()
        return
      }
      setDisplay(result)
      setStoredValue(Number(result))
      setPendingOperation(operation)
      setWaitingForNextValue(true)
      setStatus('PENDING')
      return
    }
    setStoredValue(currentValue)
    setPendingOperation(operation)
    setWaitingForNextValue(true)
    setStatus('PENDING')
  }

  const pressEquals = () => {
    if (storedValue === null || pendingOperation === null) {
      setStatus('RESULT')
      return
    }
    const currentValue = Number(display)
    if (!Number.isFinite(currentValue)) {
      setError()
      return
    }
    const result = calculate(storedValue, currentValue, pendingOperation)
    if (result === ERROR_MESSAGE) {
      setError()
      return
    }
    setDisplay(result)
    setStoredValue(null)
    setPendingOperation(null)
    setWaitingForNextValue(true)
    setStatus('RESULT')
  }

  const pressButton = (value: string) => {
    if (/^[0-9]$/.test(value)) {
      pressDigit(value)
      return
    }
    if (value === '.') return pressDecimal()
    if (value === '+/-') return pressToggleSign()
    if (value === 'C') return pressClear()
    if (value === '=') return pressEquals()
    const operation = mapValueToOperation(value)
    if (operation !== null) {
      pressOperation(operation)
    }
  }

  const handleButtonPress = (value: string) => {
    pressButton(value)
  }

  return {
    display,
    status,
    pendingOperation,
    handleButtonPress,
    pressDigit,
    pressDecimal,
    pressOperation,
    pressEquals,
    pressClear,
    pressToggleSign,
    pressButton,
  }
}
