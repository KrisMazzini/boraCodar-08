import { Container, SummaryContainer } from './styles'

import { Card } from '../Card'
import { Elevator } from '../Elevator'
import { BarChart, DataProps, BarChartProps } from '../BarChart'

export function WeeklyIndicator(props: BarChartProps) {
  const { dataSeries } = props

  const daysWithMoreSales = findDayWithMoreSales(dataSeries)
  const daysWithLessSales = findDayWithLessSales(dataSeries)

  function findDayWithMoreSales(dataSeries: DataProps[]): string {
    const values = dataSeries.map((data) => data.value)
    const maxValue = Math.max(...values)
    const dayWithMoreSales =
      dataSeries.find((data) => data.value === maxValue)?.label || ''
    return dayWithMoreSales
  }

  function findDayWithLessSales(dataSeries: DataProps[]): string {
    const values = dataSeries.map((data) => data.value)
    const minValue = Math.min(...values)
    const dayWithLessSales =
      dataSeries.find((data) => data.value === minValue)?.label || ''
    return dayWithLessSales
  }

  return (
    <Card title="Vendas por dia da semana" align="flex-start">
      <Container>
        <SummaryContainer>
          <Elevator
            label="Dia com mais vendas"
            result="up"
            value={daysWithMoreSales}
          />
          <Elevator
            label="Dia com menos vendas"
            result="down"
            value={daysWithLessSales}
          />
        </SummaryContainer>
        <BarChart {...props} />
      </Container>
    </Card>
  )
}
