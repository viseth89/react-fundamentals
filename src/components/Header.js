import {
    Navbar, 
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    return (
        <header>
            <Navbar className='header'>
                <NavbarBrand href='/'>React Library</NavbarBrand>
                <Nav classname='ml-auto' navbar>
                    <NavItem>
                        <NavLink href='https://github.com/viseth89/create-react-app.git'>
                            Github
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    )
}

export default Header;