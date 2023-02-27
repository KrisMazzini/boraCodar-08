import { Container, LegendMark } from './styles'

interface TextIndicatorProps {
  title: string
  value: number
  prefix?: string
  suffix?: string
  useLegendMark?: boolean
  colors?: string[]
}

export function TextIndicator({
  title,
  value,
  prefix = '',
  suffix = '',
  useLegendMark = false,
  colors,
}: TextIndicatorProps) {
  return (
    <Container>
      {useLegendMark ? <LegendMark colors={colors} /> : <></>}
      <p>{title}</p>
      <span>{`${prefix}${value}${suffix}`}</span>
    </Container>
  )
}
