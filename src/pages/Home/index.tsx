import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['R$ 259,00', '10%'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Diablo',
    system: 'Windows',
    infos: ['R$ 159,00', '10%'],
    image: diablo
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Zelda',
    system: 'Windows',
    infos: ['R$ 299,00', '10%'],
    image: zelda
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['R$ 199,00', '10%'],
    image: starWars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Resident Evil 4, conhecido no japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Diablo',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Resident Evil 4, conhecido no japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['17/05'],
    image: resident
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Resident Evil 4, conhecido no japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Resident Evil 4, conhecido no japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['17/05'],
    image: starWars
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
