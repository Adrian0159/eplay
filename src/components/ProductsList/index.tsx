import Game from '../../models/Game'
import Product from '../Product'
import { List, Container, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ title, background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            title={game.title}
            system={game.system}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
