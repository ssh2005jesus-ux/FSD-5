
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">

            <h2>Shirley.</h2>

            <div>
                <Link to="/">Home</Link>
                <Link to="/Certificate">Certificate</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/Project">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>

        </nav>
    );
}

export default Navbar;
