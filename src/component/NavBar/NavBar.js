import './navBar.modules.css'

const NavBar = (props) => {
    return <header className='nav'>
        <h2>Shopping List</h2>
        <span>{props.totalItem}</span>
    </header>;
};

export default NavBar;