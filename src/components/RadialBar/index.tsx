import {
  Container,
  InnerCircle,
  OuterCircle,
  RadialBarStrokeProps,
} from './styles'

interface RadialBarProps extends RadialBarStrokeProps {
  gradientColors?: string[]
  identifier: string
}

export function RadialBar({
  percentage,
  identifier,
  gradientColors = ['#32CCBC', '#90F7EC'],
}: RadialBarProps) {
  const gradientId = `${identifier.replaceAll(' ', '-')}-bar-gradient`
  console.log(gradientId)

  return (
    <Container percentage={percentage}>
      <OuterCircle>
        <InnerCircle>
          <span>{(percentage * 100).toFixed(0)}%</span>
          <span>alcançada</span>
        </InnerCircle>
      </OuterCircle>
      <svg>
        <defs>
          <linearGradient id={`${gradientId}`}>
            {gradientColors.map((color, index) => {
              const offset = index * (100 / (gradientColors.length - 1))
              return (
                <stop offset={`${offset}%`} stopColor={color} key={color} />
              )
            })}
          </linearGradient>
        </defs>
        <circle
          cx="50%"
          cy="50%"
          r={83}
          fill="none"
          strokeLinecap="round"
          stroke={`url(#${gradientId})`}
        />
      </svg>
    </Container>
  )
}
