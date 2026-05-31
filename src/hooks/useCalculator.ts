export function useCalculator() {
  const display = '0'
  const status = 'READY'

  const handleButtonPress = (value: string) => {
    void value
  }

  return { display, status, handleButtonPress }
}
