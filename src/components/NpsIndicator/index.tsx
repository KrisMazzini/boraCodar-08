import happyFace from '../../assets/happy-face.svg'

import { EmojiContainer } from './styles'

import { TextIndicator } from '../TextIndicator'
import { Card } from '../Card'

interface NpsIndicatorProps {
  title: string
  score: number
}

export function NpsIndicator({ title, score }: NpsIndicatorProps) {
  return (
    <Card title={title}>
      <EmojiContainer>
        <img src={happyFace} alt="" />
        <p>Excelente!</p>
      </EmojiContainer>
      <TextIndicator title="NPS Score" value={score} />
    </Card>
  )
}
