import { Bar, BarContainer, Bars, Goal, Container } from './styles'

export interface DataProps {
  label: string
  value: number
}

export interface BarChartProps {
  dataSeries: DataProps[]
  goal?: number
}

export function BarChart({ dataSeries, goal = 0 }: BarChartProps) {
  const maxValue = getMaxDataSeriesValue(dataSeries)
  const goalOverMaxValuePercentage = goal / maxValue

  function getMaxDataSeriesValue(dataSeries: DataProps[]): number {
    const values = dataSeries.map((data) => data.value)
    return Math.max(...values)
  }

  return (
    <Container>
      <Bars>
        {dataSeries.map((data) => {
          return (
            <BarContainer key={data.label}>
              <Bar percentage={data.value / maxValue} value={data.value} />
              <span>{data.label.slice(0, 3)}</span>
            </BarContainer>
          )
        })}
      </Bars>
      {goal > 0 ? <Goal percentage={goalOverMaxValuePercentage} /> : <></>}
    </Container>
  )
}
