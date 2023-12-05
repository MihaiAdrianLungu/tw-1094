import {Link} from 'react-router-dom';

function Navbar (props) {
    const {loggedIn, setLoggedIn} = props;

    const logoutUser = () => {
        setLoggedIn(false);
        localStorage.removeItem('token');
    }

    return (
        <div className='navbarWrapper'>
            <Link to='/'>Homepage</Link>

            {loggedIn ? 
                <Link to='/' onClick={() => logoutUser()}>Logout</Link> 
                : 
                <Link to='/login'>Login</Link>
            }
        </div>
    )   
}

export default Navbar;