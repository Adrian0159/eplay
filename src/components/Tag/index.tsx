import { TagContainer } from './styles'

export type Props = {
  size?: 'smaall' | 'big'
  children: string
}

const Tag = ({ children, size = 'smaall' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
