import { Card } from '../Card'
import { RadialBar } from '../RadialBar'
import { TextIndicator } from '../TextIndicator'
import { Labels } from './styles'

interface GoalIndicatorProps {
  title: string
  expected: number
  accomplished: number
  prefix?: string
  suffix?: string
  colors?: string[]
}

export function GoalIndicator({
  title,
  expected,
  accomplished,
  prefix,
  suffix,
  colors,
}: GoalIndicatorProps) {
  return (
    <Card title={title}>
      <RadialBar
        identifier={title}
        percentage={accomplished / expected}
        gradientColors={colors}
      />
      <Labels>
        <TextIndicator
          title="Esperado"
          value={expected}
          prefix={prefix}
          suffix={suffix}
          useLegendMark
        />
        <TextIndicator
          title="Alcançado"
          value={accomplished}
          prefix={prefix}
          suffix={suffix}
          useLegendMark
          colors={colors}
        />
      </Labels>
    </Card>
  )
}
