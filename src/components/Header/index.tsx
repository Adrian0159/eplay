import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import Logo from '../../assets/images/logo.svg'
import Carrinho from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <HeaderBar>
        <div>
          <Link to="/">
            <img src={Logo} alt="EPLAY" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link to="/categories">Categorias</Link>
              </LinkItem>
              <LinkItem>
                <Link to="/categories">Novidades</Link>
              </LinkItem>
              <LinkItem>
                <Link to="/categories">Promoções</Link>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <LinkCart href="#">
          0 - Produtos(s)
          <img src={Carrinho} alt="Carrinhoh" />
        </LinkCart>
      </HeaderBar>
    </>
  )
}

export default Header
