import Button from '../Button'
import Logo from '../Logo'
import SearchBox from '../SearchBox'
import HeaderLink from './components/HeaderLink'
import HeaderList from './components/HeaderList'
import HeaderListItem from './components/HeaderListItem'

const Header = () => {
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
            <Button variant='submit'>
              New Post
            </Button>
    </HeaderList>
    </header>
  )
}

export default Header
