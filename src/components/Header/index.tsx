import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import Logo from '../Logo'
import SearchBox from '../SearchBox'
import HeaderLink from './components/HeaderLink'
import HeaderList from './components/HeaderList'
import HeaderListItem from './components/HeaderListItem'

const Header = () => {
  const navigate = useNavigate();

  const handleCkick = () => {
    navigate("/create-post")
  }

  return (
    <header>
        <HeaderList>
            <HeaderListItem>
              <Logo size='small'/>
            </HeaderListItem>
            <HeaderListItem>
                <HeaderLink/>
            </HeaderListItem>
            <HeaderListItem>
              <SearchBox placeholder='Search Post' />
            </HeaderListItem>
            <HeaderListItem>
              <Button onClick={handleCkick} variant='submit'>
                New Post
              </Button>
            </HeaderListItem>
    </HeaderList>
    </header>
  )
}

export default Header
