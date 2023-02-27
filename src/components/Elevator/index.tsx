import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'

import { Container, Label } from './styles'

interface ElevatorProps {
  label: string
  result: 'up' | 'down'
  value: number | string
}

export function Elevator({ label, result, value }: ElevatorProps) {
  return (
    <Container>
      <Label result={result}>
        <img src={result === 'up' ? arrowUp : arrowDown} alt="" />
        <span>{label}</span>
      </Label>
      <span>{value}</span>
    </Container>
  )
}
