import { Container, Goals } from './styles'

import { GoalIndicator } from '../../components/GoalIndicator'
import { NpsIndicator } from '../../components/NpsIndicator'
import { WeeklyIndicator } from '../../components/WeeklyIndicator'

import { DataProps } from '../../components/BarChart'

export function Home() {
  const weeklySales: DataProps[] = [
    {
      label: 'domingo',
      value: 390,
    },
    {
      label: 'segunda-feira',
      value: 1150,
    },
    {
      label: 'terça-feira',
      value: 760,
    },
    {
      label: 'quarta-feira',
      value: 1590,
    },
    {
      label: 'quinta-feira',
      value: 1290,
    },
    {
      label: 'sexta-feira',
      value: 1200,
    },
    {
      label: 'sabado',
      value: 690,
    },
  ]

  return (
    <Container>
      <Goals>
        <NpsIndicator title="NPS geral" score={75} />
        <GoalIndicator
          title="Vendas fechadas"
          expected={100}
          accomplished={70}
          colors={['#CE9FFC', '#7367F0']}
        />
        <GoalIndicator
          title="Meta mensal"
          expected={70}
          accomplished={63}
          prefix="R$ "
          suffix="K"
          colors={['#DF9780', '#A66DE9']}
        />
      </Goals>
      <WeeklyIndicator dataSeries={weeklySales} goal={700} />
    </Container>
  )
}
